'use strict'
const fs = require('fs');
const path = './data/list.json';
function reader() {
    const content = fs.readFileSync(path, 'utf8');
    const json = JSON.parse(content);
    return json;
}
function writer(data) {
    console.log('writer function' + data);
    fs.writeFileSync(path, data, 'utf8');
}

exports.reader = reader;
exports.writer = writer;