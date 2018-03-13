import { Component, OnInit } from '@angular/core';
// import $ = require("jquery");
import * as $ from "jquery"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  contacts=[
  	{
  		title: 'WhatsApp',
  		link: 'https://web.whatsapp.com/send?phone=919717130893&text=Hello',
  		icon: '<i class="fa fa-whatsapp" aria-hidden="true"></i>',
  	},
  	{
  		title: 'Facebook',
  		link: 'https://fb.com/vishalpandeyxyz',
  		icon: '<i class="fa fa-facebook" aria-hidden="true"></i>',
  	},
  	{
  		title: 'Call',
  		link: 'tel:+919717130893',
  		icon: '<i class="fa fa-phone" aria-hidden="true"></i>',
  	},
  	{
  		title: 'GitHub',
  		link: 'https://github.com/vishal-pandey',
  		icon: '<i class="fa fa-github" aria-hidden="true"></i>',
  	},
  	{
  		title: 'Instagram',
  		link: 'https://www.instagram.com/vishalpandeyxyz/',
  		icon: '<i class="fa fa-instagram" aria-hidden="true"></i>',
  	},
  	{
  		title: 'Twitter',
  		link: 'https://twitter.com/vishalpandeyxyz',
  		icon: '<i class="fa fa-twitter" aria-hidden="true"></i>',
  	},
  	{
  		title: 'LinkedIn',
  		link: 'https://www.linkedin.com/in/thevishalpandey/',
  		icon: '<i class="fa fa-linkedin" aria-hidden="true"></i>',
  	},
  	{
  		title: 'Qoura',
  		link: 'https://vishalpandey.quora.com/',
  		icon: '<i class="fa fa-quora" aria-hidden="true"></i>',
  	},
  	{
  		title: 'StackOverFlow',
  		link: 'https://stackoverflow.com/users/7626313/vishal-pandey',
  		icon: '<i class="fa fa-stack-overflow" aria-hidden="true"></i>',
  	},
  ] 


  ngOnInit() {
    $(document).ready(function(){
      var $animation_elements = $('.contact-c');
      var $window = $(window);
      $window.on('scroll', check_if_in_view);
      $window.on('scroll resize', check_if_in_view);
      $window.trigger('scroll');

      function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
          var $element = $(this);
          var element_height = $element.outerHeight();
          var element_top_position = $element.offset().top;
          var element_bottom_position = (element_top_position + element_height);

          //check to see if this current container is within viewport
          if ((element_top_position <= window_bottom_position)) {
            $element.addClass('animated rollIn');
          } else {
            $element.removeClass('animated rollIn');
          }
        });
      }
    })
  }

}
