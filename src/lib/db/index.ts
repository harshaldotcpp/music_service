import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const db = ((): PostgresJsDatabase => {
    const databaseURL: string | undefined = process.env.DB_URL;
    if (!databaseURL) throw new Error("DB_URL ENV missing");

    let dbConfig: { max: number; ssl?: boolean } = { max: 1 };

    if (process.env.DB_LEVEL === "PROD")
        dbConfig = {
            max: dbConfig.max,
            ssl: true,
        };

    const queryClient = postgres(databaseURL, dbConfig);
    const db: PostgresJsDatabase = drizzle(queryClient);
    return db;
})();

// database object
export default db;
