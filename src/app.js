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
import "./img/left-arrow.svg"
import "./img/right-arrow.svg"
import "./img/icon-back-to-top.svg"
import "./img/icon-back-to-top-hover.svg"
import "./img/icon-arrow-down.svg"
import "./img/icon-arrow-down-hover.svg"



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
 
 