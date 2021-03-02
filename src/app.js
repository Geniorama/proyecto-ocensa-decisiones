// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';
import "./../node_modules/slick-carousel";
import SmoothScroll from "smooth-scroll";

//Modules
import {menuToggle} from "./modules/MenuEffects.js";

// Fonts
import "./fonts/Cabin-Regular.ttf";
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-BoldItalic.ttf";
import "./fonts/Roboto-Light.ttf";
import "./fonts/Roboto-Medium.ttf";
import "./fonts/Roboto-MediumItalic.ttf";
import "./fonts/Roboto-Regular.ttf";

// Styles
import "./styles/app.sass";

// Images
import ArrowLeft from "./img/left-arrow.svg";
import ArrowRight from "./img/right-arrow.svg";
import "./img/logo-ocensa.svg";
import "./img/icon_menu_buscador_1.svg";
import "./img/sprite-01-menu-blanco.svg";
import "./img/icon_footer_1_facebook.svg";
import "./img/icon_footer_2_instagram.svg";
import "./img/icon_footer_3_youtube.svg";
import "./img/icon_footer_4_twitter.svg";
import "./img/isotipo-ocensa.svg";
import "./img/slider-home.jpg";
import "./img/retos-img.jpg";
import "./img/icon_ocenza_home_retos_que_nos_impulsan.svg"
import "./img/imag-3.jpg";
import "./img/imag-4.jpg";
import "./img/imag-5.jpg";
import "./img/imag-6.jpg";
import "./img/imag-7.jpg";
import "./img/imag-8.jpg";
import "./img/icon_ocenza_home_linea_de_tiempo.svg";
import "./img/icon_ocenza_home_componente_ambiental.svg";
import "./img/imag-10.jpg";


$(function(){
    $('.ts-slick').slick({
        prevArrow: `<button class='nav-left'><img src='${ArrowLeft}'></button>`,
        nextArrow: `<button class='nav-right'><img src='${ArrowRight}'></button>`
    });
})

menuToggle();

