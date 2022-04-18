$(document).ready(function() {
  // -----Initialize
  // Materialize option
  $(".modal").modal({
    startingTop: "0%",
    endingTop: "5%",
    preventScrolling: false,
  });

  // -----Scroll to hogehoge
  $("a[href*=\\#about-this-site]").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("a[href*=\\#about-me]").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("a[href*=\\#profile]").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("a[href*=\\#skills]").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("a[href*=\\#projects]").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("a[href*=\\#services]").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  $("a[href*=\\#contact]").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });
  // Scroll to top
  $(".scroll-to-top-btn").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
  $(".scroll-to-top-li").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});

// -----Add the closing modal button
$(".modal").append(
  '<div class="close-button"><a href="#!" class="btn-floating waves-effect waves-light"><i class="material-icons">close</i></a></div>'
);

// -----Close modal window
$(".modal .close-button").click(function(event) {
  event.preventDefault();
  var $targetModal = $(this)
    .closest("[id^=modal]")
    .attr("id");
  $("#" + $targetModal).modal("close");
});
// -----Change image when clicking thumbnails
$(".thumbnails img").click(function() {
  var $thisModalId = $(this)
    .closest("[id^=modal]")
    .attr("id");
  var $thisImg = $(this).attr("src");
  var $thisAlt = $(this).attr("alt");
  $("#" + $thisModalId + " .mainImage img").attr({
    src: $thisImg,
    alt: $thisAlt,
  });
  if ($(this).hasClass("z-depth-2")) {
    $("#" + $thisModalId + " .thumbnails img")
      .not(".z-depth-2")
      .addClass("z-depth-2");
    $(this).removeClass("z-depth-2");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});

// materialize.jsのセレクトボックス用
$(function() {
  $(document).ready(function() {
    $("select").material_select();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});

// materialize.jsのナビトリガー用
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});
// $(function() {
//   $(document).ready(function() {
//     $(".sidenav").sidenav();
//   });
// });

//mixi
window.addEventListener("resize", function() {
  mixi_icon_getHeight();
});
function mixi_icon_getHeight() {
  var mixi_icons = document.getElementsByClassName("mixi_icon");
  for (let i = 0; i < mixi_icons.length; i++) {
    mixi_icons[i].style.height = mixi_icons[i].clientWidth + "px";
  }
}

//Meterialize.jsのtooltip
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems, options);
});

// Or with jQuery
$(document).ready(function() {
  $(".tooltipped").tooltip();
});
//ローディングエリアを取得
var loading = $("#loading");
//ローディングエリアを隠す処理
var isHidden = function() {
  loading.fadeOut(1000); //1000ミリ秒かけてフェードアウト
};
//1000ミリ秒後にloadingFunc開始
setTimeout(isHidden, 100);

// 横にスクロール
window.addEventListener("load", function() {
  var winSize = this.window.innerWidth;
  if (winSize > 740) {
    //プラグインを定義_PC
    gsap.registerPlugin(ScrollTrigger);
    const area = document.querySelector(".js-area");
    const wrap = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num = items.length;

    //横幅を指定
    gsap.set(wrap, { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });

    gsap.to(items, {
      xPercent: -100 * (num - 1), //x方向に移動させる
      ease: "none",
      scrollTrigger: {
        trigger: area, //トリガー
        start: "top top", //開始位置
        end: "+=1000", //終了位置
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
      },
    });
  } else {
    //プラグインを定義_sp
    gsap.registerPlugin(ScrollTrigger);
    const area_sp = document.querySelector(".js-area_sp");
    const wrap_sp = document.querySelector(".js-wrap_sp");
    const items_sp = document.querySelectorAll(".js-item_sp");
    const num_sp = items_sp.length;

    //横幅を指定
    gsap.set(wrap_sp, { width: num_sp * 100 + "%" });
    gsap.set(items_sp, { width: 100 / num_sp + "%" });

    gsap.to(items_sp, {
      xPercent: -100 * (num_sp - 1), //x方向に移動させる
      ease: "none",
      scrollTrigger: {
        trigger: area_sp, //トリガー
        start: "top top", //開始位置
        end: "+=1000", //終了位置
        pin: true, //ピン留め
        scrub: true, //スクロール量に応じて動かす
      },
    });
  }
});

// darkmode
var flagMode = false;
function changeMode() {
  var btnMode = document
    .getElementById("btnMode")
    .getElementsByClassName("material-icons");
  if (flagMode == false) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    btnMode[0].innerHTML = "wb_sunny";
    flagMode = true;
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    btnMode[0].innerHTML = "brightness_2";
    flagMode = false;
  }
}
