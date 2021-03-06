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

// materialize.js??????????????????????????????
// $(function() {
//   $(document).ready(function() {
//     $("select").material_select();
//   });
// });
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});

// materialize.js????????????????????????
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

//Meterialize.js???tooltip
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems, options);
});

// Or with jQuery
$(document).ready(function() {
  $(".tooltipped").tooltip();
});
//????????????????????????????????????
var loading = $("#loading");
//??????????????????????????????????????????
var isHidden = function() {
  loading.fadeOut(1000); //1000???????????????????????????????????????
};
//1000???????????????loadingFunc??????
setTimeout(isHidden, 100);

// ?????????????????????
window.addEventListener("load", function() {
  var winSize = this.window.innerWidth;
  if (winSize > 740) {
    //????????????????????????_PC
    gsap.registerPlugin(ScrollTrigger);
    const area = document.querySelector(".js-area");
    const wrap = document.querySelector(".js-wrap");
    const items = document.querySelectorAll(".js-item");
    const num = items.length;

    //???????????????
    gsap.set(wrap, { width: num * 100 + "%" });
    gsap.set(items, { width: 100 / num + "%" });

    gsap.to(items, {
      xPercent: -100 * (num - 1), //x????????????????????????
      ease: "none",
      scrollTrigger: {
        trigger: area, //????????????
        start: "top top", //????????????
        end: "+=1000", //????????????
        pin: true, //????????????
        scrub: true, //???????????????????????????????????????
      },
    });
  } else {
    //????????????????????????_sp
    gsap.registerPlugin(ScrollTrigger);
    const area_sp = document.querySelector(".js-area_sp");
    const wrap_sp = document.querySelector(".js-wrap_sp");
    const items_sp = document.querySelectorAll(".js-item_sp");
    const num_sp = items_sp.length;

    //???????????????
    gsap.set(wrap_sp, { width: num_sp * 100 + "%" });
    gsap.set(items_sp, { width: 100 / num_sp + "%" });

    gsap.to(items_sp, {
      xPercent: -100 * (num_sp - 1), //x????????????????????????
      ease: "none",
      scrollTrigger: {
        trigger: area_sp, //????????????
        start: "top top", //????????????
        end: "+=1000", //????????????
        pin: true, //????????????
        scrub: true, //???????????????????????????????????????
      },
    });
  }
});

// darkmode
let flagMode = false;
let is_btnModeDown = false;
function changeMode(obj) {
  if (is_btnModeDown == false) {
    if (flagMode == false) {
      // ??????????????????
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");

      btnModeDown(obj, '<i class="material-icons">wb_sunny</i>');

      flagMode = true;
    } else {
      // ??????????????????
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");

      btnModeDown(obj, '<i class="material-icons">brightness_2</i>');

      flagMode = false;
    }
  }
}
// ????????????????????????????????????
function move_temp(_id) {
  window.scrollTo(0, document.getElementById(_id).getBoundingClientRect().top);
}

function changeColor(hoge) {
  if (hoge.value == 0) {
    hoge.style.color = "";
  } else {
    hoge.style.color = "#f00";
  }
}

// ?????????????????????
let snows = document.querySelector(".stars");
const createStar = () => {
  let snow = document.createElement("span");
  snow.className = "star";

  minSize = 8;
  maxSize = 12;

  // ???????????????
  let snowSize = Math.random() * (maxSize - minSize) + minSize;
  snow.style.width = snowSize + "px";
  snow.style.height = snowSize + "px";
  // ??????????????????????????????
  snow.style.left = Math.random() * 100 + "%";
  snow.style.top = Math.random() * 100 + "%";
  snows.appendChild(snow);
  // 10?????????????????????
  setTimeout(() => {
    snow.remove();
  }, 10000);
};
setInterval(createStar, 1000);

//?????????????????????????????????????????????????????????
function btnModeDown(obj, obj_icon) {
  if (is_btnModeDown == false) {
    is_btnModeDown = true;
    obj.classList.add("btnModeFake");
    setTimeout(() => {
      obj.classList.remove("btnModeFake");
      is_btnModeDown = false;
    }, 1000);
    setTimeout(() => {
      obj.innerHTML = obj_icon;
    }, 500);
  }
}
//???????????????????????????????????????????????????
window.addEventListener("load", function() {
  // ???????????????
  let welcome_message = document.getElementById("welcome_message");
  welcome_message.classList.add("welcome_message");
  window.setTimeout(() => {
    welcome_message.classList.remove("welcome_message");
    welcome_message.style.display = "none";
  }, 12000);

  //??????????????????
  let welcome_overlay = document.getElementById("welcome_overlay");
  welcome_overlay.classList.add("welcome_overlay");
  setTimeout(() => {
    welcome_overlay.classList.remove("welcome_overlay");
    welcome_overlay.style.display = "none";
  }, 12000);
});
