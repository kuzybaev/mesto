const popUp = document.querySelector('.pop-up')
const editButton = document.querySelector('.btn_type_edit')
const closeButton = popUp.querySelector('.btn_type_close')
const popUpContainer = popUp.querySelector('.pop-up__container')
const popUpForm = popUpContainer.querySelector('.pop-up__form')
let nameInput = popUpForm.querySelector('.pop-up__input_type_name')
let infoInput = popUpForm.querySelector('.pop-up__input_type_info')
const profileInfo = document.querySelector('.profile__info')
let profileName = profileInfo.querySelector('.profile__name')
let profileDescription = profileInfo.querySelector('.profile__description')

const togglePopUp = function () {
    if (!popUp.classList.contains('pop-up_open')) {
        nameInput.value = profileName.textContent
        infoInput.value = profileDescription.textContent
    }
    popUp.classList.toggle('pop-up_open')
}
//Уважаемый ревьюер, привет! Исправил согласно вашему замечанию,
//но, к сожалению, не особо понял саму строчку с методом контейнс.
//Логика в принципе ясна, только вот зачем надо ставить ! - не понимаю :)
//Буду благодарен, если вы объясните зачем нужен этот оператор. 

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileDescription.textContent = infoInput.value
    togglePopUp()
}

editButton.addEventListener('click', togglePopUp)
closeButton.addEventListener('click', togglePopUp)
popUpForm.addEventListener('submit', formSubmitHandler)



