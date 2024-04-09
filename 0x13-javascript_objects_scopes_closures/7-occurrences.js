#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
    return list.reduce((count, current) => current === searchElemennt ? count + 1 : count, 0);
    
