const { migrate } = require("drizzle-orm/postgres-js/migrator");
const path = require("path");
const { drizzle } = require("drizzle-orm/postgres-js");
const postgres = require("postgres");
const dotenv = require("dotenv");

const args = process.argv;
let envs = path.resolve(".env.development.local");
let dbCogs: { max: number; ssl?: boolean } = {
    max: 1,
};

if (args[2] === "p") {
    envs = path.resolve(".env.production.local");
    dbCogs = {
        max: 1,
        ssl: true,
    };
}

dotenv.config({
    path: envs,
});

const queryClient = postgres(process.env.DB_URL, dbCogs);

const db = drizzle(queryClient);

(async function migrateNow() {
    try {
        const migrationsFolder = path.resolve("src/.drizzle/migrations");
        await migrate(db, { migrationsFolder: migrationsFolder });

        console.log("migration succesfull");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
})();
