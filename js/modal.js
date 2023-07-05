document.addEventListener('DOMContentLoaded', ()=>{
	const modalTrigger = document.querySelectorAll("[data-modal]"),
		modal = document.querySelector(".modal"),
		modalTimerId = setTimeout(openPopUp, 3000000);
	function openPopUp() {
		modal.classList.add("show");
		modal.classList.remove("hide");
		document.body.style.overflow = "hidden";
		clearInterval(modalTimerId);
	}
	modalTrigger.forEach((btn) => {
		btn.addEventListener("click", openPopUp);
	});
	function closerPopUp() {
		modal.classList.add("hide");
		modal.classList.remove("show");
		document.body.style.overflow = "";
	}

	
	modal.addEventListener("click", (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closerPopUp();
		}
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			closerPopUp();
		}
	});
	// Активация Скролла
	// function scrollOpenPopUp() {
	// 	if (
	// 		window.scrollY + document.documentElement.clientHeight >=
	// 		document.documentElement.scrollHeight
	// 	) {
	// 		openPopUp();
	// 		window.removeEventListener("scroll", scrollOpenPopUp);
	// 	}
	//   }
	// window.addEventListener("scroll", scrollOpenPopUp);
	});

	//  Работа с отпракой
	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach(item => {
		postData(item);
	});
	function postData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage);
		
			const formData = new FormData(form);

			const object = {};
			formData.forEach(function(value, key){
				object[key] = value;
			});

			fetch('server.php', {
				method: "POST",
				headers : {
					'Content-type':'application/json'
				},
				body : JSON.stringify(object)
			}).then(data => data.text()
			).then(data => {
				swodModalPost(message.success);
				statusMessage.remove();
			}).catch(()=>{
				swodModalPost(message.failure);
			}).finally(()=> {
				form.reset();
			})
		});
	}



	function swodModalPost(massage){

		const prevMiodalDialog = document.querySelector('.modal__dialog');
		prevMiodalDialog.classList.add('hide');
		openPopUp();

		const createNewModal = document.createElement('div');
		createNewModal.classList.add('modal__dialog');
		createNewModal.innerHTML =`
			<div class = "modal__content"> 
				<div class = "modal__close" data close>x</div>
				<div class = "modal__title">${massage}</div>
			</div>
		`;
		document.querySelector('.modal').append(createNewModal);
		setTimeout(()=>{
			createNewModal.remove();
			prevMiodalDialog.classList.add('show');
			prevMiodalDialog.classList.remove('hide');
			closerPopUp();
		},4000)

		document.querySelector('.modal').append(createNewModal);
	}

})