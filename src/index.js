import $ from 'jquery';
import './style.scss';

let sec = 1;
setInterval(() => {
  sec += 1;
  $('#main').html(`You've been on this page for ${sec} seconds`);
}, 1000);
