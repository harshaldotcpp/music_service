import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const db = ((): PostgresJsDatabase => {
    const databaseURL: string | undefined = process.env.DB_URL;
    if (!databaseURL) throw new Error("DB_URL ENV missing");
    const queryClient = postgres(databaseURL, {
        max: 1,
        ssl: "require",
    });
    const db: PostgresJsDatabase = drizzle(queryClient);
    return db;
})();

// database object
export default db;
