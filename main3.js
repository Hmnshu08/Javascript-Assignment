// function square(x){
//     return x*x;
// }
// f1=square(2);
// function double(x){
//     return Math.pow(x,2);
// }
// f2=double(2);
// function composedValue(f1,f2,num){
//  return f1(f2(num));
// }
// val = composedValue(f1,f2,5);
// console.log(val);


// const compose = (f1, f2) => arg => f1(f2(arg));

// const square = x => x * x;
// const double = a => a * 2;
// const resultIs = x => `result: ${x}`;

// const doubleThenAdd5 = compose(
//     square,
//     double
// );

// console.log(doubleThenAdd5(3) );
// 11

