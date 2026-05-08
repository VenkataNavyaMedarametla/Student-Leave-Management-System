export default {
  schema: "./src/db/schema.js",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "leave_management"
  }
};
