var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // *** responsive swiper break points
    breakpoints: {
        600 : {
            slidesPerView: 2,
        },
        1024 : {
            slidesPerView: 3,
        }
    } 
  });

    // *** IMPORT ELEMENT FOR CHANGE STYLE ON SCROLL
    let navBar = document.querySelector('.wapperNavBar');
    let logo = document.getElementById('logo');
    let a = document.querySelectorAll('.wapperNavBar ul li a');
    let all_a = Array.from(a);
    
    onscroll = () => {
        if(scrollY => 35){
            navBar.style.background = '#fff';
            logo.style.color = '#000';
            all_a.forEach(a => {
                a.style.color = '#000';
            });

        } if(scrollY < 35){
            navBar.style.cssText = 'background: linear-gradient(to right, #480ca8, #4cc9f0);';
            logo.style.color = '#ffffff';
            all_a.forEach(a => {
                a.style.color = '#ffffff';
            });
        }
    };
