
// loading window animation 

export const IsPageLoading = () => {
    let preloader = document.getElementById('preloader-Container');
    let html = document.getElementsByTagName('html')[0]; // Access the first element in the collection
    console.log('page loading...');
    document.addEventListener('DOMContentLoaded', function () {
        html.style.overflow = 'scroll';
        preloader.style.display = 'none';
        console.log('page loaded!');
    });
};


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


