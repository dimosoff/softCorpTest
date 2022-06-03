import * as myFunctions from './functions.mjs';

myFunctions.linksPreventDefault();
myFunctions.scrollToTop();
myFunctions.addClassOnScroll('.header', 35, '_scrolled');
myFunctions.addClassOnClick('.burger', '.header', '_menu-opened');

const formRangeElement = document.querySelector("input[name='f-range']");
const formRangeLabelPercent = document.getElementById('f-range-percent');
const formSelectElement = document.getElementById('f-system-type');
const form = document.querySelector("form[name='form']");

updateRangenPercent(formRangeElement.value);

formRangeElement.addEventListener('change', (e) => updateRangenPercent(e.target.value));
formRangeElement.addEventListener('input', (e) => updateRangenPercent(e.target.value));

formSelectElement.addEventListener('keydown', (e) => {
  if (e.code == 'Space' || e.key == ' ') {
    e.preventDefault();
    expandSelect(e);
  }
  if (e.code == 'Enter' || e.key == 'Enter') {
    squeezeSelect(e);
  }
});

let isSelectExpanded = false;
document.addEventListener('mousedown', (e) => {
  if (formSelectElement === e.target || formSelectElement.contains(e.target)) {
    if (!isSelectExpanded) {
      e.preventDefault();
      e.target.focus();
      expandSelect(e);
    }
  } else {
    squeezeSelect(e);
    isSelectExpanded = false;
  }
});
formSelectElement.addEventListener('mouseup', (e) => {
  if (isSelectExpanded) {
    squeezeSelect(e);
    isSelectExpanded = false;
  } else {
    isSelectExpanded = true;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let dataArray = [];
  for (const [name,value] of data) {
    dataArray.push([name, value])
  }
  alert(dataArray);
})

function updateRangenPercent(percentValue) {
  formRangeLabelPercent.textContent = `${percentValue}%`;
}

function squeezeSelect() {
  formSelectElement.setAttribute("size", "1");
  formSelectElement.classList.remove('_active');
}

function expandSelect() {
  formSelectElement.setAttribute("size", "6");
  formSelectElement.classList.add('_active');
}