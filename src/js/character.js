import constants from './constants';

const FACES_FOR_BODIES = constants.FACES_FOR_BODIES;
const CURRENT_CHARACTER = constants.CURRENT_CHARACTER;

const controls = document.querySelector(`.frontend__control`);
const character = document.querySelector(`.character`);
const body = character.querySelector(`.character__body`);
const face = character.querySelector(`.character__face`);

const changeCharacter = (evt) => {
  const target = evt.target;
  const type = target.name;
  const value = target.value;

  switch (type) {
    case `body`:
      changeBody(value);
      changeFaceBar(value);
      break;
    case `face`:
      changeFace(value);
      break;
  }
};

const findClass = (el, regExp) => el.className.match(regExp);

const changeFaceBar = (val) => {
  const classFaceControlPrefix = `face__item--`;
  const faceInputs = controls.querySelectorAll(`.face .controls__item__radio`);
  const valColor = val.toUpperCase();

  for (let index = 0; index < faceInputs.length; index++) {
    const input = faceInputs[index];
    const inputWrapper = input.parentNode;
    const previousClassFaceBarRegExp = new RegExp(classFaceControlPrefix + `(\\w+)-(\\w+)`, `g`);
    const previousClassFaceBar = findClass(inputWrapper, previousClassFaceBarRegExp);

    input.value = FACES_FOR_BODIES[valColor][index];
    inputWrapper.classList.remove(previousClassFaceBar);
    inputWrapper.classList.add(classFaceControlPrefix + val + `-` + FACES_FOR_BODIES[valColor][index]);
  }

  faceInputs[0].checked = true;
  changeFace(FACES_FOR_BODIES[valColor][0]);
};

const changeBody = (val) => {
  const classBodyPrefix = `character__body--`;

  body.classList.remove(classBodyPrefix + CURRENT_CHARACTER.body);
  body.classList.add(classBodyPrefix + val);

  CURRENT_CHARACTER.body = val;
};

const changeFace = (val) => {
  const classFacePrefix = `character__face--`;
  const previousClassFaceRegExp = new RegExp(classFacePrefix + `(\\w+)-(\\w+)`, `g`);
  const previousClassFace = findClass(face, previousClassFaceRegExp);

  face.classList.remove(previousClassFace);
  face.classList.add(classFacePrefix + CURRENT_CHARACTER.body + `-` + val);

  CURRENT_CHARACTER.face = val;
};

controls.addEventListener(`change`, changeCharacter);
