const botonMenu = document.getElementById("menu-btn");
const enlacesNavegacion = document.getElementById("nav-links");
const iconoBotonMenu = botonMenu.querySelector("i");

botonMenu.addEventListener("click", (e) => {
    enlacesNavegacion.classList.toggle("abierto");

    const estaAbierto = enlacesNavegacion.classList.contains("abierto");
    iconoBotonMenu.setAttribute("class", estaAbierto ? "ri-close-line" : "ri-menu-line");
});

enlacesNavegacion.addEventListener("click", () => {
    enlacesNavegacion.classList.remove("open");
    iconoBotonMenu.setAttribute("class", "ri-menu-line");
});

const opcionesRevelarScroll = {
    distancia: "50px",
    origen: "bottom",
    duracion: 1000,
};

ScrollReveal().reveal(".about_container .section_header", {
    ...opcionesRevelarScroll,
});
ScrollReveal().reveal(".about_container .section_description", {
    ...opcionesRevelarScroll,
    delay: 500,
    interval: 500,
});
ScrollReveal().reveal(".about_container img", {
    ...opcionesRevelarScroll,
    delay: 1500,
});

ScrollReveal().reveal(".service_container .section_header", {
    ...opcionesRevelarScroll,
});
ScrollReveal().reveal(".service_container .section_description", {
    ...opcionesRevelarScroll,
    delay: 500,
});
ScrollReveal().reveal(".service_card", {
    duracion: 1000,
    delay: 1000,
    interval: 500,
});

const deslizable = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

ScrollReveal().reveal(".blog_content .section_header", {
    ...opcionesRevelarScroll,
});
ScrollReveal().reveal(".blog_content h4", {
    ...opcionesRevelarScroll,
    delay: 500,
});
ScrollReveal().reveal(".blog_content p", {
    ...opcionesRevelarScroll,
    delay: 1000,
});
ScrollReveal().reveal(".blog_content .blog_btn", {
    ...opcionesRevelarScroll,
    delay: 1500,
});

const instagram = document.querySelector(".instagram_flex");

Array.from(instagram.children).forEach((item) => {
    const nodoDuplicado = item.cloneNode(true);
    nodoDuplicado.setAttribute("aria-hidden", true);
    instagram.appendChild(nodoDuplicado);
});

window.addEventListener("scroll", function () {
    const barraPiePagina = document.querySelector(".footer_bar");

    // Calcula si el usuario está al final de la página
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        barraPiePagina.classList.add("visible");
    } else {
        barraPiePagina.classList.remove("visible");
    }
});