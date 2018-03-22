// * =========================================================================== *
// * SET UP MySQL CONNECTION *
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// * MAKE CONNECTION *
connection.connect((err) => {
  if (err) {
    console.error("There was anerror connecting: ${err.stack}");
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// * EXPORT CONNECTION FOR ORM TO USE *
module.exports = connection;
// * =========================================================================== *

