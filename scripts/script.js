"use strict";

/* variables*/
//global variables
const page = document.querySelector(".page");
const popupEditProfile = page.querySelector(".pop-up_type_edit");
const popupAddCard = page.querySelector(".pop-up_type_add");
const imagePopup = page.querySelector(".pop-up_type_image");
const popupEditForm = popupEditProfile.querySelector(".pop-up__form");
const popupAddForm = popupAddCard.querySelector(".pop-up__form");
const profileName = page.querySelector(".profile__name");
const profileBio = page.querySelector(".profile__description");
const imageDisplay = imagePopup.querySelector(".pop-up__image");
const imageCaption = imagePopup.querySelector(".pop-up__caption");

//template variable
const cardTemplate = document.querySelector(".card-template");

//buttons variables
const editButton = page.querySelector(".btn_type_edit");
const addButton = page.querySelector(".btn_type_add");
const closeEditPopup = popupEditProfile.querySelector(".btn_type_close");
const closeAddPopup = popupAddCard.querySelector(".btn_type_close");
const closeImagePopup = imagePopup.querySelector(".btn_type_close");

//inputs variables
const inputName = popupEditForm.querySelector(".pop-up__input_type_name");
const inputBio = popupEditForm.querySelector(".pop-up__input_type_info");
const inputPlace = popupAddForm.querySelector(".pop-up__input_type_place-name");
const inputLink = popupAddForm.querySelector(
  ".pop-up__input_type_image-source"
);

//cards list variable
const cardsList = page.querySelector(".cards__item");

//initial card variable
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Open/close popup feature
function openPopup(popup) {
  popup.classList.toggle("pop-up_open");
}

//Card features

function likeButtonHandler (evt) {
  evt.target.classList.toggle("btn_type_like-active");
}

function deleteButtonHandler (evt) {
    const cardItem = evt.target.closest(".card");
    cardItem.remove();
}

function createCard(element) {
  const cardElement = cardTemplate.content.cloneNode(true);

  cardElement.querySelector(".card__title").textContent = element.name;
  cardElement.querySelector(".card__image").alt = element.name;
  cardElement.querySelector(".card__image").src = element.link;

  const likeButton = cardElement.querySelector(".btn_type_like");
  likeButton.addEventListener("click", likeButtonHandler);
  const deleteButton = cardElement.querySelector(".btn_type_delete");
  deleteButton.addEventListener("click", deleteButtonHandler);
  const imageButton = cardElement.querySelector(".card__image-button");
  imageButton.addEventListener("click", () => {
    imageDisplay.src = element.link;
    imageCaption.textContent = element.name;
    openPopup(imagePopup);
  });

  return cardElement;
}

function addSubmitHandler(evt) {
  evt.preventDefault();

  const newCardObject = {
    name: inputPlace.value,
    link: inputLink.value,
  };

  const newCard = createCard(newCardObject);
  cardsList.prepend(newCard);

  openPopup(popupAddCard);
}

initialCards.forEach(card => {
  const cardItem = createCard(card);
  cardsList.prepend(cardItem);
});

//Edit button features
function editButtonHandler() {
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent;

  openPopup(popupEditProfile);
}

function editSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;

  openPopup(popupEditProfile);
}

//Add button features

function addButtonHandler() {
  inputPlace.value = "";
  inputLink.value = "";

  openPopup(popupAddCard);
}

editButton.addEventListener("click", editButtonHandler);
addButton.addEventListener("click", addButtonHandler);

closeEditPopup.addEventListener("click", () => openPopup(popupEditProfile));
closeAddPopup.addEventListener("click", () => openPopup(popupAddCard));
closeImagePopup.addEventListener("click", () => openPopup(imagePopup));

popupEditForm.addEventListener("submit", editSubmitHandler);
popupAddForm.addEventListener("submit", addSubmitHandler);
