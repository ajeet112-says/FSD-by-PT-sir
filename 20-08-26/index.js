// function sumofSqrt(a, b) {
//     return Math.sqrt(a) + Math.sqrt(b);
// }

// function sumSqrtWithMsg(msg, clbk) {
//     let result = clbk(25, 36);

//     console.log(msg + " " + result);
// }

// sumSqrtWithMsg("Ajeet", sumofSqrt);

const myPromises= new Promise((resolve,reject)=>{
    let username="ajeet";
    let pass="12345";
    if( username == "ajeet" && pass == "12345" ){
        resolve("sucess")
    }else{
        reject("Invalid credentials")
    }

})

// myPromises.then((msg)=>{
//     console.log(msg)
// }) 
// .catch(msg=>{
//     console.log(msg)
// })

// .finally(()=>{
//     console.log("All resources has been closed")
// })


async function LoginHandler() {
    try{
        const loginStatus= await myPromises;
        console.log(loginStatus)
    }catch(err){
        console.log(err)
    }finally{
        console.log("closing all the open resources")
    }
}

LoginHandler();