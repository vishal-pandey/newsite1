import { Component, OnInit } from '@angular/core';
// import $ = require("jquery");
import * as $ from "jquery"

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

	skills=[
		{
			name: 'Web Designing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/webd.png'
		},
		{
			name: 'Web Developement',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/webdd.png'
		},
		{
			name: 'UI / UX Design',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/ui-ux.png'
		},
		{
			name: 'Dashboard Designing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/dashboard.png'
		},
		{
			name: 'Content Writing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/content-writing.png'
		},
		{
			name: 'Search Engine Optimisation',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/seo.png'
		},
		{
			name: 'Portal Design',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/portal.png'
		},
		{
			name: 'E-Commerce Solutions',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/ecom.png'
		},
		{
			name: 'Business Consultancy',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/Business-Consulting.png'
		},
		{
			name: 'Domain Names',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/domain.png'
		},
		{
			name: 'Web/App Hosting Solutions',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/hosting.png'
		},
		{
			name: 'Cloud Computing',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/cloud.png'
		},
		{
			name: 'Database Support',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/database.png'
		},
		{
			name: 'Android App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/android.png'
		},
		{
			name: 'IOS App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/ios.png'
		},
		{
			name: 'Windows App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/windows.png'
		},
		{
			name: 'Mac OS App Development',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/mac.png'
		},
		{
			name: 'IOT Based Solutions',
			img: 'https://raw.githubusercontent.com/vishal-pandey/cdn/master/iot.png'
		}
	]

  constructor() { }


  ngOnInit() {
  	$(document).ready(function(){

	  	var $animation_elements = $('.skill');
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
