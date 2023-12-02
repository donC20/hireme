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
