var usersData = [{
        id: 1,
        email: 'maanik.speaks@gmail.com',
        name: 'Maanik',
        role: 'admin'
    }];
function createUsers(data) {
    var userObj = {
        id: data.id,
        email: data.email,
        name: data.name,
        role: data.role
    };
    usersData.push(userObj);
}
function getUserList() {
    return usersData;
}
var data = {
    id: 2,
    email: 'maanik.speaks@gmail.com',
    name: 'Maanik',
    role: 'admin'
};
var result = createUsers(data);
console.log(getUserList());
function getChai(data) {
    console.log("name of chai is, ".concat(data.name));
}
getChai({ name: 'Masala' });
