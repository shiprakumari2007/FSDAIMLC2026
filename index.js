// function sum(a,b){
//     return a+b;
//         }
//     const result=sum(25,34);
//     console.log("sum="+result);
    
    
    
//     function login (msg,error){
//         if(error){console.log("eror is"+error)
//                 }
//             else{
//                 console.log("welcome"+msg);
//             }
//     }
//     function loginverification(username,password,clbk){ 
//         if(username=="ptomer40" && password=="12345"){
//             clbk(null,"username or password is incorrect")
//         }
//     }
//     loginverification("ptomer40","12345",login)


// console.log ("First")
// // setTimeout(()=>{console.log("second")},1000)
// for(i=0;i<=10000;i++){
// console.log ("Second")
// }
// console.log ("Third")
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 setTimeout(()=>{
//                     setTimeout(()=>{
//                         setTimeout(()=>{
//                             setTimeout(()=>{
//                                 setTimeout(()=>{
//                                     console.log("Hello");
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)


//promices
// const myPromise=new Promise((resolve,reject)=>{
//     username="spandan10";
//     password="1234"
//     if(username=="spandan10"&& password=="1234"){
//         resolve("success")
       
//     }
//     else{
//         reject("username or password is incorrect")
//     }
// })

// myPromise.then ((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All the resources have been closed?memory released")
// })



async function handleLogin() {
    try {
      await myPromise;
    } catch (e) {
      console.log(e);
    } finally {
      console.log("executed");
    }
  }



