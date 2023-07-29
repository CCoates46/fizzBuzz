// const paragraph = document.createElement('p');
// paragraph.innerText = 'My name is Clare. I live in Leicestershire.\n I am married with 2 girls called Eva aged 8 and Isabelle aged 4'
// paragraph.style.fontsize = '18px';
// paragraph.style.fontFamily = 'sans-serif';
// //paragraph.style.width = '100px';
// paragraph.style.border = '1px solid orange';
// paragraph.style.padding = '30px'

// document.body.appendChild(paragraph);

// const content = document.getElementById('content');
// content.style.border = '10px dashed red';
// content.style.padding = '50px';
// const newHeader = document.createElement('h1')
// newHeader.innerText = 'I\'m in!'

// content.appendChild(newHeader)

const myButton = document.getElementById('myButton')
const myText = document.getElementById('myText')

myButton.addEventListener('click', () => {
    myText.style.border = '2px solid red'
    myText.style.fontFamily = 'arial'
    myText.style.fontSize = '50px'
    myText.style.padding = '30px'
    myButton.style.backgroundColor = 'yellow'
    myButton.style.border = '30px dash black'
    myButton.style.fontSize = '30px'
    myText.innerHTML = 'Look I\'ve changed!'
    myButton.innerHTML = 'You clicked me'
})
