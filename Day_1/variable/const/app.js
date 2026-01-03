// let a =10;
// let b=30;
// function func(){
//     let a =40;
//     console.log(a);
//     a=50;
//     function func(){
//         console.log(a);
//         console.log(b);
//     }
//     console.log(b);
// }
// console.log(a);
//2nd program
const a =10;
const b=30;
function func(){
    // console.log(a);
    const a =40;
    console.log(a);
    a=50;
    function func(){
        console.log(a);
        console.log(b);
    }func();
    console.log(b);
}func();
console.log(a);
// //3rd program
// {
//     let e =40;
//     console.log(e);
//     let f=60;
//     console.log(e);
//     var g =70;
//     console.log(g);
// }
// // console.log(e);
// // console.log(f);
// console.log(g);