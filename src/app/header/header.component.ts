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
        if ($("#menu").offset().top > 1150) {
            $(".cardEqu").addClass("animate__animated animate__zoomIn");
        }
        else
        {
          $(".cardEqu").removeClass("animate__animated animate__zoomIn");
        }
      });
      $(window).scroll(function() {
        if ($("#menu").offset().top > 2450) {
            $(".cardIns").addClass("animate__animated animate__zoomIn");
        }
        else
        {
          $(".cardIns").removeClass("animate__animated animate__zoomIn");
        }
      });
    })
  }

}
