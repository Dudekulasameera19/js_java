function Student_Details(name,age,course){
this.name = name;
this.age = age;
this.course = course;

}
let student1 = new Student_Details ("ramya",23,"jfs");
let student2 = new Student_Details ("Divya",23,"jfs");
let student3 = new Student_Details ("Sam",23,"jfs");

// let user ={
//     name : "divya",
//     marks :90
// }; 

// if (user.marks > 35){
//     console.log("the student is pass")
// }
// else{
//     console.log("the student is fail")
// }

function User(name,marks,grade){
    this.name = name,
    this.marks = marks,
    this.grade = grade,
    this.getresult = function(){
        // return this.marks>35?"pass":"fail";
        return this.marks>35 ?"A":"B";
    }  
}
let User1 = new User("sam",90);
let  User2 = new User("aneesh",20);
 console.log(User1.getresult())
 console.log(User2.getresult())

// let obj={
//   name:"hello",
//   marks:82,
//   getresult : function(){
//          return this.marks>35 ?"pass":"fail";
//     }  
// }
// console.log(obj.getresult())