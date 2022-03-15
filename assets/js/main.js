const flecha = document.querySelectorAll(".arrow1 , .arrow2")
const share = document.querySelector(".share")


const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}
flecha.forEach(function (item) {
	item.addEventListener('click', () => {
		toggleElement(share, 'active')
		toggleElement(body, 'no_scroll')
	})
})