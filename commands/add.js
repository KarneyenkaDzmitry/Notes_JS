'use strict'
const obj = require('../data/rwdata.js');
function add(title1, body1) {
    let json = obj.reader();
    const data = {
        title: title1,
        body: body1
    };
    json.notes.push(data);
    obj.writer(JSON.stringify(json));
    //console.log('I am here. Congradulation!');
    //console.log(`Title [${title}], body [${body}]`);
}

exports.add = add;