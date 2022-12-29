
  var Links = {
    setColor:function(color){
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;}
    // }
    $('a').css('color', color);
    }
  }
  var Body = {
    setColor:function(color){
      // document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
    setBackGoundColor:function(color){
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
    }
  }

  /*function Bodysetcolor(color){
      document.querySelector('body').style.color = color;
}*/

  function nightDayhandler(self){
    var target = document.querySelector('body');
      if(self.value === 'night'){
        Body.setBackGoundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
        self.value = 'day';

      } else{
        Body.setBackGoundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        self.value = 'night';
      }
    }
