import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "leave_management"
});

export const db = drizzle(connection);
