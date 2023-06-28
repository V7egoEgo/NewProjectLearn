const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach( btn =>{
    console.log(btn)
    btn.addEventListener('click', () =>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });
});

modalCloseBtn.addEventListener('click', () =>{
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
})
modal.addEventListener('click', (e)=>{
    if(e.target === modal){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    }
    document.addEventListener('keydown', (e) =>{
        if (e.code === "Escape"){
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    })
})