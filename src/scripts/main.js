document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('[data-tab-question]');

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click',abreouFechaResposta)
    }
})

function abreouFechaResposta(elemento){
    const classe = 'curiosidades__list__item--is-open';
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}
