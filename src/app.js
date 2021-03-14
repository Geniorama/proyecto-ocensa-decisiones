// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';
import SmoothScroll from "smooth-scroll";

//Modules
import {itemActive, desplaceMenu} from "./modules/MenuEffects.js";

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
import "./img/left-arrow.svg";
import "./img/right-arrow.svg";
import "./img/icon-back-to-top.svg";
import "./img/icon-back-to-top-hover.svg";
import "./img/icon-arrow-down.svg";
import "./img/icon-arrow-down-hover.svg";

import "./img/icon_ocensa_gobierno_corporativo__instancias_organizacionales.svg"
import "./img/icon_ocensa_gobierno_corporativo__instancias_organizacionales_header.svg"
import "./img/grafica_ocensa_gobierno_corporativo_instancias_organizacionales_escritorio@2x.png"
import "./img/oc-arrow-right-2.svg"
import "./img/oc-icon-more.svg"
import "./img/oc-icon-minus.svg"
import "./img/oc-icon-more-hover.svg"
import "./img/icon_ocensa_gobierno_corporativo__comite_ejecutivo.svg"
import "./img/icon_ocensa_gobierno_corporativo__comite_inversiones.svg"
import "./img/icon_ocensa_gobierno_corporativo__foro_alineacion_tactica.svg"
import "./img/icon_ocensa_gobierno_corporativo__comite_operaciones.svg"
import "./img/icon_ocensa_gobierno_corporativo__comite_gestion_financiera.svg"
import "./img/icon_ocensa_gobierno_corporativo__imte.svg"
import "./img/icon_ocensa_gobierno_corporativo__foro_operativo_hse.svg"
import "./img/icon_ocensa_gobierno_corporativo__foro_desempeño_financiero.svg"
import "./img/icon_ocensa_gobierno_corporativo__foro_interferencia_con_terceros.svg"
import "./img/icon_ocensa_gobierno_corporativo__comite_etica.svg"
import "./img/icon_ocensa_gobierno_corporativo__foro_tactico_hse.svg"
import "./img/icon_ocensa_gobierno_corporativo__comite_mro.svg"
import "./img/boton_ocensa_gobierno_corporativo_descargar_blanco_boton_descargar_inactivo.svg";



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

    // Hover effect button down
    $('.oc-tab-icon').mouseenter(function() {
        $(this).find('.oc-tab-icon__more').attr('src', 'img/oc-icon-more-hover.svg')
    })

    $('.oc-tab-icon').mouseleave(function() {
        $(this).find('.oc-tab-icon__more').attr('src', 'img/oc-icon-more.svg')
    })


    $('.collapse').on('shown.bs.collapse', function () {
        let idCol = $(this).attr('id')
        let iconHandle = $(".button-collapse[data-target='#"+idCol+"'] .oc-tab-icon img")
        let dateHandle = $(".button-collapse[data-target='#"+idCol+"'] .oc-tab-icon .oc-tab-icon__date")

        iconHandle.attr('src', 'img/oc-icon-minus.svg')
        iconHandle.attr('class', 'oc-tab-icon__minus')
        dateHandle.removeClass('d-none')
    })

    $('.collapse').on('hidden.bs.collapse', function () {
        let idCol = $(this).attr('id')
        let iconHandle = $(".button-collapse[data-target='#"+idCol+"'] .oc-tab-icon img")
        let dateHandle = $(".button-collapse[data-target='#"+idCol+"'] .oc-tab-icon .oc-tab-icon__date")

        iconHandle.attr('src', 'img/oc-icon-more.svg')
        iconHandle.attr('class', 'oc-tab-icon__more')
        dateHandle.addClass('d-none')
    })
});
 
 