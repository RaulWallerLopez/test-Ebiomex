import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      //animaciones de header
      $(window).scroll(function() {
        if ($("#menu").offset().top > 56) {
            $("#menu").addClass("bg-white");
            $('.logo').css('filter','invert(0%)');
            $('.nav-item a').addClass('text-dark');
            $('.nav-item a').removeClass('text-light');
            $('.navbar-toggler').addClass('bg-dark');
            $('.ic').addClass('text-dark');
            $('.ic').removeClass('text-light');
        } else {
            $("#menu").removeClass("bg-white");
            $('.logo').css('filter','invert(100%)');
            $('.nav-item a').addClass('text-light');
            $('.nav-item a').removeClass('text-dark');
            $('.navbar-toggler').removeClass('bg-dark');
            $('.ic').addClass('text-light');
            $('.ic').removeClass('text-dark');
        }
      });
      //disparo de animaciones
      $(window).scroll(function() {
        if ($("#menu").offset().top > 650) {
            $("#mision").removeClass("d-none");
            $("#mision").addClass("d-xl-inline-block");
            $("#vision").removeClass("d-none");
            $("#vision").addClass("d-xl-inline-block");
            $(".cardInf").addClass("animate__flipInY");
            $("#nosT").removeClass("d-none");
            $("#nosT").addClass("animate__fadeInDown");
        }
        else
        {

        }
      });
      $(window).scroll(function() {
        if ($("#menu").offset().top > 1100) {
          $("#allServ").addClass("animate__backInLeft");
          $("#allServ").removeClass("d-none");
          $("#carousel").removeClass("d-none");
          $("#servT").removeClass("d-none");
          $("#servT").addClass("d-flex");
          $("#servT").addClass("animate__fadeInDown");
        }
        else
        {

        }
      });
      $(window).scroll(function() {
        if ($("#menu").offset().top > 2000) {
          $("#disT").removeClass("d-none");
          $("#disT").addClass("animate__fadeInDown");
          $(".drug").removeClass("d-none");
          $(".desy").removeClass("d-none");
        }
        else
        {

        }
      });
    })
  }

}
