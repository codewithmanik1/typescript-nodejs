
type users = {
    id: number;
    email: string;
    name: string;
    role: string;
}


const usersData: users[] = [{
    id: 1,
    email: 'maanik.speaks@gmail.com',
    name: 'Maanik',
    role: 'admin'
}]

function createUsers(data: users){
    const userObj: users = {
    id: data.id,
    email: data.email,
    name: data.name,
    role: data.role
    }
    usersData.push(userObj);
}

function getUserList(): users[]{
    return usersData;
}



const data:users = {
    id: 2,
    email: 'maanik.speaks@gmail.com',
    name: 'Maanik',
    role: 'admin'
}
const result = createUsers(data);

console.log(getUserList());

// Use optional ?
type chai = {name: string, price?: number}

function getChai(data: chai): void {
    console.log(`name of chai is, ${data.name}`);
}

getChai({ name: 'Masala' });