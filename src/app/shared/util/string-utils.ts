interface String {
    capitalize();
    titleize();
}

String.prototype.capitalize = function(): string {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.titleize = function(): string {
    return this.split(' ').map((word) => word.capitalize()).join(' ');
};
