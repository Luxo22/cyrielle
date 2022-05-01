
/* 
  Code pris de W3School
*/

const modal_code = `<div id="myModal" class="modal">

<!-- Modal content -->
<div class="modal-content">
  <span class="close">&times;</span>
  <h1>Just Baked</h1>

  <hr>
  
  <div class="cart-container">
  
  </div>
  <button class="price">Panier vide</button>
</div>

</div>`
document.body.innerHTML += modal_code

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".modal_open");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  makeCartContent()
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}