window.addEventListener('load', start);

const clickArray = [];

function start() {
  const button = document.querySelector('#clickButton');
  button.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
  clickArray.push(getNewTimeStamp());

  render();
}

function render() {
  const ul = document.querySelector('#data');
  let lis = '';
  
  ul.innerHTML = '';

  clickArray.map((item) => {
    lis += `<li>${item}</li>`;
  });

  ul.innerHTML = lis;

  document.title = clickArray.length;
}