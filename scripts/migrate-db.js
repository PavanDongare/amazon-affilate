const path = require('path')

const fs = require('fs');

var products = require('./dataset.json');

const envPath = path.resolve(process.cwd(), '.env.local')

console.log({ envPath })

require('dotenv').config({ path: envPath })

const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
  },
})

async function query(q) {
  try {
    const results = await db.query(q)
    await db.end();
    return results
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}
async function insertDb(){
  for (let index = 0; index < products.length; index++) {
    const p = products[index];
    let q = `INSERT INTO product (category,id,name,url,thumbnail,categoryurl) VALUES (${db.escape(p.category)},${p.ID},${db.escape(p.name)},${db.escape(p.url)},'${p.thumbnail}','${p.categoryUrl}')`
    await query(q);
  }
}

// Create "entries" table if doesn't exist
async function migrate() {
  try {
    console.log('db creating table');

    await query(`
    CREATE TABLE IF NOT EXISTS product (
      productid INT AUTO_INCREMENT PRIMARY KEY,
      name TEXT DEFAULT NULL,
      category TEXT DEFAULT NULL,
      categoryurl TEXT DEFAULT NULL,
      id INT DEFAULT NULL,
      url TEXT NOT NULL UNIQUE,
      thumbnail TEXT DEFAULT NULL,
      updated_at 
        TIMESTAMP 
        NOT NULL 
        DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP
    )  ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;
    `)


    await insertDb();

    console.log('migration ran successfully')
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}

migrate().then(() => process.exit())
