const checkboxContainer = document.querySelector('.checkbox-container');
const switchContainer = document.querySelector('.switch');
const bulbContainer = document.querySelector('.bulbs');

checkboxContainer.addEventListener('click', e => {
  e.target.classList.toggle('active');
  switchContainer.click();
});

switchContainer.addEventListener('change', () => {
  bulbContainer.classList.toggle('on')
  switchState.textContent = switchLabels[switchState.textContent];
})

const switchState = document.querySelector('.switch-state')
const switchLabels = {
  on: 'off',
  Off: 'on',
};
