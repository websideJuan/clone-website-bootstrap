const modals = document.getElementById('modals')
const divElement = document.createElement('div')

window.addEventListener('DOMContentLoaded', function () {
  let StateModlas = {
    modalDsiplay: 'block',
    setModalsDisplay: function() {
        return this.modalDsiplay = 'block'
    }
  }
    
  divElement.classList.add('modals-position')
  divElement.innerHTML =
  `<div class="modal fade show" style="display: ${StateModlas.modalDsiplay};" tabindex="-1">
      <div class="modal-dialog">
      <div class="modal-content ">
          <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <p>
          Hello this website is still in development, performing the best practices and providing excellent service
          </p>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
          </div>
      </div>
      </div>
  </div>`

  modals.appendChild(divElement)
})