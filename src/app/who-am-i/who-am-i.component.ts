import { Component, OnInit, ElementRef, Inject } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.less']
})
export class WhoAmIComponent implements OnInit {

  holder = true;
  controls = true;

  constructor(private _elRef: ElementRef, @Inject('Window') window: Window) { }

  ngOnInit() {
    
    (function() {
      window.addEventListener('scroll', scrollLoop, true);

      let backHex = document.querySelector('#backHex');
      let middleHex = document.querySelector('#middleHex');
      let frontHex = document.querySelector('#frontHex');

      let xScrollPosition;
      let yScrollPosition;
      
      function scrollLoop(e) {
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;

        setTranslete(0, yScrollPosition * -0.8, backHex);
        setTranslete(0, yScrollPosition * 0.3, middleHex);
        setTranslete(0, yScrollPosition * -0.5, frontHex);

        requestAnimationFrame(scrollLoop);
      }

      function setTranslete(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
      }
    })();

    $(function() {
      let rotation = 0, 
        scrollLoc = $(document).scrollTop();
      $(window).scroll(function() {
        let newLoc = $(document).scrollTop();
        let diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        let rotationStr = "rotate(" + rotation + "deg)";
        $(".rotate").css({
          "-webkit-transform": rotationStr,
          "-moz-transform": rotationStr,
          "transform": rotationStr
        });
      });
    });

    $(function() {
      let rotation = 0, 
        scrollLoc = $(document).scrollTop();
      $(window).scroll(function() {
        let newLoc = $(document).scrollTop();
        let diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        let rotationStr = "rotate(" + -rotation + "deg)";
        $(".backRotate").css({
          "-webkit-transform": rotationStr,
          "-moz-transform": rotationStr,
          "transform": rotationStr
        });
      });
    });

    (function() {
      let textAboutMe = document.getElementById('aboutMeText');
      let scrollFunc = function() {
        let y = window.scrollY;
        if(y >= 350) {
          $('#imageSection').stop().fadeIn(700).css({'display': 'block'});
          $('#slides .slide').find('p').stop().fadeIn(700).css({'display': 'block'});
          $('.control').css({'display': 'block'});
        } else {
          $('#imageSection').stop().fadeOut(1000).css({'display': 'none'});
          $('#slides .slide').find('p').stop().fadeOut(1000).css({'display': 'none'});
          $('.control').css({'display': 'none'});
        }
      }

      var slides = document.querySelectorAll('#slides .slide');
      var currentSlide = 0;

      function nextSlide() {
          goToSlide(currentSlide + 1);
      }

      function previousSlide() {
          goToSlide(currentSlide - 1);
      }

      function goToSlide(n) {
          slides[currentSlide].className = 'slide';
          currentSlide = (n + slides.length) % slides.length;
          slides[currentSlide].className = 'slide showing';
      }

      var next = document.getElementById('next');
      var previous = document.getElementById('previous');

      next.onclick = function() {
          nextSlide();
      };
      previous.onclick = function() {
          previousSlide();
      };
        
      window.addEventListener('scroll', scrollFunc);
    })();

  }
}
