let fullName:string = "Maanik Ashok Tambulkar";

//union concept 
let id: number | string;
id = 29000;
id = 'Maanik123';

function checkData(data: number | string): unknown {

    //type narrowing
    if(typeof data === 'number'){
    return `The number is ${data}`;
    } else {
    return `The string is ${data}`;         
    }
}

let result1 = checkData(2500);
let result2 = checkData('Hello World');

console.log(result1);
console.log(result2);   


//any concept
let value: any;
value = 25;
value = "Maanik";
value = true;

//type narrowing
if(typeof value === 'string'){
    value.toUpperCase(); // No error, but may cause runtime error if value is not a string
}

console.log(value);


//Unknown concept
let chai: unknown;
chai = 'masalaChai';
console.log(chai);


//error we will get
//unionAndAnyAndUnknown.ts:44:6 - error TS2339: Property 'toUpperCase' does not exist on type 'unknown'.
// chai.toUpperCase();

if(typeof chai === 'string')
    chai = chai.toUpperCase();

console.log(chai);