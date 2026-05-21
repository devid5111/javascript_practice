
// ------------- primitive data type -------------- 

// 1 . string (declare using " " , ' ' , ``)

let name = "devid";
let sername = 'parmar';
const city = `tharad`;

console.log(`my name is ${name}${sername} \ni am from ${city}`);

// 2. Number (all number type in only into this like int , float)

let roll_no = 19;
let percentage = 71.60;

console.log(`My roll is ${roll_no} \ni obtained ${percentage} in last same.`);

// 3. Boolean (keyword write in samll case)

let secound_name = "akash" == name;  //if string same as first name varible then strore true in secound_name varible else flase

console.log(secound_name);


// 4. Undefined (when in varible not any value )

 let name_3;

 console.log(name_3);

// 5. Null 

let my_name = null;

console.log(my_name);



//  ----------------- Non - primitive data type ------------------

// 1. object (it's like c and python structure dicsonary)

let my_obj={
    name : "devid",
    username : "devidparmar8954",
    pass : 12334
}

console.log(my_obj);
console.log(my_obj.name);
console.log(my_obj["username"]);


// 2 Array - in js array like python list we can store different data type multiple value

let my_array = ["devid","parmar",45,342,432.4];

console.log(my_array[1]);
console.log(my_array);
console.log(my_array.length);

//  adding element in array

my_array.push(12); // add element at the last position od array

console.log(my_array);

my_array.unshift(0); // add element at the first position od array

console.log(my_array);


// Remove element fron array 

my_array.pop(); // remove element at the last position

console.log(my_array);

my_array.shift(); // remove element at the first position of array

console.log(my_array);


//  HIGHER ORDER ARRAY METHOD

let this_array = [1,34,54,1,23,54];

let new_array = this_array.map(x => x * 2) // sum of all element 

console.log(new_array);

let ages = [15, 22, 17, 30, 12];

let adults = ages.filter(age => age >= 18); // perform one condition 

console.log(adults);

let cartPrices = [100, 50, 200];

let totalBill = cartPrices.reduce((sum, price) => sum + price, 0); // calculate all array elemnt and store result 

console.log(totalBill); 