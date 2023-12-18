function SingletonPet(type, name) {
    this.type = type;
    this.name = name;
}

export function changeName(newName)  {
    this.name = newName;
}


SingletonPet.prototype.changeName = changeName;

export const singletonPet = new SingletonPet('dog', 'Ella');

// export const singletonPet = {
//     type: 'dog', 
//     name: 'Ella', 
//     changeName,
// }


export function whoami() {
    console.log("whoami: ", singletonPet.name);
}

// export default singletonPet;

