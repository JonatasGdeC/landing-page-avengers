document.addEventListener('DOMContentLoaded', function(){
    const buttonsMovies = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');


    for(let i = 0; i<buttonsMovies.length; i++){
        buttonsMovies[i].addEventListener('click', function(botao){
            const moviesWatch = botao.target.dataset.tabButton;
            const movie = document.querySelector(`[data-tab-id=${moviesWatch}]`)
            
            escondeAbas()
            movie.classList.add('movies__content--is-active')
        })
    }

    for (let i = 0; i<questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }

    function escondeAbas(){
        const tabsContainer = document.querySelectorAll('[data-tab-id]')

        for(let i = 0; i < tabsContainer.length; i++){
            tabsContainer[i].classList.remove('movies__content--is-active')
        }
    }
})

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementPai = elemento.target.parentNode;

    elementPai.classList.toggle(classe)
}