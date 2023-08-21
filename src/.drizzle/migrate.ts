const { migrate } = require("drizzle-orm/postgres-js/migrator");
const path = require("path");
const { drizzle } = require('drizzle-orm/postgres-js');
const  postgres = require('postgres');
const dotenv = require("dotenv");

dotenv.config({
    path:path.resolve(".env.development.local"),
})
 

 
const queryClient = postgres(process.env.DB_URL,{
    max:1,
    ssl: "require",
}); 

const db = drizzle(queryClient);



async function migrateNow(){
    try{ 
        const migrationsFolder = path.resolve("src/.drizzle/migrations")
        await migrate(db, { migrationsFolder:migrationsFolder }); 
        
        console.log("migration succesfull");
        process.exit(0);
    }
    catch(error){
        console.log(error) 
        console.log("migration failed");
    }
}



migrateNow();