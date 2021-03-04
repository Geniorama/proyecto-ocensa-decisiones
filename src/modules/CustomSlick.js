export const buttonDisabled = () => {
    const button_left_disabled = document.querySelectorAll('.slick-oc__style-2 .nav-left.slick-disabled');
    const button_right = document.querySelectorAll('.slick-oc__style-2 .nav-right');

    const buttons = document.querySelectorAll('.slick-oc__style-2 .nav-arrow')

    for(let button of button_left_disabled){
        let button_img = button.querySelector('img')
        button_img.setAttribute('src', 'img/arrow-2-left-inactive.svg')
    }

    for(let btn of buttons){
        btn.addEventListener('click', function(){
            for(let btn_left of button_left_disabled){
                if(btn_left.classList.contains('slick-disabled')){
                    let button_img = btn_left.querySelector('img')
                    button_img.setAttribute('src', 'img/arrow-2-left-inactive.svg')
                    return false
                } else {
                    let button_img = btn_left.querySelector('img')
                    button_img.setAttribute('src', 'img/arrow-2-left.svg')
                }
            }

            for(let btn_right of button_right){
                if(btn_right.classList.contains('slick-disabled')){
                    let button_img = btn_right.querySelector('img')
                    button_img.setAttribute('src', 'img/arrow-2-right-inactive.svg')
                    return false
                } else {
                    let button_img = btn_right.querySelector('img')
                    button_img.setAttribute('src', 'img/arrow-2-right.svg')
                }
            }
            
        })
    }
}