const select = document.querySelector('select');
const allLang = ['en', 'ua'];

    
select.addEventListener ('change', changeUrlLadguage);

function changeUrlLadguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#'+ lang;
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


    for (let key in landArr) {
        let elem = document.querySelector(".lng-" + key);
        if (elem) {
           elem.innerHTML = landArr[key][hash]; 
        }
        // document.querySelector(".lng-" + key).innerHTML = landArr[key][hash];
        

    }
}

changeLanguage();

