const panels = document.querySelectorAll('.panel')
var preIndex = 0

panels.forEach((panel,index) => {
	panel.addEventListener('click',()=> {
		if(!panel.classList.contains('active')) {
		  panel.classList.add('active');
		  panels[preIndex].classList.remove('active');
		  preIndex = index;
		}
	})
})

