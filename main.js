document.getElementById('hamburgerbtn').addEventListener('click',
    toggleMenu);

async function toggleMenu() {
    const nav = document.querySelector('.header-right');
    nav.classList.toggle('active');
    // let f = await fetch("data.json");
    // let j = await f.json();
    // alert(j.hello);
}

async function fetchtest() {
    let f = await fetch("data.json");
    let j = await f.json();
    alert(j.hello);
}


// document.getElementsByClassName('hamburger').addEventListener('click',
// toggleMenu);

    // let f = await fetch("data.json");
    // let j = await f.json();
    // alert(j.hello);