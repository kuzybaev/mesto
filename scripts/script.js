const popUp = document.querySelector('.pop-up')
const editButton = document.querySelector('.btn_type_edit')
const closeButton = popUp.querySelector('.btn_type_close')
const popUpContainer = popUp.querySelector('.pop-up__container')
const popUpForm = popUpContainer.querySelector('.pop-up__form')
const submitButton = popUpContainer.querySelector('.btn_type_submit')
let nameInput = popUpForm.querySelector('.pop-up__input_type_name')
let infoInput = popUpForm.querySelector('.pop-up__input_type_info')
const profileInfo = document.querySelector('.profile__info')
let profileName = profileInfo.querySelector('.profile__name')
let profileDescription = profileInfo.querySelector('.profile__description')

const togglePopUp = function () {
    popUp.classList.toggle('pop-up_open')
    nameInput.setAttribute('value', 'Жак-Ив Кусто')
    infoInput.setAttribute('value', 'Исследователь океана')
}

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileDescription.textContent = infoInput.value
    togglePopUp()
}

editButton.addEventListener('click', togglePopUp)
closeButton.addEventListener('click', togglePopUp)
popUpForm.addEventListener('submit', formSubmitHandler)



