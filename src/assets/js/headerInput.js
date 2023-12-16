export const headerInput = () => {
    try {
        const searchButton = document.querySelector('.js-search');
        const searchInput = document.querySelector('.js-search-wrapper');
        const closeInput = searchInput.querySelector('.header__search-close');
        const body = document.querySelector('body');

        searchButton.addEventListener('click', () => {
            searchInput.classList.toggle('js-search-wrapper_active');
            if(searchInput.classList.contains('js-search-wrapper_active')) {
                body.style.backgroundColor = 'rgba(34, 34, 34, 0.3)';
            }else {
                body.style.backgroundColor = 'unset';
            }
        })

        closeInput.addEventListener('click', () => {
            searchInput.classList.remove('js-search-wrapper_active');
            body.style.backgroundColor = 'unset';
        })

    } catch (error) {
        console.log(error)
    }
}