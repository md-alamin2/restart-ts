// spread operator 

//? spread operator for array
const friends = ['Ahad', 'Adnan'];

const schoolFriends = ['sanower', 'samiul', 'hasibul'];

const collageFriends = ['sabbir', 'tawhid', 'shawon'];

friends.push(...schoolFriends);

//? spread operator for object
const user = {
    name: "Al-amin",
    number: "01900000000000"
}

const otherInfo ={
    address: "Dhaka",
    hobby: "Coding",
    favoriteColor: "Black"
}

const userInfo = {...user, ...otherInfo}
