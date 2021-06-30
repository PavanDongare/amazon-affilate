const fs = require('fs');
var _ = require('lodash');
var products = require('./dataset.json');

let query = `INSERT INTO product (category,id,name,url,thumbnail,besturl,categoryurl) VALUES`; 
let values = ''

products.forEach((p)=>{
      values = values + ` (${db.escape(p.category)},${p.ID},${db.escape(p.name)},${db.escape(p.url)},${db.escape(p.thumbnail)},null,${db.escape(p.categoryUrl)}) `
})

query = query + values

fs.writeFileSync('products.sql',values);
