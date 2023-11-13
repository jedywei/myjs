console.log('dome file');

export const div = document.querySelector('#hello');

export const styleBody = () => {
    div.style.background = 'peachpuff';
};

export const addTitle = (text) => {
    const title = document.createElement('p');
    title.textContent = text;
    div.appendChild(title);
};

export const contact = "jedywei@gmail.com";