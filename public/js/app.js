console.log('client side javascript file is loaded!')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')



weatherform.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    
    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data) => {
            
            if(data.error){
                console.log('You must provide an address')
            }
            else{
                messageOne.textContent = data.details
                messageTwo.textContent = data.location
            }
        })
    })
})