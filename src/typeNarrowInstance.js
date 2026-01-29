var User = /** @class */ (function () {
    function User() {
        this.name = "Maanik";
    }
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin() {
        this.role = "ADMIN";
    }
    return Admin;
}());
function checkRole(obj) {
    // 1. Use backticks `` for string interpolation ${}
    // 2. Access properties from the parameter 'obj', not the class name
    if (obj instanceof Admin) {
        return "Role is, ".concat(obj.role);
    }
    return "User is, ".concat(obj.name);
}
// 3. Create instances using the 'new' keyword
var userInstance = new User();
var adminInstance = new Admin();
console.log(checkRole(userInstance)); // "User is, Maanik"
console.log(checkRole(adminInstance)); // "Role is, ADMIN"
