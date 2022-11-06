//1 just default swiper
// import Swiper from 'swiper'; // js without navigation, pagination
// import 'swiper/css'; // css without navigation, pagination

//2 swiper with navigation, pagination
// import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'; // js navigation, pagination
// import 'swiper/css';
// import 'swiper/css/navigation'; //css navigation
// import 'swiper/css/pagination'; //css pagination

//3 full swiper (Recommended. Cause support much more effects)
import Swiper from 'swiper/bundle'; // full js swiper styles
import 'swiper/css/bundle'; //full css swiper styles

const swiper = () => {
  const swiper = new Swiper('.swiper', {
    // modules: [Navigation, Pagination, Autoplay], // выключить при использовании 2 пункта
    loop: true,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 40,
    //   },
    // },

    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    // },
  });
};

export { swiper };
