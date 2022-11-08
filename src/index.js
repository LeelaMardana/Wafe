// Create HTML and CSS
import html from './index.html';
import scss from './index.scss';

// Fancybox plugin
import { Fancybox, Carousel, Panzoom } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox.css';

//Slider
import { swiper } from './modules/swiper';
swiper();

// Own scripts

import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';

validation();
sendForm();
