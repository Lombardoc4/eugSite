
(() => {


    /**
     * Transform slideshow images accordingly
     *
     *  @param {HTMLCollection} images
     *  @param {Integer} index
     */
    const changeSlideshowView = (images, index) => {
        _.each(images, (el, i) => {
            // Make image visible
            if (i === index){
                el.classList.add('on');
            }
            // Animate slide
            el.style=`transform: translateX(-${100 * index}%); transition: transform 0.4s, opacity 0.8s`;
        })
    }


    /**
     * Navigate through slideshow
     *
     *  @param {HTMLElement} clicker
     */
    const slideshowClick = (clicker) => {

        // Slideshow to which click belongs
        const slideshow = clicker.parentElement.querySelector('.projectImages');

        // Get Current Index
        const currentImage = +slideshow.dataset.image;

        // Get Max Index
        const maxImage = slideshow.children.length - 1;

        // Temp Var
        let newIndex = 0;

        // If Left Clicker
        if (clicker.classList.contains('click-left')){
            // If left-most image
            if (currentImage === 0)
                newIndex = maxImage;
            else
                newIndex = currentImage - 1;
        }

        // If Right Clicker
        if (clicker.classList.contains('click-right')){
            // If right-most image
            if (currentImage >= maxImage)
                newIndex = 0;
            else
                newIndex = currentImage + 1;
        }

        // Set new data-image index
        slideshow.dataset.image = newIndex;

        // Modify CSS to animate slide
        slideshow.children[currentImage].classList.remove('on');
        changeSlideshowView(slideshow.children, newIndex);
    }


    /**
     * Toggle Accordian Tab Open/Closed
     *
     *  @param {HTMLElement} tab
     */
    const toggleHomeAccordian = (tab) => {
        if (tab.classList.contains('on'))
            tab.classList.remove('on');
        else
            tab.classList.add('on');
    }


    /**
     *  Menu open/close animation
     *
     *  @param {boolean} state
     */
    const menuTimeout = [];
    const showMenuButtons = (state) => {
        // Landing Nav Buttons
        const landingButtons = document.querySelectorAll('.mobile-menu-button a');

        // If true => open
        if (state) {
            _.each(landingButtons, (el, i) => {
                menuTimeout.push(setTimeout(() => {
                    if (!el.classList.contains('on'))
                    el.classList.add('on');
                }, 150 * i)
                );
            })

            // If false => close
        } else {
            _.emptyArray(menuTimeout);
            _.each(landingButtons, (el) => {
                if (el.classList.contains('on'))
                el.classList.remove('on');
            })
        }
    }

    /**
     *  Menu open/close animation
     *
     *  @param {boolean} state
     */
    const showMenu = (state) => {
        const menu = document.querySelector('.menu');
        const burger = document.querySelector('#mobile-menu-burger');
        if (menu.classList.contains('on') || state === false){
            showMenuButtons(false);
            menu.classList.remove('on');
            burger.classList.remove('on');
        }
        else{
            showMenuButtons(true);
            menu.classList.add('on');
            burger.classList.add('on');

        }
    }


    /**
     * Closes Any Open Sections
     *
     */
    const closePreviousSection = () => {
        // Find the on/open section
        const openSection = document.querySelector('section.on');

        // If exists remove the class
        if (openSection){
            openSection.classList.remove('on');
        }
    }


    /**
     * Show Section with matching hash
     *
     */
    const loadSection = () => {
        // Get window hash(#)
        // log(window.location);
        const hash = window.location.hash;
        // const e;
        closePreviousSection();

        // If the window has a hash, add the on class to section && toggle Menu OFF
        // Else return to landing page && toggle Menu ON
        if (hash) {

            document.querySelector(`section${hash}`).prepend(document.querySelector('#menuHeader'))
            document.querySelector(`section${hash}`).classList.add('on');
        }
        else {
            document.querySelector(`section${hash}`).prepend(document.querySelector('#menuHeader'))
            document.querySelector(`section#home`).classList.add('on');

            // showMenu();
        }
    }

    // If Hash Changes Load Proper Section
    window.addEventListener('hashchange', () => {loadSection()})

    // When Window loads content BEGIN
    window.onload = () => {
        // Load to Proper Section Immediately
        loadSection();

        if (window.innerWidth <= 480) {
            document.querySelector('#mobile-menu-burger').addEventListener('click', () => showMenu());

            // Registering Events for Multiple Elements
            _.each(document.querySelectorAll('.mobile-menu-button a'), (el) => {
                el.addEventListener('click', () => showMenu(false))
            });

        }


        document.querySelector('.menu').addEventListener('click', () => {showMenu(false)});

        _.each(document.querySelectorAll('#homeAccordian > .accordian-content > .accordian-tab'), (el) => {
            el.addEventListener('click', () => {toggleHomeAccordian(el)});
        });

        _.each(document.querySelectorAll('.projectSlide > .click-left'), function (el) {
            el.addEventListener('click', () => {slideshowClick(el)})
        })

        _.each(document.querySelectorAll('.projectSlide > .click-right'), function (el) {
            el.addEventListener('click', () => {slideshowClick( el)})
        })
    }


})();