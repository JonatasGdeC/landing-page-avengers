document.addEventListener('DOMContentLoaded', function(){
    const buttonsMovies = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const alturaSobre = document.querySelector('.about').clientHeight;
    const alturaFilmes = document.querySelector('.movies').clientHeight;
    const alturaFaq = document.querySelector('.faq').clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;


        const links = document.querySelectorAll('.header__list__item a');

        if(posicaoAtual<alturaSobre){
            links[0].style.color='#fff'
        } else{
            links[0].style.color='red'
        }

        if(posicaoAtual<alturaFilmes&&posicaoAtual>alturaSobre){
            links[1].style.color='#fff'
        }else{
            links[1].style.color='red'
        }

        if(posicaoAtual<=alturaFaq&&posicaoAtual>alturaFilmes){
            links[2].style.color='#fff'
        }else{
            links[2].style.color='red'
        }
        
    })

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