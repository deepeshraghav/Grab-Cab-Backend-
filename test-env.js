const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

console.log("Does DB_CONNECT exist?", "DB_CONNECT" in process.env);
console.log("DB_CONNECT value:", JSON.stringify(process.env.DB_CONNECT));
