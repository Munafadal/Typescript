interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const user1: User = {
  name: "Muna",
  age: 35
};

user1.name = "Muna"
console.log(user1)