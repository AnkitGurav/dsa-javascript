console.log(this);
//Browser → window
//Node → global

function test() {
    console.log(this);
}
test();

//Non-strict → window
//Strict → undefined

const user = {
    name: "Ankit",
    getName() {
        // console.log(this);
        console.log(this.name);
    }
};

user.getName();

// //const user = {
//   name: "Ankit",
//   getName() {
//     // console.log(this);
//     console.log(this.name);
//   }
// };

//Ankit


const user1 = {
    name: "Ankit",
    getName() {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};

user1.getName();

//undefined
//Because inner() is a normal function, so this = window

const user3 = {
    name: "Ankit",
    getName: () => {
        console.log(this.name);
    }
};

user3.getName();

//window or undefined
//Arrow function → takes this from global

const user4 = {
  name: "Ankit",
  getName() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.getName();
//Ankit
//Arrow inherits from parent (user)