const container = document.querySelector('#container');

const content = document.createElement('div');
content.textContent = 'This is the glorius text content!';
content.classList.add('content');
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";

const headingThree = document.createElement('h3');
headingThree.textContent = "I'm a blue h3!";

content.appendChild(paragraph);
content.appendChild(headingThree);

const secondDiv = document.createElement('div');

const heading = document.createElement('h1');
heading.textContent = "I'm in a div";

const paraTwo = document.createElement('p');
paraTwo.textContent = 'ME TOO!';

secondDiv.appendChild(heading);
secondDiv.appendChild(paraTwo);

container.appendChild(secondDiv);

// const button = document.querySelector('#btn');
// button.addEventListener('click', () => {
//   alert('Hello World!');
// });
// button.onclick = alertFunction;
// button.addEventListener('click', function(e) {
//   e.target.style.background = 'blue';
// });

// function alertFunction() {
//   alert('YAY YOU DID IT!');
// }

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    console.log(button.id);
  });
});
