var myswl = require("mysql");

var connection = mysql.createConnection({
    port: 7000,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

//connection promise
connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;