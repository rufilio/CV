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
    <div class="selected-language">
        <button class="lan" onclick="changeLanguage('eng')">
            <div class="sign"><svg viewBox="0 -4 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_503_3486)"> <rect width="28" height="20" rx="2" fill="white"></rect> <mask id="mask0_503_3486" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"> <rect width="28" height="20" rx="2" fill="white"></rect> </mask> <g mask="url(#mask0_503_3486)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z" fill="#D02F44"></path> <rect width="12" height="9.33333" fill="#46467F"></rect> <g filter="url(#filter0_d_503_3486)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66665 1.99999C2.66665 2.36818 2.36817 2.66666 1.99998 2.66666C1.63179 2.66666 1.33331 2.36818 1.33331 1.99999C1.33331 1.63181 1.63179 1.33333 1.99998 1.33333C2.36817 1.33333 2.66665 1.63181 2.66665 1.99999ZM5.33331 1.99999C5.33331 2.36818 5.03484 2.66666 4.66665 2.66666C4.29846 2.66666 3.99998 2.36818 3.99998 1.99999C3.99998 1.63181 4.29846 1.33333 4.66665 1.33333C5.03484 1.33333 5.33331 1.63181 5.33331 1.99999ZM7.33331 2.66666C7.7015 2.66666 7.99998 2.36818 7.99998 1.99999C7.99998 1.63181 7.7015 1.33333 7.33331 1.33333C6.96512 1.33333 6.66665 1.63181 6.66665 1.99999C6.66665 2.36818 6.96512 2.66666 7.33331 2.66666ZM10.6666 1.99999C10.6666 2.36818 10.3682 2.66666 9.99998 2.66666C9.63179 2.66666 9.33331 2.36818 9.33331 1.99999C9.33331 1.63181 9.63179 1.33333 9.99998 1.33333C10.3682 1.33333 10.6666 1.63181 10.6666 1.99999ZM3.33331 3.99999C3.7015 3.99999 3.99998 3.70152 3.99998 3.33333C3.99998 2.96514 3.7015 2.66666 3.33331 2.66666C2.96512 2.66666 2.66665 2.96514 2.66665 3.33333C2.66665 3.70152 2.96512 3.99999 3.33331 3.99999ZM6.66665 3.33333C6.66665 3.70152 6.36817 3.99999 5.99998 3.99999C5.63179 3.99999 5.33331 3.70152 5.33331 3.33333C5.33331 2.96514 5.63179 2.66666 5.99998 2.66666C6.36817 2.66666 6.66665 2.96514 6.66665 3.33333ZM8.66665 3.99999C9.03484 3.99999 9.33331 3.70152 9.33331 3.33333C9.33331 2.96514 9.03484 2.66666 8.66665 2.66666C8.29846 2.66666 7.99998 2.96514 7.99998 3.33333C7.99998 3.70152 8.29846 3.99999 8.66665 3.99999ZM10.6666 4.66666C10.6666 5.03485 10.3682 5.33333 9.99998 5.33333C9.63179 5.33333 9.33331 5.03485 9.33331 4.66666C9.33331 4.29847 9.63179 3.99999 9.99998 3.99999C10.3682 3.99999 10.6666 4.29847 10.6666 4.66666ZM7.33331 5.33333C7.7015 5.33333 7.99998 5.03485 7.99998 4.66666C7.99998 4.29847 7.7015 3.99999 7.33331 3.99999C6.96512 3.99999 6.66665 4.29847 6.66665 4.66666C6.66665 5.03485 6.96512 5.33333 7.33331 5.33333ZM5.33331 4.66666C5.33331 5.03485 5.03484 5.33333 4.66665 5.33333C4.29846 5.33333 3.99998 5.03485 3.99998 4.66666C3.99998 4.29847 4.29846 3.99999 4.66665 3.99999C5.03484 3.99999 5.33331 4.29847 5.33331 4.66666ZM1.99998 5.33333C2.36817 5.33333 2.66665 5.03485 2.66665 4.66666C2.66665 4.29847 2.36817 3.99999 1.99998 3.99999C1.63179 3.99999 1.33331 4.29847 1.33331 4.66666C1.33331 5.03485 1.63179 5.33333 1.99998 5.33333ZM3.99998 5.99999C3.99998 6.36819 3.7015 6.66666 3.33331 6.66666C2.96512 6.66666 2.66665 6.36819 2.66665 5.99999C2.66665 5.6318 2.96512 5.33333 3.33331 5.33333C3.7015 5.33333 3.99998 5.6318 3.99998 5.99999ZM5.99998 6.66666C6.36817 6.66666 6.66665 6.36819 6.66665 5.99999C6.66665 5.6318 6.36817 5.33333 5.99998 5.33333C5.63179 5.33333 5.33331 5.6318 5.33331 5.99999C5.33331 6.36819 5.63179 6.66666 5.99998 6.66666ZM9.33331 5.99999C9.33331 6.36819 9.03484 6.66666 8.66665 6.66666C8.29846 6.66666 7.99998 6.36819 7.99998 5.99999C7.99998 5.6318 8.29846 5.33333 8.66665 5.33333C9.03484 5.33333 9.33331 5.6318 9.33331 5.99999ZM9.99998 8C10.3682 8 10.6666 7.70152 10.6666 7.33333C10.6666 6.96514 10.3682 6.66666 9.99998 6.66666C9.63179 6.66666 9.33331 6.96514 9.33331 7.33333C9.33331 7.70152 9.63179 8 9.99998 8ZM7.99998 7.33333C7.99998 7.70152 7.7015 8 7.33331 8C6.96512 8 6.66665 7.70152 6.66665 7.33333C6.66665 6.96514 6.96512 6.66666 7.33331 6.66666C7.7015 6.66666 7.99998 6.96514 7.99998 7.33333ZM4.66665 8C5.03484 8 5.33331 7.70152 5.33331 7.33333C5.33331 6.96514 5.03484 6.66666 4.66665 6.66666C4.29846 6.66666 3.99998 6.96514 3.99998 7.33333C3.99998 7.70152 4.29846 8 4.66665 8ZM2.66665 7.33333C2.66665 7.70152 2.36817 8 1.99998 8C1.63179 8 1.33331 7.70152 1.33331 7.33333C1.33331 6.96514 1.63179 6.66666 1.99998 6.66666C2.36817 6.66666 2.66665 6.96514 2.66665 7.33333Z" fill="url(#paint0_linear_503_3486)"></path> </g> </g> </g> <defs> <filter id="filter0_d_503_3486" x="1.33331" y="1.33333" width="9.33331" height="7.66667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="1"></feOffset> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_503_3486"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_503_3486" result="shape"></feBlend> </filter> <linearGradient id="paint0_linear_503_3486" x1="1.33331" y1="1.33333" x2="1.33331" y2="7.99999" gradientUnits="userSpaceOnUse"> <stop stop-color="white"></stop> <stop offset="1" stop-color="#F0F0F0"></stop> </linearGradient> <clipPath id="clip0_503_3486"> <rect width="28" height="20" rx="2" fill="white"></rect> </clipPath> </defs> </g></svg></div>    
        </button>
        <button class="lan" onclick="changeLanguage('es')" >
           <div class="sign"><svg width="95px" height="95px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#C60A1D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FFC400" d="M0 12h36v12H0z"></path><path fill="#EA596E" d="M9 17v3a3 3 0 1 0 6 0v-3H9z"></path><path fill="#F4A2B2" d="M12 16h3v3h-3z"></path><path fill="#DD2E44" d="M9 16h3v3H9z"></path><ellipse fill="#EA596E" cx="12" cy="14.5" rx="3" ry="1.5"></ellipse><ellipse fill="#FFAC33" cx="12" cy="13.75" rx="3" ry=".75"></ellipse><path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z"></path><path fill="#66757F" d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"></path></g></svg></div>
        </button>   
    </div>
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
                                <a href="https://rufilio.github.io/Hanged-Game/"><i class='bx bx-right-top-arrow-circle'></i></a>
                                <a href="https://github.com/rufilio/Hanged-Game"><i class='bx bxl-github'></i></a>
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
                                  <a href="https://rufilio.github.io/Blog-With-Firebase/"><i class='bx bx-right-top-arrow-circle'></i></a>
                                  <a href="https://github.com/rufilio/Blog-With-Firebase"><i class='bx bxl-github'></i></a>
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
                                  <a href=""><i class='bx bx-right-top-arrow-circle'></i></a>
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
                                  <a href="https://rufilio.github.io/Website/"><i class='bx bx-right-top-arrow-circle'></i></a>
                                  <a href="https://github.com/rufilio/Website"><i class='bx bxl-github'></i></a>
                              </div>
                          </div>
                        </div>
                      </div>
                    
                       <div class="items">
                        <div class="items-container" data-animation="show">
                          <div class="img">
                              <img src="https://i.postimg.cc/90xcBh3j/pageQr.png" alt= "img" />
                          </div>
                          <div class="text">
                              <div class="title">
                                  <h1>QrGenerator</h1>
                              </div>
                              <p> HTML || CSS || JAVASCRIPT </p>
                              <div class="links">
                                  <a href="https://rufilio.github.io/QR-Generator-With-QRCode/"><i class='bx bx-right-top-arrow-circle'></i></a>
                                  <a href="https://github.com/rufilio/QR-Generator-With-QRCode"><i class='bx bxl-github'></i></a>
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
    txt_about.textContent = language.es.txt_about;
  } else {
    hola.textContent = language.eng.saludo;
    siteContent.textContent = language.eng.welcome;
    cvitae.textContent = language.eng.cv;
    proyectos.textContent = language.eng.proyectos;
    txt_about.textContent = language.eng.txt_about;
  }
}


let txt_about = document.getElementById('txt_about');

// Define the language object
let language = {
  eng: {
    saludo:"Hello, I'm Alex",
    welcome: "Programmer and Web Developer passionate about design.",
    cv: "Download CV",
    proyectos: "Proyects",
    txt_about: "Front-End Developer, currently residing in the Dominican Republic, looking for a space in this industry, with little backend experience handling Firebase, MySQL and soon Python."
   
  },
  es: {
    saludo: "Hola, Soy Alex",
    welcome: "Programador y Desarrollador Web apasionado por el diseño.",
    cv: "Descargar CV",
    proyectos: "Proyectos",
     txt_about: "Desarrollador Front-End, actualmente residente en República Dominicana, busca un espacio en esta industria, con poca experiencia en backend manejando Firebase, MySQL y próximamente Python."
  }
};

// Check if a hash value exists in the URL on page load
window.onload = function() {
  if (window.location.hash) {
    let lang = window.location.hash.slice(1); // Remove the '#' from hash
    updateContent(lang);
  }
};