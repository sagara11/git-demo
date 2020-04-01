function dogPull () {
    this.stomach = [];
};

dogPull.prototype.eat = function (cat,mouse){
    this.stomach.push(cat);
    this.stomach.push(mouse);
}

module.exports = dogPull;