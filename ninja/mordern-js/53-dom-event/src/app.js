function main() {
    const ul = document.querySelector('ul');
    let newNumber = 0;

    // items.forEach(item => {
    //     item.addEventListener('click', e => {
    //         e.target.style.textDecoration = 'line-through';
    //         console.log('event li');
    //         e.stopPropagation();
    //     });
    // });

    ul.addEventListener('click', e=> {
        // console.log(e.target);
        if (e.target.tagName === 'LI') {
            e.target.style.textDecoration = 'line-through';
        }
    })

    let button= document.querySelector('#buttonClear');
    button.addEventListener('click', e => {
        items.forEach(item => {
            item.style.textDecoration = '';
        });
    });

    button = document.querySelector('#buttonAdd');
    button.addEventListener('click', e => {
        const li = document.createElement('li');
        li.textContent = `${newNumber++} Something new to do`;
        ul.append(li);
    });

    button = document.querySelector('#buttonDelete');
    button.addEventListener('click', e => {
        const items = ul.querySelectorAll('li');
        items.forEach(item => {
            if (item.style.textDecoration.includes('line-through')){
                item.remove();
            }
        })
    });

}

window.onload = main;