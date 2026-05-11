const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const connectionString = 'postgresql://postgres:t3%2B-6yZ%2FGs%25%2FFuW@db.qlcjzvcnvxjhjdfqvyud.supabase.co:5432/postgres';

const client = new Client({
  connectionString,
});

async function applyMigration() {
  try {
    await client.connect();
    console.log('Connected to Supabase database successfully!');
    
    const sqlPath = path.join(__dirname, 'supabase', 'migrations', '02_update_schema.sql');
    const sqlContent = fs.readFileSync(sqlPath, 'utf8');
    
    console.log('Applying migration...');
    await client.query(sqlContent);
    
    console.log('Migration applied successfully!');
  } catch (error) {
    console.error('Error applying migration:', error);
  } finally {
    await client.end();
  }
}

applyMigration();
