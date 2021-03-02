// Libs
import $ from "jquery";
import 'bootstrap';
import AOS from 'aos';
import "./../node_modules/slick-carousel";
import SmoothScroll from "smooth-scroll";

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

import ArrayLeft from "./img/left-arrow-1.svg";
import ArrayRight from "./img/right-arrow-1.svg";


$(function(){
    $('.slick-oc').slick({
        prevArrow: `<button class='nav-arrow nav-left'><img src=${ArrayLeft}></button>`,
        nextArrow: `<button class='nav-arrow nav-right'><img src=${ArrayRight}></button>`
    });
});