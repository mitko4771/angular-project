import { Component, OnInit, ElementRef, Inject } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})

export class SkillsComponent implements OnInit {

  circle = true;
  skills = true;

  constructor(private el: ElementRef, @Inject('Window') window: Window) {}

  ngOnInit() {

    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('#paralax').css({'color': '#7c7070'});
          $('.circle').css({'display': 'none'});
        } else {
          $('#paralax').css({'color': '#fff'});
          $('.circle').css({'display': 'block'});
        }
      });
    });

    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 720) {
          $('#second-paralax').addClass('imageParalax');
        } else {
          $('#second-paralax').removeClass('imageParalax');
        }
      });
    });

    $(function() {
      var tStart = 1000,
          tEnd = 1600, 
          cStart = [218, 13, 15],
          cEnd = [250, 247, 130],
          cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];


      $(document).scroll(function() {
          var p = ($(this).scrollTop() - tStart) / (tEnd - tStart);
          p = Math.min(1, Math.max(0, p));
          var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
          $("#articleHolder").css('background-color', 'rgb(' + cBg.join(',') +')');
      });;
    });

    // $(window).scroll(example); 

    // function example() {
    //     var tempScrollTop = $(window).scrollTop();
    //     console.log("Scroll from Top: " + tempScrollTop.toString());
    // };
    
  }
}