function returnsThree() {
    return 3;
}

function reciprocal(num) {
    if(num > 1000000 || num < 1){
        throw new TypeError;
    }
    return 1/num;
}

module.exports = {
    returnsThree,
    reciprocal,
}
