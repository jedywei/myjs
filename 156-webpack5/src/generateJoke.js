// import axios from 'axios'

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     const joke = document.getElementById('joke');
//     axios.get('https://icanhazdadjoke.com',config)
//        .then((res)=> {
//             console.log(res.data.joke);
//             joke.innerHTML = res.data.joke;
//        })
// }
async function generateJoke() {
    const joke = document.getElementById('joke');
    const req = new Request('https://icanhazdadjoke.com', {
        headers: { Accept: 'application/json' }
    });

    const res = await fetch(req);
    const data = await res.json();
    console.log(data.joke);
    joke.innerHTML = data.joke;
}

export default generateJoke;