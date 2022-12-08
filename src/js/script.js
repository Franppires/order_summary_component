//variável dos números, botão e número selecionado
const rating = document.querySelectorAll('li')
const btn = document.querySelector('button')
let selectedRating // undefined

// adiciona a classe active 
function selectRating(e) {
    if(selectedRating !== undefined) {
        rating[selectedRating - 1].classList.remove('active')
    }
    e.target.classList.add('active')
    selectedRating = Number(e.target.innerText) 
}

//percorrer array
rating.forEach(elem => {
    elem.addEventListener('click', selectRating)
})

//função para ocultar avaliação
function submitRating() {
    if (selectedRating !== undefined) {
        document.getElementById('container').classList.add('hide')
        document.getElementById('thank-you').classList.remove('hide')
        document.getElementById('selected-rating').innerText = selectedRating
    }
}

//evento de click no submit 
btn.addEventListener('click', submitRating) 