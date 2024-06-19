const header = `
    <div class="nav-content">
            <ul>
                    <li><a href="#hero" class="nav-links">Home</a></li>
                    <li><a href="#proyects" class="nav-links">Proyects</a></li>
                    <li><a href="#skills" class="nav-links">Skills</a></li>
                    <li><a href="about.html" class="nav-links">About</a></li>
            </ul>
    </div>
`;

document.getElementById('header').innerHTML += header;






const languages = `
   
`;

document.getElementById('languages').innerHTML += languages;




const hero = `
           <div class="text">
                    <div class="content-tex">
                        <div class="logo">
                            <img src="lgo.png" alt="logo">
                        </div>
                        <span id="hola">Hello, I'm <strong>Alex</strong></span>
                        <p id="siteContent">Programmer and Web Developer passionate about design.</p>
                        <div class="buttons">
                            <a id="cvitae" href="https://cdn.discordapp.com/attachments/1244354279779860511/1252740941434060891/ccc.pdf?ex=6673516b&is=6671ffeb&hm=bbdb249785f0a6c2786de6c3daddb4647ad23dcbe420af60527b4f9f51bf5853&" class="btn">Download CV</a>
                        </div>
                        <span id="locacion"> <div></div> Santo Domingo, Dominican Republic</span>
                    </div>
                </div>
                <div class="redes">
                    <div class="item">
                       <a href="https://github.com/"><i class='bx bxl-github'></i></a>
                    </div>
                    <div class="item">
                        <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                     </div>
                </div>     
`;

document.getElementById('hero').innerHTML += hero;




const Proyects = `
 <div class="tile">
                    <h1 id="proyectos">Proyects</h1>
                </div>
                <div class="content-items">

                    <div class="items">
                      <div class="items-container" data-animation="show">
                        <div class="img">
                            <img src="https://i.postimg.cc/D0Vxhm6p/ahorcado.png" alt= "img" />
                        </div>
                        <div class="text">
                            <div class="title">
                                <h1>Hanged game</h1>
                            </div>
                            <p>HTML || JAVASCRIPT || CSS</p>
                            <div class="links">
                                <a href=""><i class='bx bxl-github'></i></a>
                            </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="items">
                        <div class="items-container" data-animation="show">
                          <div class="img">
                              <img src="https://i.postimg.cc/jSqZtp6T/bliss.png" alt= "img" />
                          </div>
                          <div class="text">
                              <div class="title">
                                  <h1>BLISS</h1>
                              </div>
                              <p>Fue una pagina para una app de un proyecto escolar se utilizo HTML || CSS || JAVASCRIPT || FIREBASE</p>
                              <div class="links">
                                  <a href="https://github.com/rufilio/PageWithFirebase"><i class='bx bxl-github'></i></a>
                              </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="items">
                        <div class="items-container" data-animation="show">
                          <div class="img">
                              <img src="https://i.postimg.cc/Y0qhhzdv/slider.png" alt= img" />
                          </div>
                          <div class="text">
                              <div class="title">
                                  <h1>Slider With React</h1>
                              </div>
                              <p>React</p>
                              <div class="links">
                                  <a href="#"><i class='bx bxl-github'></i></a>
                              </div>
                          </div>
                        </div>
                      </div>
                    
                      <div class="items">
                        <div class="items-container" data-animation="show">
                          <div class="img">
                              <img src="https://i.postimg.cc/52wbWFmT/notice.png" alt= "img" />
                          </div>
                          <div class="text">
                              <div class="title">
                                  <h1>Notice Center</h1>
                              </div>
                              <p>Pensado para repasar las noticias semanales sobre la politica de la nacion</p>
                              <div class="links">
                                  <a href="#"><i class='bx bxl-github'></i></a>
                              </div>
                          </div>
                        </div>
                      </div>
                    
                      
                </div>
`;


document.getElementById('proyects').innerHTML += Proyects;







// Seleccionar todos los elementos con clase 'items'
const items = document.querySelectorAll('.items');

// Definir la función para la animación al intersectar
function triggerAnimation(entries) {
    entries.forEach(entry => {
        const itemsContainer = entry.target.querySelector('.items-container');

        // Verificar si el elemento está intersectando con el viewport
        if (entry.isIntersecting) {
            itemsContainer.classList.add('unset');
        } else {
            itemsContainer.classList.remove('unset');
        }
    });
}

// Opciones para el IntersectionObserver
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Cambiado a 0.5 para detectar cuando el 50% del elemento está visible
};

// Crear el IntersectionObserver y observar cada elemento 'items'
const observer = new IntersectionObserver(triggerAnimation, options);

items.forEach(item => {
    observer.observe(item);
});









const skills = `
  <div class="tile">
                    <h1>Skills</h1>
                </div>
                <div class="skills-container">
                    <div class="cont-princ-slider">
                        <div class="slier-prin">
                          <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-html5'></i></a>
                          </div>
                          <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-css3' ></i></a>
                          </div>
                          <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-javascript' ></i></a>
                          </div>
                          <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-react' ></i></a>
                          </div>
                          <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-firebase' ></i></a>
                          </div>
                          <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-php' ></i></a>
                          </div>
                          <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-git'></i></a>
                          </div>
                           <div class="juegos_DWG">
                            <a href=""><i class='bx bxl-nodejs'></i></a>
                          </div>
                        </div>
                      </div>
                </div>
`;

document.getElementById('skills').innerHTML += skills

let slider = document.querySelector(".slier-prin");
slider.innerHTML += slider.innerHTML;






// Function to change the hash value of the page and reload
function changeLanguage(lang) {
  location.hash = lang;
  updateContent(lang);
}

// Function to update the content based on the hash value
function updateContent(lang) {
  if (lang === "es") {
    hola.textContent = language.es.saludo;
    siteContent.textContent = language.es.welcome;
    cvitae.textContent = language.es.cv;
    proyectos.textContent = language.es.proyectos;
  } else {
    hola.textContent = language.eng.saludo;
    siteContent.textContent = language.eng.welcome;
    cvitae.textContent = language.eng.cv;
    proyectos.textContent = language.eng.proyectos;
  }
}

// Define the language object
let language = {
  eng: {
    saludo:"Hello, I'm Alex",
    welcome: "Programmer and Web Developer passionate about design.",
    cv: "Download CV",
    proyectos: "Proyects"
  },
  es: {
    saludo: "Hola, Soy Alex",
    welcome: "Programador y Desarrollador Web apasionado por el diseño.",
    cv: "Descargar CV",
    proyectos: "Proyectos"
  }
};

// Check if a hash value exists in the URL on page load
window.onload = function() {
  if (window.location.hash) {
    let lang = window.location.hash.slice(1); // Remove the '#' from hash
    updateContent(lang);
  }
};