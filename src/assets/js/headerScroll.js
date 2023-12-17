export const headerScroll = () => {
    try {
        const headerTop = document.querySelector('.js-header-top');
        const headerBottom = document.querySelector('.js-header-bottom');
        const heroSection = document.querySelector('.js-hero');

        window.addEventListener('scroll', () => {
            if(window.scrollY >= 100) {
                headerTop.style.display = 'none';
                headerBottom.style.position = 'fixed';
                headerBottom.style.top = '0';
                headerBottom.style.left = '0';
                headerBottom.style.right = '0';
                heroSection.style.marginTop = `${headerBottom.offsetHeight}px`;
            }else if(window.scrollY < 10){
                headerTop.style.display = 'flex'
                headerBottom.style.position = 'relative';
                headerBottom.style.top = 'unset';
                headerBottom.style.left = 'unset';
                headerBottom.style.right = 'unset';
                heroSection.style.marginTop = `0`;
            }
        })
    } catch (error) {
        console.log(error)
    }
}