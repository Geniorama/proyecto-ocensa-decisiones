// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';
import "./../node_modules/slick-carousel";
import SmoothScroll from "smooth-scroll";

//Modules
import {menuToggle, itemActive} from "./modules/MenuEffects.js";

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
import ArrowLeft from "./img/left-arrow-1.svg";
import ArrowRight from "./img/right-arrow-1.svg";
import "./img/logo-ocensa.svg";
import "./img/icon_menu_buscador_1.svg";
import "./img/sprite-01-menu-blanco.svg";
import "./img/icon_footer_1_facebook.svg";
import "./img/icon_footer_2_instagram.svg";
import "./img/icon_footer_3_youtube.svg";
import "./img/icon_footer_4_twitter.svg";
import "./img/isotipo-ocensa.svg";
import "./img/icon_subir_azul.svg";
import "./img/icon-flecha-izq-blanca.svg";
import "./img/pictograma_ocensa_inversionistas_accionistas_inversionistas.svg";
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
import "./img/plus_1.svg";
import "./img/logo-ocensa.svg";
import "./img/imag_1.jpg";
import "./img/imag_2.jpg";
import "./img/imag_3.jpg";
import "./img/imag_4.jpg";
import "./img/05-icon_ocenza_con_potuaria_que_es_informacion_financiera_reportes.svg";
import "./img/06-icon_ocenza_con_potuaria_ani_informacion_financiera_reportes.svg";
import "./img/07-icon_ocenza_con_potuaria_ocensayani_informacion_financiera_reportes.svg";
import "./img/08-icon_ocenza_con_potuaria_que_es_comport_informacion_financiera_reportes copia.svg";
import "./img/09-icon_ocenza_con_potuaria_componente_ambiental_informacion_financiera_reportes.svg";
import "./img/10-icon_ocenza_con_potuaria_componente_los_requerimientos_informacion_financiera_reportes copia.svg";
import "./img/11-icon_ocenza_con_potuaria_componente_una_licencia_informacion_financiera_reportes copia.svg";
import "./img/12-icon_ocenza_con_potuaria_componente_el_cambio_informacion_financiera_reportes copia.svg";
import "./img/13-icon_ocenza_con_potuaria_componente_el_impacto_informacion_financiera_reportes copia.svg";
import "./img/14-icon_ocenza_con_potuaria_componente_aunque_reemplazo_informacion_financiera_reportes copia.svg";
import "./img/15-icon_ocenza_con_potuaria_componente_que_se_haria_informacion_financiera_reportes copia.svg";
import "./img/16-icon_ocenza_con_potuaria_componente_el_agua_informacion_financiera_reportes copia.svg";
import "./img/17-icon_ocenza_con_potuaria_componente_el_26_noviembre_informacion_financiera_reportes copia.svg";
import "./img/18-icon_ocenza_con_potuaria_componente_con_el_tendido_informacion_financiera_reportes copia.svg";
import "./img/19-icon_ocenza_con_potuaria_componente_en_la_planeacion_informacion_financiera_reportes copia.svg";
import "./img/20-icon_ocenza_con_potuaria_componente_por_cultura_informacion_financiera_reportes copia.svg";
import "./img/21-icon_ocenza_con_potuaria_componente_la_operacion_informacion_financiera_reportes copia.svg";
import "./img/22-icon_ocenza_con_potuaria_componente_si_un_eventual_informacion_financiera_reportes copia.svg";
import "./img/23-icon_ocenza_con_potuaria_componente_la_intervencion_informacion_financiera_reportes copia.svg";
import "./img/24-icon_ocenza_con_potuaria_componente_a_las_enbarcaciones_informacion_financiera_reportes copia.svg";
import "./img/25-icon_ocenza_con_potuaria_componente_al-final_ocensa_informacion_financiera_reportes copia.svg";

menuToggle();
itemActive();

// Jquery
$(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('#mast-header').addClass('sticky-header')
    } else {
      $('#mast-header').removeClass('sticky-header')
    }
  });

  $('.slick-oc').slick({
    prevArrow: `<button class='nav-arrow nav-left'><img src=${ArrowLeft}></button>`,
    nextArrow: `<button class='nav-arrow nav-right'><img src=${ArrowRight}></button>`
  });
});

