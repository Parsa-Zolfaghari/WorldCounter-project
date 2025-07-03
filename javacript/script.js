const GetTexareaEl = document.querySelector('.textarea');
const NumberOfWordsEl = document.querySelector('.state__number--word');
const NumberOfCharacterEl = document.querySelector('.state__number--character');
const NumberOfFacebookEl = document.querySelector('.state__number--facebook');
const NumberOfTwitterEl = document.querySelector('.state__number--twitter');

const InputHandler = () => {
    if (GetTexareaEl.value.includes('<script>')) {
        alert('wrong Input');
        GetTexareaEl.value = GetTexareaEl.value.replace('<script>', '');
    }
    const GetValyeOfCharacter = GetTexareaEl.value.length;
    let ResultForWords = GetTexareaEl.value.split(' ').length;
    if (GetTexareaEl.value.length === 0) {
        ResultForWords = 0;
    }
    const ResultForTwitter = 220 - GetValyeOfCharacter;
    const ResultForFacebook = 2200 - GetValyeOfCharacter;

    if (ResultForTwitter < 0) {
        NumberOfTwitterEl.classList.add('limit--style');
    } else {
        NumberOfTwitterEl.classList.remove('limit--style');
    }

    if (ResultForFacebook < 0) {
        NumberOfFacebookEl.classList.add('limit--style');
    } else {
        NumberOfTwitterEl.classList.remove('limit--style');
    }

    NumberOfCharacterEl.textContent = GetValyeOfCharacter;
    NumberOfTwitterEl.textContent = ResultForTwitter;
    NumberOfFacebookEl.textContent = ResultForFacebook;
    NumberOfWordsEl.textContent = ResultForWords;
}

GetTexareaEl.addEventListener('input', InputHandler);



