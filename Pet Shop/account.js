const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})

const switcher = document.querySelector
for (const switcher){
  var (if = switcher.item && switcher.item.classList.contains('is-active)
}
