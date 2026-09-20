// type guard

// typeof guard

type Alphaneumaric = string | number;

const add = (num1: Alphaneumaric, num2: Alphaneumaric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    num1.toString() + num2.toString();
  }
};

add(2, 2); // 4
add(2, "2"); // 22


// in guard

type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "admin";
}

const getUserInfo = (userInfo: NormalUser | AdminUser)=>{
    if('role' in userInfo){
        console.log(`${userInfo.name} user has found and his role is ${userInfo.role}`)
    }else{
        console.log(`${userInfo.name} user has found`)
    }
}

getUserInfo({name: 'Al-amin', role: 'admin'})