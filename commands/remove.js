'use strict'
const obj = require('../data/rwdata.js');
function remove(title) {
    
    let json = obj.reader();
    (json.notes).forEach((element,index,mass) => {
        if (element.title===title) { json.notes.splice(index,1);console.log('Delete note');}
    });
    
    obj.writer(JSON.stringify(json));
    console.log(`Inside function remove. Title [${title}].`);
}

exports.remove = remove;