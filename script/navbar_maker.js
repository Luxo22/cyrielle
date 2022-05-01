const navbarHTML = `
<div class="navBtn">
<button class="openNav" onclick="toggleNav()">&#9776;</button>
</div>

<nav class="navbar">     
<div class="navbar-container">
    <button class="closeNav" onclick="toggleNav()">&times;</button>   
    <div class="left">
        <a href="index.html">Accueil</a>
        <a href="menu.html">Menu</a>
    <a href="about.html">A propos</a>
    <a href="contact.html">Contactez nous</a>
    
    </div>
    <div class="right">
         <a class="modal_open">Panier</a>
    </div>
   
</div>

</nav>` //Code de la navbar

document.body.innerHTML += navbarHTML //Ajout de la navbar à la fin du body
const links = document.querySelectorAll('.navbar .navbar-container a')
const filename = window.location.href.split('/').pop().split('?')[0].split('#')[0].split('.').slice(0,1).toString();
links.forEach((link) => {
   if(filename === 'index') {
       if(link.innerText.toLowerCase() == 'accueil') {
           link.classList.add('active')
       }
   } 
   else if(link.innerText.toLowerCase() == filename) {
       link.classList.add('active')
   }
})
function toggleNav() {
    const button = document.querySelector('.openNav') 
    const nav = document.querySelector('nav.navbar')
    nav.classList.toggle('activeNav')
    button.classList.toggle('isActiveNav')
}

