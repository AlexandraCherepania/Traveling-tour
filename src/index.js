const select = document.querySelector('select');
const allLang = ['en', 'ua'];

    
select.addEventListener ('change', changeUrlLadguage);

function changeUrlLadguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#'+lang;
    location.reload(); 

}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#ua';
        location.reload();
    } 
    select.value = hash;

    // document.querySelector('.lng-home').innerHTML = landArr['home'][hash];
    // document.querySelector('.lng-hot').innerHTML = landArr['hot'][hash];
    // document.querySelector('.lng-reserv').innerHTML = landArr['reserv'][hash];
    // document.querySelector('.lng-product').innerHTML = landArr['product'][hash];
    // document.querySelector('.lng-contact').innerHTML = landArr['contact'][hash];
    // document.querySelector('.fon-title').innerHTML = landArr['fone'][hash];
    // document.querySelector('.pg-hot').innerHTML = landArr['hots'][hash];

    for (let key in landArr) {
        document.querySelector(".lng-" + key).innerHTML = landArr[key][hash];
    }
}

changeLanguage();

