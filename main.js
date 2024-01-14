// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users =>{
    let mainWrap = document.createElement('div');
    mainWrap.classList.add('users_wrap');
    for(let user of users){
        let wrap = document.createElement('div')
        let p = document.createElement('p');
        p.innerText = user.id + '. ' + user.name;
        let link = document.createElement('a');
        link.innerText = 'Read more';
        link.href = `user-details.html?id=${user.id}`;
        wrap.appendChild(p);
        wrap.appendChild(link);
        mainWrap.appendChild(wrap);
    }

    document.body.append(mainWrap);
})