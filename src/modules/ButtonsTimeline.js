const buttonsCalendar = () => {
    const items_buttons = document.querySelectorAll('.oc-time__info .nav-item')

    for(let item of items_buttons){
        let item_img = item.querySelector('img') 
        
        item.addEventListener('click', function(e){
            e.preventDefault()
            let img_inactive = item_img.getAttribute('src')
            let img_active = item_img.dataset.active

            for(let item_inactive of items_buttons){
                let src_item_inactive = item_inactive.querySelector('img').dataset.inactive
                item_inactive.querySelector('img').setAttribute('src', src_item_inactive)
            }

            item_img.setAttribute('src', img_active)
        })
    }
}

export default buttonsCalendar