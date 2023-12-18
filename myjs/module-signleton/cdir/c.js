import { singletonPet as sp } from '../singleton-pet.js';
import { whoami } from '../singleton-pet.js';

export default function cfunc() {
    console.log('c::sp', sp.name);
    sp.changeName('Hello2');
    console.log('c::sp', sp.name);
    whoami();
}
