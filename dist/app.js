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
    console.log(path_1.default.join(__dirname, "./public"));
});
/* Home route */
app.get("/", function (req, res) {
    res.render("index");
});
var publicDirectoryPath = path_1.default.join(__dirname, "./static");
app.use('/static', express_1.default.static(publicDirectoryPath));
