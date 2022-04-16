// ajaxを使って要素の置換え
function HTML_Load_(_html, id) {
  //Httpリクエスを作る
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", _html, true);
  xmlhttp.onreadystatechange = function() {
    //とれた場合Idにそって入れ替え
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = xmlhttp.responseText;
      var elem = document.getElementById(id);
      elem.innerHTML = data;
      var pos = _html.indexOf("?");
      var state = _html.substring(pos);
      return data;
    }
  };
  xmlhttp.send(null);
  // document.getElementById('nav').style.display="none";
  // document.getElementById('nav2').style.display="block";
}

// ページ読み込みが終わったら実行（遅いらしい）
window.onload = function() {};
// DOMの読み込みが終わったら実行（速いらしい）
window.addEventListener("DOMContentLoaded", function() {
  // fetch("header.html")
  // .then(response => {
  //   return response.text()
  // })
  // .then(data => {
  //   document.getElementById("myHeader").innerHTML = data;
  // });
  // fetch("head.html")
  // .then(response => {
  //   return response.text()
  // })
  // .then(data => {
  //   document.getElementById("myHead").innerHTML = data;
  // });
});

//覚えてない
function load() {
  var queryString = window.location.search;
  var queryObject = new Object();
  if (queryString) {
    queryString = queryString.substring(1);
    var parameters = queryString.split("&");
    for (var i = 0; i < parameters.length; i++) {
      var element = parameters[i].split("=");

      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);

      queryObject[paramName] = paramValue;
    }
    var page = queryObject["page"];
    console.log(page);
    HTML_Load(page + "?page=" + page, "main");
  } else {
    HTML_Load("welcome_board.html?page=welcome_board.html", "main");
  }
}

// ajax実行後にライブラリとかjsを有効にする
function load_html(_url, _id) {
  $(function() {
    $.ajax({
      type: "GET",
      url: _url,
      dataType: "html",
      success: function(data) {
        $(_id).empty();
        $(_id).append(data);
      },
      error: function() {
        alert("問題がありました。");
      },
    });
  });
  //読み込み完了後の処理
  $(document).ajaxStop(function() {
    //AOSを初期化
    AOS.init({
      duration: 400,
      easing: "ease",
    });
    //modalを有効
    $(".modal").modal({
      startingTop: "0%",
      endingTop: "5%",
    });
    //materialize.js
    $(".materialboxed").materialbox();
    //自作
    custom();
  });
}

//高さを横幅に合わせる
window.addEventListener("load", function() {
  mixi_icon_getHeight();
});
window.addEventListener("resize", function() {
  mixi_icon_getHeight();
});
function mixi_icon_getHeight() {
  var mixi_icons = document.getElementsByClassName("mixi_icon");
  for (let i = 0; i < mixi_icons.length; i++) {
    mixi_icons[i].style.height = mixi_icons[i].clientWidth + "px";
  }
}
