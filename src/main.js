import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DinoService } from './../src/dino-service.js';

$(document).ready(function() {

  $('#getDinos').click(function() {
    const input1 = $('#paragraphs').val();
    $('#paragraphs').val("");
    const input2 = $('#words').val();
    $('#words').val("");

    (async () => {
      let dinoService = new DinoService();
      const response = await dinoService.getDinoIpsum(input1, input2);
      getElements(response);
      console.log(response);
    })();

    function getElements(response) {
      $('.showDinos').text(`${response}`);
    }

  });
});