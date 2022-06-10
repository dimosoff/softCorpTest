import * as myFunctions from './functions.mjs';

myFunctions.linksPreventDefault();
myFunctions.scrollToTop();
myFunctions.addClassOnScroll('.header', 35, '_scrolled');
myFunctions.addClassOnClick('.burger', '.header', '_menu-opened');

const formRangeElement = document.querySelector("input[name='f-range']");
const formRangeLabelPercent = document.getElementById('f-range-percent');
const formSelectElement = document.getElementById('f-system-type');
const form = document.querySelector("form[name='form']");
const formFileButton = document.getElementById('f-file-button');
const formFileElement = document.getElementById('f-file');

updateRangenPercent(formRangeElement.value);

formRangeElement.addEventListener('change', (e) => updateRangenPercent(e.target.value));
formRangeElement.addEventListener('input', (e) => updateRangenPercent(e.target.value));

formSelectElement.addEventListener('keydown', (e) => {
  if (e.code == 'Space' || e.key == ' ') {
    e.preventDefault();
    expandSelect();
  }
  if (e.code == 'Enter' || e.key == 'Enter') {
    squeezeSelect();
  }
});

let isSelectExpanded = false,
  eventHandler = '';

formSelectElement.addEventListener("touchstart", (e) => {
  eventHandler = "touchstart";
  pointerDown(e);
}, {
  capture: true,
  passive: false
});
formSelectElement.addEventListener("touchend", (e) => {
  eventHandler = "touchend";
  pointerUp(e);
}, {
  capture: true,
  passive: false
});

document.addEventListener('mousedown', (e) => {
  eventHandler = "mousedown";
  pointerDown(e);
});
document.addEventListener('mouseup', (e) => {
  eventHandler = "mouseup";
  pointerUp(e);
});

formFileButton.addEventListener('click', () => formFileElement.click());

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let dataArray = [];
  for (const [name, value] of data) {
    dataArray.push([name, value])
  }
  alert(dataArray);
})

function updateRangenPercent(percentValue) {
  formRangeLabelPercent.textContent = `${percentValue}%`;
}

function pointerDown(e) {
  if (formSelectElement === e.target || formSelectElement.contains(e.target)) {
    if (!isSelectExpanded) {
      e.preventDefault();
    }
  }
}

function pointerUp(e) {
  if (formSelectElement === e.target || formSelectElement.contains(e.target)) {
    if (!isSelectExpanded) {
      e.target.focus();
      expandSelect();
      isSelectExpanded = true;
    } else {
      squeezeSelect();
      isSelectExpanded = false;
    }
  } else {
    if (isSelectExpanded) {
      squeezeSelect();
      isSelectExpanded = false;
    }
  }

}

function squeezeSelect() {
  formSelectElement.setAttribute("size", "1");
  formSelectElement.classList.remove('_active');
}

function expandSelect() {
  if (eventHandler != 'mousedown') {
    formSelectElement.setAttribute("size", "6");
    formSelectElement.classList.add('_active');
  }
}