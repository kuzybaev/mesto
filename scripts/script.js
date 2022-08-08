const popUp = document.querySelector('.pop-up')
const editButton = document.querySelector('.btn_type_edit')
const closeButton = popUp.querySelector('.btn_type_close')
const popUpForm = popUp.querySelector('.pop-up__container')
const submitButton = popUpForm.querySelector('.btn_type_submit')
const profileInfo = document.querySelector('.profile__info')
const profileName = profileInfo.querySelector('.profile__name')
const profileDescription = profileInfo.querySelector('.profile__description')
const nameInput = popUpForm.querySelector('.pop-up__input_type_name').value
const infoInput = popUpForm.querySelector('.pop-up__input_type_info').value

const togglePopUp = function () {
    popUp.classList.toggle('pop-up_open')
}

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput
    profileDescription.textContent = infoInput
}

editButton.addEventListener('click', togglePopUp)
popUpForm.addEventListener('submit', formSubmitHandler)
closeButton.addEventListener('click', togglePopUp)
// submitButton.addEventListener('click', togglePopUp)
