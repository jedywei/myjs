import { singletonPet as sp } from './singleton-pet.js';
import { whoami } from './singleton-pet.js';

export default function bfunc() {
    console.log('a::sp', sp.name);
    sp.changeName('Pongo');
    console.log('a::sp', sp.name);
    whoami();
}
