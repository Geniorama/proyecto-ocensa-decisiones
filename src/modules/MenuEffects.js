export const menuToggle = () => {
    let button_toggle = document.getElementById('btn-menu-lateral')
    let menu_lateral = document.getElementById('menu-lateral')
    let title_button = document.getElementById('title-button-menu')
    let icon_toggle = button_toggle.querySelector('.oc-header__button-menu-lateral')

    let open_menu = false; 
    button_toggle.addEventListener('click', function(e){
        e.preventDefault();

        if (!open_menu) {
            menu_lateral.classList.add('menu-active');
            title_button.innerText = "Ocultar";
            icon_toggle.style.backgroundPosition = "-34px"
            open_menu = true;
        } else {
            menu_lateral.classList.remove('menu-active');
            title_button.innerText = "Menú";
            icon_toggle.style.backgroundPosition = "3px"
            open_menu = false;
        }
    })
    
}

