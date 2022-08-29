'use strict';

/* variables*/
//global variables
const page = document.querySelector('.page');
const editPopup = page.querySelector('.pop-up_type_edit');
const addPopup = page.querySelector('.pop-up_type_add');
const popupEditForm = editPopup.querySelector('.pop-up__form');
const popupAddForm = addPopup.querySelector('.pop-up__form');
const profileName = page.querySelector('.profile__name');
const profileBio = page.querySelector('.profile__description');

//buttons variables
const editButton = page.querySelector('.btn_type_edit');
const addButton = page.querySelector('.btn_type_add');
const closeEditPopup = editPopup.querySelector('.btn_type_close');
const closeAddPopup = addPopup.querySelector('.btn_type_close');

//inputs variables
const inputName = editPopup.querySelector('.pop-up__input_type_name');
const inputBio = editPopup.querySelector('.pop-up__input_type_info');
const inputPlace = addPopup.querySelector('.pop-up__input_type_place-name');
const inputLink = addPopup.querySelector('.pop-up__input_type_image-source');

//initial card variable
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];




//Open/close popup feature
function openPopup (popup) {
    popup.classList.toggle('pop-up_open');
}

//Edit button features
function editButtonHandler (evt) {
    if(!editPopup.classList.contains('pop-up_open')) {
        inputName.value = profileName.textContent;
        inputBio.value = profileBio.textContent;
    }

    openPopup(editPopup)
}

function editSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = inputName.value;
    profileBio.textContent = inputBio.value;

    openPopup(editPopup);
}

//Add button features

function addButtonHandler (evt) {
    inputPlace.value = '';
    inputLink.value = '';

    openPopup(addPopup);
}




editButton.addEventListener('click', editButtonHandler);
addButton.addEventListener('click', addButtonHandler);
closeEditPopup.addEventListener('click', function () {
    openPopup(editPopup);
})
closeAddPopup.addEventListener('click', function () {
    openPopup(addPopup);
});

popupEditForm.addEventListener('submit', editSubmitHandler);
// popupAddForm.addEventListener('submit', )















