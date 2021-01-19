// Add tab four to the nav bar

// create elements
let liTag = document.createElement('li');
let aTag = document.createElement('a');

// add attributes & content
liTag.style.backgroundColor = '#888888';
aTag.textContent = 'Four';

// grab ul and append
let ul = document.querySelector('#navbar ul');
liTag.appendChild(aTag);
ul.appendChild(liTag);


// move tab Four to be the first tab in the navbar
// ul.prepend(liTag);

