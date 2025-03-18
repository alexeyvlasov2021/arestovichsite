const ham_btn = document.querySelector('div#ham')
const nav_bar = document.querySelector("nav")


ham_btn.addEventListener('click', () =>{
    if(nav_bar.style.display == ''){
        nav_bar.style.display = 'flex'
    }
    else{
        nav_bar.style.display = ''
    }
})



// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1250px)", () => {
        gsap.to('.main_foto', {
            height: 0,
            // scrollTrigger: 'main_foto',
            // duration: 1,
            scrollTrigger: {
                trigger: 'p#text',
                start: 'top 60%',
                end: 'top 20%',
                //animation plays only when cursor moving
                //animation is played back if user moves back
                scrub: 2,
                // markers: true,
                // markers: {
                //     startColor: 'blue',
                //     endColor: 'black',
                //     fontSize: '2em',
                // },
                //we can also pause animation
                // toggleActions: 'restart none none none',
            }
        })

        gsap.to('.logo', {
            // height: 0,
            transform: 'translateY(-500px)',
            // y: -500,
            // scrollTrigger: 'main_foto',
            // duration: 1,
            scrollTrigger: {
                trigger: 'p#text',
                start: 'top 60%',
                end: 'top 20%',
                //animation plays only when cursor moving
                //animation is played back if user moves back
                scrub: 2,
                // markers: true,
                // markers: {
                //     startColor: 'blue',
                //     endColor: 'black',
                //     fontSize: '2em',
                // },
                //we can also pause animation
                // toggleActions: 'restart none none none',
            }
        })

        gsap.to('nav', {
            backgroundColor: 'hsla(213 8% 20% / 0.90)',
            // height: 0,
            // scrollTrigger: 'main_foto',
            // duration: 6,
            scrollTrigger: {
                trigger: 'p#text',
                start: 'top 60%',
                end: 'top 30%',
                //animation plays only when cursor moving
                //animation is played back if user moves back
                scrub: 2,
                // markers: true,
                // markers: {
                //     startColor: 'blue',
                //     endColor: 'black',
                //     fontSize: '2em',
                // },
                //we can also pause animation
                // toggleActions: 'restart none none none',
            }
        })

        gsap.to('div#frontline', {
            opacity: 1,
            transform: 'scale(1)',
            scrollTrigger: {
                trigger: 'a#read_more',
                start: 'top 50%',
                end: 'top 30%',
                scrub: 3,
                // markers: true,
            }
        })


        gsap.to('footer p', {
            opacity: 1,
            transform: 'translateY(0)',
            // duration: 2,
            scrollTrigger: {
                trigger: 'footer',
                end: 'top 70%',
                scrub: 3,
                // markers: true,
            }
        })

        // gsap.to('footer a', {
        //     opacity: 1,
        //     transform: 'translateY(0)',
        //     duration: 2,
        //     delay: 1,
        //     // scrollTrigger: {
        //     //     trigger: 'footer',
        //     //     end: 'top 70%',
        //     //     scrub: 3,
        //     // }
        // })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'footer',
                end: 'top 70%',
                // once: true, // Анимация запускается только один раз
                toggleActions: 'play none none reset', // Позволяет повторять анимацию при повторном скролле

            }
        });

        tl.to('footer a', { opacity: 0, transform: 'translateY(200px)' }) // начальное состояние
            .to('footer a', { opacity: 1, transform: 'translateY(0)', duration: 1 }, '+=0.5'); // задержка в 0.5 сек перед началом

    })

});  