import LandingContainer from "../components/Landing";

export const EnableSmoothScroll = () => {
    let section = document.querySelectorAll('section');
    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            console.log(offset);
            console.log(offset);
            let height = sec.offsetHeight;

            if (top >= offset && top < offset + height) {
                sec.classList.add('show-animate');
            }
            // else {
            //     sec.classList.remove('show-animate');
            // }
        })
    }
}

// navbar title hider
// export const ToggleTitle = () => {
//     let landingContainer = document.getElementById('landing-container');
    
//     if (landingContainer.style.display === 'block' || landingContainer.style.display === '') {
//         landingContainer.style.display = 'none';
//     } else {
//         landingContainer.style.display = 'block';
//     }
// }


