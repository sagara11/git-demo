function dogPull () {
    this.stomach = [];
};

dogPull.prototype.eat = function (cat){
    this.stomach.push(cat);
}

module.exports = dogPull;