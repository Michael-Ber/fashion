export const headerInput = () => {
    try {
        const searchButton = document.querySelector('.js-search');
        const searchInput = document.querySelector('.js-search-wrapper');
        const closeInput = searchInput.querySelector('.header__search-close');
        const body = document.querySelector('body');

        searchButton.addEventListener('click', () => {
            removeTwitching()
            searchInput.classList.toggle('js-search-wrapper_active');
            if(searchInput.classList.contains('js-search-wrapper_active')) {
                body.style.overflow = 'hidden';
                body.style.marginRight = removeTwitching() + 'px';
            }else {
                body.style.overflow = 'auto';
                body.style.marginRight = 0;
            }
        })

        closeInput.addEventListener('click', () => {
            searchInput.classList.remove('js-search-wrapper_active');
            body.style.overflow = 'auto';
            body.style.marginRight = 0;
        })

        function removeTwitching() {
            let div = document.createElement('div');
            div.style.visibility = 'none';
            div.style.opacity = '0';
            div.style.width = '50px;';
            div.style.height = '50px;';
            div.style.overflow = 'scroll';
            body.appendChild(div);
            let offset = div.offsetWidth - div.clientWidth;
            div.remove();
            return offset;
        }

    } catch (error) {
        console.log(error)
    }
}