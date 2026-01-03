// Data Types : JavaScript has several built-in data types that can be categorized into primitive and non-primitive types.

// Primitive Data Types :

    // 1. Number :
          let userAge = 25;
          console.log(typeof userAge); // Output: number
          const piValue = 3.14
          console.log(typeof piValue); // Output: number
    // 2. String : 
          const userName = "Vamsee Krishna";
          const greetingMessage = 'Hello, World!';
            console.log(typeof userName); // Output: string
            console.log(typeof greetingMessage); // Output: string
    // 3. Boolean :
          let isLoggedIn = true;
          let hasSubscription = false;
            console.log(typeof isLoggedIn); // Output: boolean
            console.log(typeof hasSubscription); // Output: boolean
    // 4. Undefined :
          let userAddress;
            console.log(typeof userAddress); // Output: undefined
    // 5. Null :
          let selectedItem = null;
            console.log(typeof selectedItem); // Output: object

    // 6. Symbol :
          const uniqueId = Symbol('id');
    // 7. BigInt :
          const largeNumber = BigInt(9007199254741991);
        
// Non-primitive Data Types : 

    // 1. Array :

        const userInformation = [25, true, "India"];
        console.log(typeof userInformation); // Output: object

        console.log(userInformation[0]); // Output: Vamsee

    // 2. Object :
        const userDetails = { name: "Vamsee Krishna",age: 25,isMember: true,country: "India"
        };
        console.log(typeof userDetails); // Output: object
        console.log(userDetails.name); // Output: Vamsee Krishna
 
    // 3. Array of Objects : 

const users = [
  { name: "sam", age: 25, isMember: true, country: "India", skills: ["JavaScript", "React", "Node.js"] },
  { name: "John Doe", age: 30, isMember: false, country: "USA" },
  { name: "Jane Smith", age: 28, isMember: true, country: "UK", skills: ["Python", "Django", "Flask"], companiesWorked: { currentCompany: "Tech Solutions", previousCompany: "Web Innovations" } },
  { name: "Alice Johnson", age: 22, isMember: false, country: "Canada" }
];
   
     console.log(users[0].name + " is in " + users[0].country + " having " + users[0].skills[1]);



        console.log(users[0].name); // Output: Vamsee Krishna
        console.log(users[1].country); // Output: USA
        console.log(users[2].age); // Output: 28
        console.log(users[3].isMember); // Output: false


        console.log(users[0].name + " is a " + users[0].skills[1] + "Js Developer.");

        console.log(users[2].name + " worked as" + users[2].skills[1] + " Developer at " + users[2].companiesWorked.currentCompany);

        console.log(`${users[2].name} worked as ${users[2].skills[1]} developer at ${users[2].companiesWorked.currentCompany}.`);