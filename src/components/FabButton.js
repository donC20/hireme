import React from 'react'

const FabButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const fabButton = document.getElementById('scrollToTopBtn');

        if (fabButton) {
            if (scrollY > 100) {
                fabButton.style.display = 'flex';
            } else {
                fabButton.style.display = 'none';
            }
        }
    };
    return (<>
        <div className="fab" id="scrollToTopBtn" onClick={scrollToTop}>
            <i className="bi bi-arrow-up-short"></i>
        </div>
    </>);
}

export default FabButton