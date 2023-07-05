document.addEventListener('DOMContentLoaded', ()=>{ 
	fetch('db.json')
		.then(data => data.json())
		.then(res => console.log(res))

})