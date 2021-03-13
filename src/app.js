// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';
import SmoothScroll from "smooth-scroll";

//Modules
import {menuToggle, itemActive, desplaceMenu} from "./modules/MenuEffects.js";

// Fonts
import "./fonts/Cabin-Regular.ttf";
import "./fonts/Cabin-Bold.ttf";
import "./fonts/Cabin-SemiBold.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-BoldItalic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-MediumItalic.ttf";
import "./fonts/Roboto-Regular.ttf";


// Styles
import "./styles/app.sass";

// Images
import "./img/left-arrow.svg";
import "./img/right-arrow.svg";
import "./img/icon-back-to-top.svg";
import "./img/icon-back-to-top-hover.svg";
import "./img/icon-arrow-down.svg";
import "./img/icon-arrow-down-hover.svg";
import "./img/imag_ocensa_1_gobierno_corporativo_instrumento_toma_decisiones_mesa.svg";
import "./img/logo-ocensa-home.svg";
import "./img/imag_ocensa_2_gobierno_corporativo_instrumento_toma_decisiones_mesa.svg";
import "./img/flecha-blanca.svg";
import "./img/icon_ocensa_gobierno_corporativo__estatutos.svg";
import "./img/icon_ocensa_gobierno_corporativo__codigo_buen_gobierno.svg";
import "./img/icon_ocensa_gobierno_corporativo__modelo_organizacional.svg";
import "./img/imag_ocensa_3_gobierno_corporativo_estatutos_mesa.svg";
import "./img/boton_ocensa_gobierno_corporativo_descargar_verde_boton_descargar_inactivo.svg";
import "./img/imag_ocensa_4_gobierno_corporativo_codigo_buen_gobierno_mesa.svg";
import "./img/imag_ocensa_5_gobierno_corporativo_modelo_organizacional_mesa.svg";
import "./img/icon_ok.svg";
import "./img/imag_ocensa_8_gobierno_corporativo_ocensa.svg";
import "./img/icon_ocensa_gobierno_corporativo__instancias_organizacionales.svg";
import "./img/icon_ocensa_gobierno_corporativo__instancias_de_ley.svg";
import "./img/imag_ocensa_6_gobierno_corporativo_matriz_delegacion_autoridad_mesa.svg";
import "./img/icon_ocensa_gobierno_corporativo__matriz_de_delegacion.svg";

/*===============FUNCTIONS===============*/

AOS.init();
itemActive();
desplaceMenu();

var scroll = new SmoothScroll('a[href*="#"]');


// For use jQuery
$(function() {
    // Hover effect back to top
    $('.oc-back-to-top').mouseenter(function() {
        $('.oc-back-to-top img').attr('src', 'img/icon-back-to-top-hover.svg')
    })

    $('.oc-back-to-top').mouseleave(function() {
        $('.oc-back-to-top img').attr('src', 'img/icon-back-to-top.svg')
    })

    // Hover effect button down
    $('.oc-button-down').mouseenter(function() {
        $('.oc-button-down img').attr('src', 'img/icon-arrow-down-hover.svg')
    })

    $('.oc-button-down').mouseleave(function() {
        $('.oc-button-down img').attr('src', 'img/icon-arrow-down.svg')
    })
});
 
 