import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: '.env' });

console.log('🟠 Start db client')

if(!process.env.DATABASE_URL){
  throw new Error('🔴 Cannot find DATABASE_URL');
}

const client = postgres(process.env.DATABASE_URL, { max: 1 });
const db = drizzle(client, { schema });

// const migrateDb = async () => {
//   try {
//     console.log('🟠 Migrating client')
//     await migrate(db, { migrationsFolder: '../../../migrations' });
//     console.log('🟢 Successfully migrated.')
//   } catch (error) {
//     console.error('🔴 Migration failed', error)
//   }
// }

// migrateDb();

export default db;
