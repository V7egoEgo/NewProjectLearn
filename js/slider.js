document.addEventListener('DOMContentLoaded', ()=>{
  
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    function hideTabContent(){
      tabsContent.forEach(item =>{
        item.style.display = 'none';
      });
      tabs.forEach(item =>{
        item.classList.remove('tabheader__item_active');
      })
    }
    function showTabContent (i = 0){
      tabsContent[i].style.display= 'block' ;
      tabs[i].classList.add('tabheader__item_active')
    }
    hideTabContent();
    showTabContent ();
    
    tabsParent.addEventListener('click', (event)=>{
      const target = event.target;
      if (target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, i)=>{
          if(target === item){
            hideTabContent();
            showTabContent (i);
          }
        });
      }
    });
	// other slider

	const slids = document.querySelectorAll('.offer__slide'),
		  prev = document.querySelector('.offer__slider-prev'),
		  next = document.querySelector('.offer__slider-next'),
		  total = document.querySelector('#total'),
		  current = document.querySelector('#current');
	let sliderIndex = 1;

	showSlide(sliderIndex)
	if (slids.length < 10){
		total.textContent = `0${slids.length}`
	}else{
		total.textContent = slids.length
	}
	function showSlide(n){
		if(n > slids.length){
			sliderIndex = 1;
		}
		if(n < 1 ){
			sliderIndex = slids.length
		}
		slids.forEach(el => { el.style.display = 'none'});
		slids[sliderIndex - 1].style.display = 'block';
		if (slids.length < 10){
			current.textContent = `0${sliderIndex}`
		}else{
			current.textContent = sliderIndex
		}
	};

	function plusSlides(n){
		showSlide(sliderIndex += n);
	}
	prev.addEventListener('click', ()=>{
		plusSlides(-1);
	})

	next.addEventListener('click', ()=>{
		plusSlides(1);
	})
});