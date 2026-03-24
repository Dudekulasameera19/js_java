let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let object = {
            id:1,
            name:"sam",
            img:"https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"
        }
        resolve(object);
    },1000)
})
console.log(promise);
async function promise1(){
    let object = await promise;
    console.log(object);
}
promise1();

