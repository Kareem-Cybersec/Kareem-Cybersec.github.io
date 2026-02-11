// Preloader JS
$("#preloader").fadeOut(1500);

// For Wow Initialize
new WOW().init();

// For Navbar
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navIcon = document.getElementById('nav-icon');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.d2c_navlink');
  
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
      if (navMenu.classList.contains('translate-x-full')) {
        navMenu.classList.remove('translate-x-full');
        // navIcon.classList.replace('fa-bars', 'fa-times');
      } else {
        navMenu.classList.add('translate-x-full');
        navIcon.classList.replace('fa-times', 'fa-bars');
      }
    });
  
    // Close mobile menu
    navClose.addEventListener('click', () => {
      navMenu.classList.add('translate-x-full');
      navIcon.classList.replace('fa-times', 'fa-bars');
    });
  
    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.add('translate-x-full');
        navIcon.classList.replace('fa-times', 'fa-bars');
      }
    });
  
    // Handle active class on navigation links
    const setActiveLink = () => {
      const currentPath = window.location.pathname.split('/').pop();
      navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPath)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
  
    // Set active link on page load
    setActiveLink();
  
    // Update active link on click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        navMenu.classList.add('translate-x-full');
        navIcon.classList.replace('fa-times', 'fa-bars');
      });
    });
  
    // Intersection Observer for Scrollspy
    const sections = document.querySelectorAll('section, Section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });


// counter js
$(function () {
  let visibilityIds = ['#counters_2']; 
  let counterClass = '.count';
  let defaultSpeed = 3000;

  $(window).on('scroll', function () {
      getVisibilityStatus();
  });
  getVisibilityStatus();

  function getVisibilityStatus() {
      let elValFromTop = [];
      let windowHeight = $(window).height();
      let windowScrollValFromTop = $(this).scrollTop();

      visibilityIds.forEach(function (item, index) {
          try {
              elValFromTop[index] = Math.ceil($(item).offset().top);
          } catch (err) {
              return;
          }
          if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
              counter_init(item);
          }
      });
  }

  function counter_init(groupId) {
      let index = 0;
      $(groupId).find(counterClass).each(function () {
          let num = $(this).data('targetnum');
          let speed = $(this).data('speed');
          let direction = $(this).data('direction');
          let easing = $(this).data('easing');

          if (speed === undefined) speed = defaultSpeed;
          if (easing === undefined) easing = "swing";

          $(this).addClass('c_' + index);
          doCount(num, index, speed, groupId, direction, easing);
          index++;
      });
  }

  function doCount(num, index, speed, groupClass, direction, easing) {
      let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
      $(className).animate({
          Counter: num
      }, {
          duration: +speed,
          easing: easing,
          step: function (now) {
              if (direction == 'reverse') {
                  $(this).text(num - Math.floor(now));
              } else {
                  $(this).text(Math.floor(now));
              }
          },
          complete: function () {
              if (direction == 'reverse') {
                  $(this).text(0);
              } else {
                  $(this).text(num);
              }
          }
      });
  }
});


// For Partner Icon Hover JS
$(document).ready(function() { 
  $(".d2c_logo_wrapper").on("mouseenter",(e)=>{   
      IMAGE_URL = $(e.target).children().attr("src").replace('.png','_hover.png');
      $(e.target).children().attr("src",IMAGE_URL);  
  })
  
  $(".d2c_logo_wrapper").on("mouseleave",(e)=>{
          IMAGE_URL = $(e.target).children().attr("src").replace('_hover.png','.png');
          $(e.target).children().attr("src",IMAGE_URL);
  })
});

function slickCarousel() {
  // Testimonial Slider
      $('.d2c_testimonial_slider').slick({
          slidesToShow: 1,
          arrows: false,
          fade: true,
          asNavFor: '.d2c_slider_img',
          autoplay: true
      });
      // Testimonial Slider
      $('.d2c_slider_img').slick({
      slidesToShow: 8,
      asNavFor: '.d2c_testimonial_slider',
      dots: false,
      arrows: false,
        centerMode: true,
      focusOnSelect: true,
      });
  }
  slickCarousel();

// For Form-validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('form_validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
  })();


// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}





// Template Name: {{#}}
// Template URL: {{#}}
// Description: {{#}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com/
// Text Domain: {{#}}