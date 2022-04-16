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
