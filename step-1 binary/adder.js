//nand 연산
function nand (a, b) {
    return !(a && b)
}
//console.log(nand(true, true)) // false
//console.log(nand(false, true)) // true
//console.log(nand(true, false)) // true
//console.log(nand(false, false)) // true



//nor 연산
function nor(a, b) {
    return !(a || b)
}
//console.log(nand(true, true)) // false
//console.log(nand(false, true)) // false
//console.log(nand(true, false)) // false
//console.log(nand(false, false)) // true



// 이진덧셈기 반가산기
function halfAdder(bitA, bitB) {
    return [bitA & bitB, (bitA | bitB) & !(bitA & bitB)]
}
// console.log(halfadder(1,1)) // [1,0]
// console.log(halfadder(0,1)) // [0,1]
// console.log(halfadder(1,0)) // [0,1]
// console.log(halfadder(0,0)) // [0,0]



// 이진덧셈기 전가산기
function fullAdder(bitA, bitB, carrybit) {
    var a = halfAdder(bitA, bitB);
    var b = halfAdder(a[1], carrybit);
    return [a[0] + b[0], b[1]]
}
// console.log(fullAdder(1,1,1)); // [1, 1]
// console.log(fullAdder(0,1,1)); // [1, 0]
// console.log(fullAdder(1,0,1)); // [1, 0]
// console.log(fullAdder(1,1,0)); // [1, 0]
// console.log(fullAdder(0,0,1)); // [0, 1]
// console.log(fullAdder(0,1,0)); // [0, 1]
// console.log(fullAdder(1,0,0)); // [0, 1]
// console.log(fullAdder(0,0,0)); // [0, 0]



// 이진덧셈기 8비트 덧셈기
function byteadder(byteA, byteB) {
    var result = [];
    var carrybit = 0;
    byteA.forEach((el,i) => {
        var a = fullAdder(el, byteB[i], carrybit)
        carrybit = a[0];
        result.push(a[1]);
    })
    result.push(carrybit);
    return result
}
// console.log(byteadder([ 1, 1, 0, 1, 1, 0, 1, 0 ], [ 1, 0, 1, 1, 0, 0, 1, 1 ])); 
// // [ 0, 0, 0, 1, 0, 1, 0, 0, 1 ]
// console.log(byteadder([ 1, 1, 0, 0, 1, 0, 1, 0 ], [ 1, 1, 0, 1, 1, 0, 0, 1 ])); 
// // [ 0, 1, 1, 1, 0, 1, 1, 1, 0 ]



// 진법 변환기; 10진수를 2진수로 변환
function dec2bin(decimal) {
    var answer = [];
    while(decimal > 0){
        answer.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return answer;
}
// console.log(dec2bin(10)); // [0, 1, 0, 1]
// console.log(dec2bin(173)); // [1,0,1,1,0,1,0,1]



// 진법 변환기; 2진수를 10진수로 변환
function bin2dec(bin) {
    var result = 0;
    bin.forEach((el,i) => {
        result += el * 2 ** i;
    })
    return result;
}
// console.log(bin2dec([0, 1, 1, 1])); // 14
// console.log(bin2dec([1, 1, 1, 1, 0, 1, 0 ,1])) // 175