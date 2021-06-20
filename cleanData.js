const fs = require('fs');
var _ = require('lodash');
var products = require('./dataset.json');



var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

var groupedProducts = groupBy(products,'category');





// lodash 3rd party
// var groupedProducts = _.mapValues(_.groupBy(products, 'category'),
//                           plist => plist.map(p => _.omit(p, 'category')));


let w =  JSON.stringify(groupedProducts,null,2);
fs.writeFileSync('formatedData-1.json',w);