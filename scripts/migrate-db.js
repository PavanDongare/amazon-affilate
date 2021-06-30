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
    await db.end()
    return results
  } catch (e) {
    console.log(q);
    throw Error(q);
  }
}

// Create "entries" table if doesn't exist
async function migrate() {
  try {
    await query(`
    CREATE TABLE IF NOT EXISTS entries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at 
        TIMESTAMP 
        NOT NULL 
        DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP
    )
    `)

    await query(`
    CREATE TABLE IF NOT EXISTS products (
      productid INT AUTO_INCREMENT PRIMARY KEY,
      name TEXT DEFAULT NULL,
      category TEXT DEFAULT NULL,
      categoryurl TEXT DEFAULT NULL,
      id INT DEFAULT NULL,
      url TEXT NOT NULL,
      thumbnail TEXT DEFAULT NULL,
      besturl  TEXT DEFAULT NULL,

      updated_at 
        TIMESTAMP 
        NOT NULL 
        DEFAULT CURRENT_TIMESTAMP 
        ON UPDATE CURRENT_TIMESTAMP
    )
    `)
    var q = `INSERT INTO products (category,id,name,url,thumbnail,categoryurl) VALUES \n`
    await products.forEach((p)=>{
      q += `(${db.escape(p.category)},${p.ID},${db.escape(p.name)},${db.escape(p.url)},'${p.thumbnail}','${p.categoryUrl}')  ,\n`
  
    });

    q = q.substr(0,q.length-2);
    q += ';';

    await fs.writeFileSync('page.sql',q);






    console.log('migration ran successfully')
  } catch (e) {
    console.error('could not run migration, double check your credentials.')
    process.exit(1)
  }
}

migrate().then(() => process.exit())
