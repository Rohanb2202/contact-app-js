import React, { useState, useEffect } from 'react';

const NavbarComponent = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollPos = window.pageYOffset;

    //         if (currentScrollPos > prevScrollPos) {
    //             // Scrolling down
    //             setIsSticky(true);
    //         } else {
    //             // Scrolling up or at the top
    //             setIsSticky(currentScrollPos > stickyOffset());
    //         }

    //         // Update previous scroll position
    //         setPrevScrollPos(currentScrollPos);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [prevScrollPos]);

    // const stickyOffset = () => {
    //     const navbar = document.getElementById('navbar');
    //     return navbar.offsetTop;
    // };

    return (
        <>
            <div className="header">
                <h3 className='fsize_35 text_black_cow'> CONTACT TRACING HUB </h3>
            </div>

            <div id="navbar" className={isSticky ? "sticky" : ""}>
                <p className='fsize_15 fweight_bold lspace_2 text_french_pass'>Documented contacts, orchestrating registry's interface.</p>
            </div>

        </>
    );
};

export default NavbarComponent;