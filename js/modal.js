const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');
      modalTimerId = setTimeout(openPopUp, 3000000);
    function openPopUp(){
        
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId)
    }
modalTrigger.forEach( btn =>{

    btn.addEventListener('click', openPopUp);
});
    function closerPopUp(){

        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closerPopUp)
    modal.addEventListener('click', (e)=>{

        if(e.target === modal){
            closerPopUp();
        }
        document.addEventListener('keydown', (e) =>{

            if (e.key === "Escape"){
                closerPopUp();
            }
        });

    function scrollOpenPopUp(){

        if (window.scrollY + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight) {
            openPopUp();
            window.removeEventListener('scroll', scrollOpenPopUp);
        }
    }
    window.addEventListener('scroll', scrollOpenPopUp)

})