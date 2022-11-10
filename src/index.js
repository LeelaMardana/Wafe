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

import { menu } from './modules/menu';
import { service } from './modules/service';
import { validation } from './modules/validation';
import { sendForm } from './modules/sendForm';
import { render } from './modules/render';
import { deleteData } from './modules/deleteData';

validation();
sendForm();
menu();
deleteData();
service.getData().then(data => render(data));
