import express, { Application } from "express";
import http from "http";
import debug from "./config/debug";
import expressLayouts from 'express-ejs-layouts';
import path from "path";
import { Request, Response } from "express";
import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: '*',
  }
});

const app: Application = express();
const server: http.Server = http.createServer(app);
// EJS setup
app.use(expressLayouts);

// Setting the root path for views directory
app.set('views', path.join(__dirname, 'views'));

// Setting the view engine
app.set('view engine', 'ejs');

// Setting the port
const port = debug.PORT;

// Starting the server
server.listen(port, () => {
  console.log(`SERVER RUNNING ON ${port}`);
});

/* Home route */
app.get("/", (req: Request, res: Response) => {
  res.render("index")
});

const publicDirectoryPath = path.join(__dirname, "./static");
app.use('/static',express.static(publicDirectoryPath));

var users: Array<any> = [];
var foods: Array<any> = [];
var sockets: Array<any> = [];


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

setInterval(function(){
	if (foods.length < 200) {
		addFoods();
	}
}, 1000);

io.on('connection', function(socket){  
  console.log('A user connected. Assigning UserID...');

  var userID = users.length;

  socket.emit("welcome", userID);

  socket.on("gotit", function(player){
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

  socket.on("playerKill", function(player, victim){
  	console.log("KILLING");
  	users[player.playerID] = player;
  	sockets[victim.playerID].emit("DIE");
  	socket.emit("playerUpdate", users);
  });

  socket.on("playerEat", function(player, food){
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

  socket.on("playerSendPos", function(player){
  	users[player.playerID] = player;
  	socket.emit("playerUpdate", users);
  	socket.emit("foodUpdate", foods);
  });

  socket.on('disconnect', function(){
  	users.splice(userID, 1);
  	console.log('User #' + userID + ' disconnected');
  	socket.emit("playerDisconnect", users);
  });
});

io.listen(3003);