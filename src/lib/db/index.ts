import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
 

// for query purposes   



const queryClient = postgres(process.env.DB_URL,{
    max:1,
    ssl: "require",
}); 

const db: PostgresJsDatabase = drizzle(queryClient);

 
export default db;
