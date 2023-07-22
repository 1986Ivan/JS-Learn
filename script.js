// let num =50;

// while (num<=55) {
//     console.log(num);
//     num++;
// };


// let num =50;
// do {
//     console.log(num);
//     num++;
// } while (num<=55);

// let num =50;
// for (i=1; i<=8; i++) {
//     console.log(num);
//     num++;
// };

// for (i=1; i<10; i++) {
//     if (i===5) {
//         continue;
//     }
//     console.log(i);
// };

// for(let i=0; i<3; i++) {
//     console.log(i);
//     for (let j=0; j<3; j++) {
//         console.log(j);
//     }
// }

// let result ='';
// const lenght = 10;
// for (let i=1; i<lenght; i++){
//     for (let j=0; j<i; j++){
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

for (i=0; i<3; i++) {
    console.log(`First level ${i}`);
    for (j=0; j<3; j++) {
        console.log(`Second level ${j}`);
        for (k=0; k<3; k++) {
            console.log(`Third level ${k}`)
        }
    }
}