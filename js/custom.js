const listGroupUl = document.querySelectorAll('.list-group', 'ul');
const subTitleLevel1 = document.querySelectorAll('.subtitle-level1');
const subTitleLevel2 = document.querySelectorAll('.subtitle-level2');

listGroupUl.forEach((item) => {
  setEventListenerClick(item);
});

subTitleLevel1.forEach((item) => {
  item.nextElementSibling.style.height = '0px';
  item.nextElementSibling.classList.add('invisible');
  setEventListenerClick(item);
});

subTitleLevel2.forEach((item) => {
  item.nextElementSibling.style.height = '0px';
  item.nextElementSibling.classList.add('invisible');
  setEventListenerClick(item);
});

function setEventListenerClick(item) {
  item.addEventListener('click', (evt) => {
    if (
      item.tagName === 'SPAN' &&
      item.nextElementSibling.style.height != '0px'
    ) {
      item.nextElementSibling.classList.remove('visible');
      item.nextElementSibling.classList.add('invisible');
      item.nextElementSibling.style.height = '0px';
      return;
    }
    if (item.tagName === 'SPAN') {
      item.nextElementSibling.classList.remove('invisible');
      item.nextElementSibling.classList.add('visible');
      item.nextElementSibling.style.height = 'auto';
      return;
    }
  });
}