let letter = ''; 
let index = 0;
let text = 'Budi izvrstan u onome što';
let text2 = 'vidiš!';
let text3 = 'voliš.';
let text4 = 'zaiskri.';


function type() {
        letter = text.slice(0, ++index);
        document.querySelector(".text").innerHTML = letter;
        if (letter.length === text.length) {
            index = 0;
            typeVidis();
            return;
        }
        setTimeout(type, 100);
    }

async function typeVidis() {
    letter = text2.slice(0, ++index);
        document.querySelector(".text2").innerHTML = letter;
        if (letter.length === text2.length) {
            index = 0;
            await sleep(3000);
            erase();
            typeVolis();
            return;
        }
        setTimeout(typeVidis, 100);
}

async function typeVolis() {
    letter = text3.slice(0, ++index);
        document.querySelector(".text2").innerHTML = letter;
        if (letter.length === text3.length) {
            index = 0;
            await sleep(3000);
            typeZaiskri();
            document.querySelector(".text2").innerHTML = '';
            document.querySelector(".text").innerHTML = text + " " + text2;
            return;
        }
        setTimeout(typeVolis, 100);
}

async function typeZaiskri() {
    letter = text4.slice(0, ++index);
        document.querySelector(".redtext").innerHTML = letter;
        if (letter.length === text4.length) {
            return;
        }
        setTimeout(typeZaiskri, 100);
}

async function erase() {
    document.querySelector(".text2").innerHTML = '';

}

function animation () {
    type();
}


animation();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



