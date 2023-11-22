import express, { Application } from "express";
import http from "http";
import debug from "./config/debug";
import expressLayouts from 'express-ejs-layouts';
import path from "path";
import { Request, Response } from "express";

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
  console.log(path.join(__dirname, "./public"))
});

/* Home route */
app.get("/", (req: Request, res: Response) => {
  res.render("index")
});

const publicDirectoryPath = path.join(__dirname, "./static");
app.use('/static',express.static(publicDirectoryPath));