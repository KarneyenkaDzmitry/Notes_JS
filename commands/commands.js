'use strict';
const obj = require('../data/rwdata.js');

function list() {
    let result = '';
    const json = obj.reader();
    if (json.notes.length === 0) {
        result = `The list is empty`;
    } else {
        (json.notes).forEach((element, index) => {
            result += `Note №${index + 1}\n Title: [${element.title}]\n Body : [${element.body}]\n`;
        });
    }
    return result;
}

function read(title) {
    let result = `There isn\'t any notes with title: ${title}.`;
    const json = obj.reader()
    if (json.notes.length===0){
        result = `The list is empty.`
    } else {
        (json.notes).forEach((element, index) => {
            if (element.title === title) {
                result =  ` Title: [${element.title}]\n Body : [${element.body}]`;
            }
        });
    }
     return result;
    
}

function add(title1, body1) {
    let json = obj.reader();
    for (let i = 0; i < json.notes.length; i++) {
        if (json.notes[i].title === title1) {
            return `The note with title: [${title1}] has already existed in the list.`;
        }
    };
    const data = {
        title: title1,
        body: body1
    };
    json.notes.push(data);
    const mark = obj.writer(JSON.stringify(json));
    if (mark) {
        return `New note with title: [${title1}] and body: [${body1}] was successfully added to list.`;
    } else {
        return mark;
    }

}

function remove(title) {
    let json = obj.reader();
    let result = `There isn\'t a note with title ${title}`;
    (json.notes).forEach((element, index, mass) => {
        if (element.title === title) {
            json.notes.splice(index, 1);
            obj.writer(JSON.stringify(json));
            result = `The note \n Title: ${element.title}\n Body :${element.body}\n was successfully deleted.`;
        }
    });
    return result;
}

function clear() {
    obj.writer('{"notes":[]}');
    return `The list is empty.`;
}
exports.clear = clear;
exports.remove = remove;
exports.add = add;
module.exports.read = read;
exports.list = list;
