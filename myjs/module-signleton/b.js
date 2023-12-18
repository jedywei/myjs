import { singletonPet as sp } from './singleton-pet.js';
import { whoami } from './singleton-pet.js';

export default function bfunc() {
    console.log('b::sp', sp.name);
    sp.changeName('Muw');
    console.log('b::sp', sp.name);
    whoami();
}
