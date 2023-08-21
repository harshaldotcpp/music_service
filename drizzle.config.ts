import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path:path.resolve(".env.development.local"),
})
 
 
 
 
export default {
  schema: "./src/lib/db/schema/*",
  driver: 'pg', 
  out: "./src/.drizzle/migrations",
  dbCredentials: {
    connectionString: process.env.DB_URL + "?sslmode=require", 
  }
} satisfies Config;
