import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';
import {div, styleBody, addTitle, contact} from './dom';
import users, {getPremUsers} from './data';
import {v4 as uuidv4} from 'uuid';


console.log('index file');
addTitle('hello ' + contact);
// styleBody();

const premUser = getPremUsers(users);
console.log(users, premUser);
console.log('test2');
const para = document.createElement('p');
para.textContent = `uuid: ${uuidv4()}`;
div.appendChild(para);

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke();
