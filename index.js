// task_1
// function arithmeticReport(a,b){
//    return {
//     sum: a+b,
//     diffrernce: a-b,
//     product: a*b,
//     quntity: a/b
//    }   
// }
// console.log(arithmeticReport(8,2));

// task2

// function secondsToColock(seconds){
//     return{
//         hours:Math.floor(seconds/3600) ,
//         minutes:Math.floor(seconds%60) ,
//         seconds: Math.floor(seconds%60)
//     }
// }
// console.log(secondsToColock(3661));

// task3

// function classifyNumber(n){
//      let sing;
//      let partay;
//    if(n>0){
//      sing = "Positive"
//    }
//    else if(n < 0){
//     sing = "Nigative"
//    }
//    else {
//     sing = "Zero"
//    }
//    if(n %2 == 0){
//     partay = "even"
//    }
//    else{
//     partay = "odd"
//    }
//    return{
//     sing ,
//     partay
//    }
// }   
// console.log(classifyNumber(-5));

// task4

// console.log(Math.max(4,9,2));
// console.log(Math.max(-8,-2,-5));

// task_5

// function gradeFor(score){
//   let grad;
//   if(score <0 || score >100){
//     grad = "Invalid score"
//   }
//   else if (score >= 90 && score <= 100){
//     grad = "A"
//   }
//   else if (score >=80  && score < 90){
//     grad = "B"
//   }
//   else if (score >= 70  && score <80){
//     grad = "C"
//   }
//   else if (score >= 50  && score <70){
//     grad = "D"
//   }
//   else{
//     grad = "F"
//   }
//   return grad
// }
// console.log(gradeFor(90));
// console.log(gradeFor(70));
// console.log(gradeFor(81));
// console.log(gradeFor(49.5));
// console.log(gradeFor(101));
// console.log(gradeFor(-1));

// task_6

// function calculate(a, operator, b){
//     switch(operator){
//         case "+":
//             return a+b
//         case "-":
//             return a-b
//         case "*":
//             return a*b
//         case "/":
//             if(b == 0){
//                 return "Division by zero"
//             }
//             return a/b
//         case "%":
//             if(b == 0){
//                 return "Division by zero"
//             }
//             return a%b
//             default:
//              return "Invalid operator"
//     }
// }
// console.log(calculate(5, "+", 5)); // 10
// console.log(calculate(5, "-", 5)); // 0
// console.log(calculate(5, "*", 5)); // 25
// console.log(calculate(8, "/", 2)); // 4
// console.log(calculate(5, "%", 0)); // Division by zero
// console.log(calculate(5, "!", 0)); // Invalid operator

// task_7

// function isLeapYear(year){
//     if(year % 400 == 0 || year % 4 == 0 && year % 100 == 1){
//         return "true"
//     }
//     return "false"
// }
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(1900)); // false

// task_8

// function triangleType(a, b, c){
//     if(a+b<=c || a+c<=b || b+c<=a ){
//         return "Invalid"
//     }
//     else if(a == b && b == c){
//         return "Equilateral"
//     }
//     else if(a == b && b != c ){
//         return "Isosceles"
//     }
//     else {
//         return "Scalene"
//     }

// }
// console.log(triangleType(1 , 2 , 3));
// console.log(triangleType(3 , 3 , 4));
// console.log(triangleType(4 , 5 , 3));
// console.log(triangleType(3, 3 , 3));

// task_9

// function electricityBill(units){
//     if(units >= 0 && units <= 100000){
        
//         if(units<=100 ){
//            return  units * 1 
//         }
//         else if(units<=200){
//          return 100 + (units - 100) *1.5
//         }
//         else{
//             return 100 +100 * 1.5 +(units - 200) * 2
//         }
//     }
//     else{
//         return "Invalid unites"
//     }
// }
// console.log(electricityBill(80));
// console.log(electricityBill(150)); 
// console.log(electricityBill(-150))
// console.log(electricityBill(1000000))

// task_10

// function checkout(subtotal, isMember, delivery){
//       let discount;
//       let shipping;
//       let total;
//       if(subtotal<0){
//         return "Invalid subtotal"
//       }
//       if(delivery !== "standard" && delivery!== "express" && delivery !== "pickup"){
//         return "Invalid delivery"
//       }
//     if(isMember ==true && subtotal>=1000 ){
//         discount = subtotal * 0.10
//     }
//     else{
//         discount = 0
//     }
    
//     if(subtotal<=500){
//         shipping = 50
//     }
//     else{
//         shipping = 0
//     }
//     if(shipping == 0){
//         total = subtotal - discount
//     }else{
//         total=subtotal+shipping
//     }
//     return{
//         discount,
//         shipping,
//         total
//   }
    

// }
// console.log(checkout(1200 ,true, "standard"));
// console.log(checkout(400 ,false, "standard"));

// task_11

// function roundingReport(x){
//     let mathFloor= Math.floor(x)
//     let mathCeil= Math.ceil(x)
//     let mathRound=Math.round(x)
//     let mathTranc=Math.trunc(x)
//     return{
//         floor:mathFloor,
//         ceil:mathCeil,
//         round:mathRound,
//         tranc:mathTranc
//     }
// }
// console.log(roundingReport(2.7));
// console.log(roundingReport(-2.7));

// task_12

// function distance(x1, y1, x2, y2){
//     return Math.hypot(x1, y1 ,x2 , y2)
// }
// console.log(distance(0,0,3,4));
// console.log(distance(2,2,2,2));

// task_13

// function circleMeasurements(radius){
//     let area = Math.PI * Math.pow(radius,2);
//     let circumference = 2 * Math.PI * radius
//     return{
//         area,
//         circumference
//     }
// }
// console.log(circleMeasurements(1));
// console.log(circleMeasurements(0));

// task_14

// function clamp(value, min , max){
//     if (value < min){
//         return min
//     }
//     else{
//         return max
//     }
// }
// console.log(clamp(15,0,10));
// console.log(clamp(-3,0,10));

// task_15

// function absoluteDifference(a, b){
//     return Math.abs(a-b)
// }
// console.log(absoluteDifference(4,9));
// console.log(absoluteDifference(-3,5));

// task_16

// function randomInteger(min, max, randomValue = Math.random()){
//     if (randomValue == 0){
//         return Math.floor(min)
//     }
//     else{
//         return Math.floor(max)
//     }
// }
// console.log(randomInteger(1,6,0));
// console.log(randomInteger(1,6,0.999));

// task_17

// function digitCount(n){
//     if (n == 0){
//         return Math.abs(1)
//     }
//     let x=0
//     while(n < 0 || n > 0){
//       n = Math.trunc(n );
//         x++;
//     }
//     return x
// }
// console.log(digitCount(0));
// console.log(digitCount(-12.354));

// task_18

// function isPerfectSquare(n){
//     if(Number.isInteger(Math.sqrt(n))){
//         return true
//     }
//     return false
// }
// console.log(isPerfectSquare(49));
// console.log(isPerfectSquare(50));

// task_19

// function trigDegrees(degrees){
//     let sin;
//     let cos;
//     sin = Math.sin(degrees * Math.PI / 180)  
//     cos = Math.cos(degrees * Math.PI / 180)  
//     return{
//         sin,
//         cos
//     }
// }
// console.log(trigDegrees(0));
// console.log(trigDegrees(90));


