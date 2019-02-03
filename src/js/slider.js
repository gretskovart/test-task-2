import getCloud from './cloud';
import constants from './constants';

const PIN_COORDS = constants.PIN_COORDS;

const bar = document.querySelector(`.frontend__content`);
const pin = bar.querySelector(`.frontend__btn`);
const line = bar.querySelector(`.frontend__line`);

getCloud();

const shiftPinPosition = (value) => {
  pin.style.left = value + `%`;
};

const shiftPinToGrade = () => {
  if (PIN_COORDS.current < PIN_COORDS.TO_START) {
    shiftPinPosition(PIN_COORDS.JUNIOR);
    getCloud();

  } else if (PIN_COORDS.current >= PIN_COORDS.TO_START && PIN_COORDS.current < PIN_COORDS.TO_FINISH) {
    shiftPinPosition(PIN_COORDS.MIDDLE);
    getCloud(`middle`);

  } else if (PIN_COORDS.current >= PIN_COORDS.TO_FINISH) {
    shiftPinPosition(PIN_COORDS.SENIOR);
    getCloud(`senior`);
  }
};

const sliderPinMouseDownHandler = (downEvt) => {
  let startPinPosition = downEvt.clientX;
  const sliderLineRect = line.getBoundingClientRect();
  const currentPinPosition = (startPinPosition - sliderLineRect.left) / sliderLineRect.width * 100;

  shiftPinPosition(currentPinPosition);

  const sliderPinMoveHandler = (moveEvt) => {
    const shift = startPinPosition - moveEvt.clientX;
    startPinPosition = moveEvt.clientX;

    let movePosition = (pin.offsetLeft - shift) / sliderLineRect.width * 100;

    if (movePosition <= PIN_COORDS.JUNIOR) {
      movePosition = PIN_COORDS.JUNIOR;

    } else if (movePosition >= PIN_COORDS.SENIOR) {
      movePosition = PIN_COORDS.SENIOR;

    }

    PIN_COORDS.current = movePosition;
    shiftPinPosition(movePosition);
  };

  const sliderPinMouseUpHandler = () => {
    shiftPinToGrade();

    document.removeEventListener(`mousemove`, sliderPinMoveHandler);
    document.removeEventListener(`mouseup`, sliderPinMouseUpHandler);
    document.removeEventListener(`touchmove`, sliderPinMoveHandler, false);
    document.removeEventListener(`touchend`, sliderPinMouseUpHandler, false);
  };

  document.addEventListener(`mousemove`, sliderPinMoveHandler);
  document.addEventListener(`mouseup`, sliderPinMouseUpHandler);
  document.addEventListener(`touchmove`, sliderPinMoveHandler, false);
  document.addEventListener(`touchend`, sliderPinMouseUpHandler, false);
};

bar.addEventListener(`mousedown`, sliderPinMouseDownHandler);
bar.addEventListener(`touchstart`, sliderPinMouseDownHandler, false);

