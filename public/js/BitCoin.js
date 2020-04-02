var name, mobile, walletNumber, ghasem;
var CounterUser = 0;
var Users = [];
var UserInfo = {
  name: "",
  mobile: "",
  walletNumber: ""
}

$(document).ready(function () {

  // What we doing
  $(document).on("click", ".what-we-doing", function () {
    $('.what-we-doing-explain').slideToggle(800);
  });
  // Want & DontWant Click

  $(document).on("click", ".want", function () {
    $(".buy-btc").addClass("seen-plans");
    $(".want").addClass("hide");
    $(".level-2").addClass("hide");
    $(".juice-txt").removeClass("hide").addClass("show");
    $(".dont-txt").addClass("show-2");
    $(".emoji-expressionless").hide();
    $(".emoji-smiling").show();

    setTimeout(function () {
      $(".second-but-box").addClass("show-2").addClass("second-buttons-after");
    }, 410);
  });

  $(document).on("click", ".second-buttons", function () {
    $('.level-3-txt, .level-3-help-btn').removeClass("hide");
    $('.level-3').slideDown();

    $(".juice-txt").addClass("hide").removeClass("show");
    $('.second-but-box').removeClass("show-2").removeClass("second-buttons-after");
    $(".buy-btc").addClass("give-number");
  });

  $(document).on("click", ".dont-want .dont-txt", function () {
    $(".emoji-expressionless").show();
    $(".emoji-smiling").hide();
    $(".types-account").removeClass("types-account-show");
    $(".second-but-box").removeClass("show-2").removeClass("second-buttons-after");
    $(".dont-txt").removeClass("show-2");

    $(".level-3-help-btn").addClass("hide");
    $('.level-3').slideUp();


    $('.level-4').slideUp();

    setTimeout(function () {
      $(".buy-btc").removeClass("seen-plans").removeClass("give-number");
      $(".want").removeClass("hide");
      $(".level-2").removeClass("hide");
      $(".juice-txt").addClass("hide").removeClass("show");
      $(".emoji-expressionless").hide();
      $(".order-txt-2").hide();
      $(".order-txt-1").fadeIn("slow");
      $(".level-3-txt").addClass("hide");
      $(".level-4-txt").addClass("hide");
    }, 600);
  });


  $(document).on("click", ".submit", function () {


    UserInfo.name = $('#name').val();
    UserInfo.mobile = $('#mobile').val();
    UserInfo.walletNumber = $('#btc-wallet-address').val();

    if (UserInfo.name.length == 0) {
      $(".give-info-txt").html('لطفن یک اسم انتخاب کنید').addClass("errors-color");
      $(".level-3-txt .emoji").html("🧐");

      
    }
    else if (UserInfo.mobile.length < 11) {
      
      $(".give-info-txt").html('شماره موبایل کم است').addClass("errors-color");
      $(".level-3-txt .emoji").html("🧐");
    }
    else if (UserInfo.mobile.length > 11) {
     
      $(".give-info-txt").html('شماره موبایل اضافی است').addClass("errors-color");
      $(".level-3-txt .emoji").html("🧐");
    }
    else if (UserInfo.walletNumber.length < 1) {      
    
      $(".give-info-txt").html("کد کیف پول خالی مونده").addClass("errors-color");
      $(".level-3-txt .emoji").html("🧐");
    }

    else{
      $.post("/backpage", UserInfo, function (result) {
          
        // shows level-5
        $('.level-3-txt, .level-3-help-btn').addClass("hide");
        $('.level-3').slideUp();
        $('.level-4-txt').removeClass("hide");
        $('.dont-want').addClass("hide");
        $(".buy-btc").removeClass("give-number").removeClass("seen-plans");
        $(".buy-btc").addClass("level-4-wrap");
  
        $('.customer-name').html(UserInfo.name);
  
        window.setTimeout(function () {
          window.open("http://localhost:9999/backpage");
        }, 1500);
  
      });
    }
    
  });




  $(document).on("click", ".wallet-btn-slide", function () {
    if ($('.wallet-btn-slide').hasClass('active-wallet')) {

      $('.wallet-info-wrapper').slideUp(400);

      setTimeout(function () {
        $('.wallet-btn-slide').removeClass('active-wallet');
      }, 100);

    }
    else {
      $('.wallet-btn').addClass('active-wallet');

      setTimeout(function () {
        $('.wallet-info-wrapper').slideDown(400);
      }, 100);
    }
  });

  $(document).on("click", ".help-receave-code", function () {
    $('.modal-box').slideDown(700);
    $('.help-slider').slick({
      autoplay: false,
      centerMode: true,
    });

  });
  $(document).on("click", ".i-understand", function () {
    $('.modal-box').slideUp(700);
  });

  // Submit Customer Data


});




