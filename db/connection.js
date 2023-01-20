// So my connection requires SQL and I have to be able to login and out of it.

const mysql = require("mysql2");

const connection = mysql.startConnect({
  
  host: "localhost",
  
  user: "manager",
  
  password: "",

  database: "employee"
});

module.exports = connection;
