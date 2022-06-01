'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModel = function () {
  //console.log('clicked btn');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModel);
}
btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
