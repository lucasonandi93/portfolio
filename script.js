let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
    }
}

const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const flgsElement = document.getElementById("flags");

const elementsToChange = document.querySelectorAll("[data-section], [data-placeholder]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
  
    for (const elementToChange of elementsToChange) {
      // Obtiene los atributos data-section, data-placeholder y data-value
      const section = elementToChange.dataset.section;
      const placeholder = elementToChange.dataset.placeholder;
      const value = elementToChange.dataset.value;
  
      // Verifica si el elemento tiene el atributo data-section
      if (section) {
        // Actualiza el innerHTML del elemento con el texto correspondiente de los datos JSON
        elementToChange.innerHTML = texts[section][value];
      }
  
      // Verifica si el elemento tiene el atributo data-placeholder
      if (placeholder) {
        // Actualiza el atributo placeholder del elemento con el texto correspondiente de los datos JSON
        elementToChange.setAttribute('placeholder', texts[placeholder][value]);
      }
    }
  };

flgsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = "assets/icons/sun.svg";
        toggleText.textContent = "Light Mode";
        toggleText.setAttribute('data-value', 'light_mode');
        toggleText.setAttribute('data-section', 'nav-bar');
    }else{
        toggleIcon.src = "assets/icons/moon.svg";
        toggleText.textContent = "Dark Mode";
        toggleText.setAttribute('data-value', 'dark_mode');
        toggleText.setAttribute('data-section', 'nav-bar');
    }
})

function openModal(imagen) {
    var modal = document.getElementById('modal-container');
    var modalImg = document.querySelector('#modal-content img');

    modal.style.display = 'flex';
    modalImg.src = imagen.src;
}

function closeModal() {
    document.getElementById('modal-container').style.display = 'none';
}

// Evitar que el clic dentro del modal se cierre
document.querySelector('#modal-content').onclick = function(event) {
    event.stopPropagation();
};
window.onscroll = function(){
    efectoHabilidades();
}