"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var debug_1 = __importDefault(require("./config/debug"));
var express_ejs_layouts_1 = __importDefault(require("express-ejs-layouts"));
var path_1 = __importDefault(require("path"));
var socket_io_1 = require("socket.io");
var io = new socket_io_1.Server({
    cors: {
        origin: '*',
    }
});
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
// EJS setup
app.use(express_ejs_layouts_1.default);
// Setting the root path for views directory
app.set('views', path_1.default.join(__dirname, 'views'));
// Setting the view engine
app.set('view engine', 'ejs');
// Setting the port
var port = debug_1.default.PORT;
// Starting the server
server.listen(port, function () {
    console.log("SERVER RUNNING ON ".concat(port));
});
/* Home route */
app.get("/", function (req, res) {
    res.render("index");
});
var publicDirectoryPath = path_1.default.join(__dirname, "./static");
app.use('/static', express_1.default.static(publicDirectoryPath));
var users = [];
var foods = [];
var sockets = [];
function genPos(from, to) {
    return Math.floor(Math.random() * to) + from;
}
function addFoods() {
    var rx = genPos(0, 2000);
    var ry = genPos(0, 1000);
    var food = {
        foodID: foods.length,
        x: rx, y: ry,
        ate: false
    };
    foods[foods.length] = food;
}
setInterval(function () {
    if (foods.length < 200) {
        addFoods();
    }
}, 1000);
io.on('connection', function (socket) {
    console.log('A user connected. Assigning UserID...');
    var userID = users.length;
    socket.emit("welcome", userID);
    socket.on("gotit", function (player) {
        console.log("User #" + userID + " accepted!");
        player.playerID = userID;
        sockets[player.playerID] = socket;
        var found = false;
        if (users[player.playerID] != undefined) {
            found = true;
        }
        if (!found) {
            console.log("Add player");
            users[player.playerID] = player;
        }
        console.log("Total player: " + users.length);
        socket.emit("playerJoin", users);
    });
    socket.on("playerKill", function (player, victim) {
        console.log("KILLING");
        users[player.playerID] = player;
        sockets[victim.playerID].emit("DIE");
        socket.emit("playerUpdate", users);
    });
    socket.on("playerEat", function (player, food) {
        users[player.playerID] = player;
        var idToRemove = -1;
        for (var i = 0; i < foods.length; i++) {
            if (foods[i].foodID == food.foodID) {
                idToRemove = i;
                break;
            }
        }
        if (idToRemove != -1) {
            foods.splice(idToRemove, 1);
        }
        socket.emit("playerUpdate", users);
        socket.emit("foodUpdate", foods);
    });
    socket.on("playerSendPos", function (player) {
        users[player.playerID] = player;
        socket.emit("playerUpdate", users);
        socket.emit("foodUpdate", foods);
    });
    socket.on('disconnect', function () {
        users.splice(userID, 1);
        console.log('User #' + userID + ' disconnected');
        socket.emit("playerDisconnect", users);
    });
});
io.listen(3003);
