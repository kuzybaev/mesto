//buttons on initial page
const editButton = document.querySelector('.btn_type_edit');
const addButton = document.querySelector('.btn_type_add');
const deleteButton = document.querySelector('.btn_type_delete');
const likeButton = document.querySelector('.btn_type_like');

//popup elements
const popUp = document.querySelector('.pop-up')
const popUpContainer = popUp.querySelector('.pop-up__container')
const popUpForm = popUpContainer.querySelector('.pop-up__form')
const nameInput = popUpForm.querySelector('.pop-up__input_type_name')
const infoInput = popUpForm.querySelector('.pop-up__input_type_info')

//popup buttons
const closeButton = popUp.querySelector('.btn_type_close')

//profile information elements
const profileInfo = document.querySelector('.profile__info')
const profileName = profileInfo.querySelector('.profile__name')
const profileDescription = profileInfo.querySelector('.profile__description')

function togglePopUp () {
    popUp.classList.toggle('pop-up_open')
}

function formSubmitHandler (evt) {
    evt.preventDefault()
    profileName.textContent = nameInput.value
    profileDescription.textContent = infoInput.value
    togglePopUp()
}

editButton.addEventListener('click', function togglePopUp() {
    popUp.classList.toggle('pop-up_open');
    if (popUp.classList.contains('pop-up_open')) {
        nameInput.value = profileName.textContent;
        infoInput.value = profileDescription.textContent;
    }
});
addButton.addEventListener('click', togglePopUp);
closeButton.addEventListener('click', togglePopUp);
popUpForm.addEventListener('submit', formSubmitHandler);



