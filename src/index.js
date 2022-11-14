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

import { navbar } from './modules/navbar';
import { menu } from './modules/menu';
import { service } from './modules/service';
import { validation } from './modules/validation';
import { sendData } from './modules/sendData';
import { render } from './modules/render';
import { deleteData } from './modules/deleteData';
import { editData } from './modules/editData';
import { saveName } from './modules/helpers';

navbar();
validation();
menu();
sendData();
deleteData();
editData();
saveName();
service.getData().then(data => render(data));
