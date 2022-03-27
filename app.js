window.addEventListener('load', loader);

function loader() {
    const paragraph = document.querySelectorAll('p');
    let PLLOADER = gsap.timeline(
        {
            repeat: -1
        }
    )
    
    PLLOADER
    .from(paragraph, {autoAlpha: 0,y: 100, stagger: .8, duration: .8})
    .to(paragraph, {y:-100, autoAlpha: 0,stagger: .8, duration: .8}, 0.75)

}