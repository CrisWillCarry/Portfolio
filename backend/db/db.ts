import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

export async function initDatabase(): Promise<Database> {
  const db = await open({
    filename: process.env.DB_CONNECTION_STRING || './database/mydatabase.db', 
    driver: sqlite3.Database,
  });

  console.log('Database initialized successfully');
  
  return db;
}
