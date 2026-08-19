// function generateNumber(){
//     return Math.floor(Math.random()*1000)
// }

// const randomNumber=generateNumber();
// console.log(randomNumber)
 
// function findNumber(){
//     if (randomNumber %2 == 0){
//         return "Even Number";
//     }
//      return "Odd Number"
// }

// console.log(findNumber())

// IIFE 
 

// callback 
// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk1,msg){
//     const result = clbk1(20,40);
//     return msg+result;
// }

// const callback=sumWithMsg(sum,"hii....Sum")
// console.log(callback)



// function login(msg,error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(msg)
//     }
// } 

// function handleLogin(username,password,clbk){
//     const myUser="Ajeet"
//     const myPass="123"
//     if(username == myUser && password == myPass ){
//         clbk("success",null);

//     }else{
//         clbk(null,"username or password is incorrect")
//     }
// }

// handleLogin("Ajeet", "123", login);



// setTimeout(()=>{console.log("hello"),5000})


setTimeout(() => {
    console.log(" one");

    setTimeout(() => {
        console.log(" two");

        setTimeout(() => {
            console.log("three");

            setTimeout(() => {
                console.log("four");
            }, 1000);

        }, 4000);

    }, 1000);

}, 1000);