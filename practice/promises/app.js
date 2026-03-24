// what is promises :
// A promise is an object which is able to hold the result of async operation.
// In other words: promise is promise you to give you the result of the asnc operation or give you an a error.
//try-success state
//catch-error result
// Syntax of promises
 const promise = new Promise((resolve,reject)=>{
 setTimeout(()=>{
    const student = {id:1,name:"sameera"}
    resolve(student)
    // reject(new Error("error is created by sameera"))
 },2000)
 })
 console.log(promise)
 promise.then((hello)=>{
    console.log(hello)
 })
 .catch((error)=>{
    console.log(error)
 })

 function getStudent(id){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("getting data from DataBase")
       resolve({id:id,name:"divya"})
    },2000)
 })
 }
 function getSubject(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("getting subject of student"+id)
           resolve(['html','css','javascript'])
        },2000)
    })
 }
  function getMarks(subject){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("getting marks of "+subject)
           resolve(100)
        },2000)
    })
 }

let promise1 = getStudent(2)
console.log(promise1)
promise1.then((student)=>{
    return getSubject(student.id)
})
.then((subject)=>{
   return getMarks(subject[0])
})
.then((mark)=>{
    console.log(mark)
})


.then((student) => {
    return getSubject(student.id);   
})
.then((subject) => {
    return getMarks(subject[0]);     
})
.then((mark) => {
    console.log(mark);            
})
.catch((error) => {
    console.log(error);
});

let user = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let array2=[10,20,30,40,50]
        resolve(array2[2])
        // reject("Promise rejected due to error")
    },1000)
})
console.log(user)
user.then((divya)=>{
   console.log(divya)
},3000)

// .catch((sesirekha)=>{
//     console.log("this is not valid"+sesirekha)
// })

let user2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let hello = {1:"sam",2:"divya",3:"k"}
        resolve(hello)
    },3000)
})
user2.then((name)=>{
    console.log(name)
})
