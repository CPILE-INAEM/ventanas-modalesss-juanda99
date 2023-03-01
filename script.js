console.log('Hello World!')

// const btnShowModal = document.querySelectorAll('.show-modal')
const btnShowModal = document.querySelectorAll('#botones')
const modal = document.querySelector('.modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')

const openModal = function (e) {
  console.log(e, e.target)
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const closeModal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnShowModal.forEach((btn) => btn.addEventListener('click', openModal))

overlay.addEventListener('click', closeModal)
btnCloseModal.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal()
  }
})
