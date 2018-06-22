'use strict'
const obj = require('../data/rwdata.js');
function list() {
    console.log(obj.reader());
    console.log('Inside function list');
}

exports.list = list;