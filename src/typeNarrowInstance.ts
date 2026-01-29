class User {
  name = "Maanik";
}

class Admin {
  role = "ADMIN";
}

function checkRole(obj: User | Admin) {
    // 1. Use backticks `` for string interpolation ${}
    // 2. Access properties from the parameter 'obj', not the class name
    if (obj instanceof Admin) {
        return `Role is, ${obj.role}`; 
    }
    return `User is, ${obj.name}`;
}

// 3. Create instances using the 'new' keyword
let userInstance = new User();
let adminInstance = new Admin();

console.log(checkRole(userInstance));  // "User is, Maanik"
console.log(checkRole(adminInstance)); // "Role is, ADMIN"