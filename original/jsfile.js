

  $(document).ready(function(){
    $('.carousel#img1').carousel({
      interval: 5000
    });
    $('.carousel#img2').carousel({
      interval: 8000
    });

    $('div#product').hide();
    $("a#product").hide();
    $("div#microInfo").hide();
    $("a#services").hide();
    $("p#nativeInfo").hide();
    $("div.teamInfo").hide();

    $("[href='#']").click(function(){
      $("div#team").show();
      $("#general").show();
      $("div#microgreen").show();
      $("div#nativePlants").show();
      $("div#fullTeam").show();

      $("h4#micromore").show();
      $("h4#nativemore").show();
      $("h5#teammore").show();
      $("a#product").hide();
      $("div#microInfo").hide();
      $("a#services").hide();
      $("p#nativeInfo").hide();
      $("div.teamInfo").hide();
      $('div#product').hide();
    });



    $("[href='#micros']").click(function(){
      $("#general").hide();
      $("div#nativePlants").hide();
      $("div#fullTeam").hide();

      $("div#microgreen").show();
      $("div#microInfo").show();
      $("h4#micromore").hide();
      $("a#product").show().click(function(){
        $("div#product").toggle();
      });
    });


    $("[href='#natives']").click(function(){
      $("#general").hide();
      $("div#microgreen").hide();
      $("div#fullTeam").hide();

      $("div#nativePlants").show();
      $("p#nativeInfo").show();
      $("h4#nativemore").hide();
      $("a#services").show();
    });

    $("[href='#team']").click(function(){
      $("#general").hide();
      $("div#nativePlants").hide();
      $("div#microgreen").hide();
      $("div#team").hide();

      $("div#fullTeam").show();
      $("div.teamInfo").show();
      $("h5#teammore").hide();
    });


  });
