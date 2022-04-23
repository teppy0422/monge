Vue.config.devtools = true;

var timer = false;

var options = {
  position: "top-center",
  duration: 2000,
  fullWidth: true,
  type: "error",
};

var app = new Vue({
  el: "#app",
  data: {
    welcome_list: {
      size_people: {
        select: "",
        cost: 0,
        over: false,
      },
      accessories: {
        select: "なし",
        cost: 0,
        over: true,
      },
      japanese_pattern: {
        select: "なし",
        cost: 0,
        over: true,
      },
      picture_frame: {
        select: "なし",
        cost: 0,
        over: false,
      },
      rame_add: {
        select: "",
        cost: 0,
        over: false,
      },
      picture_cost: {
        cost: 0,
      },
      illustrator: {
        select: "おまかせ/納期優先",
        cost: 0,
        over: false,
      },
      total_cost: 0,
    },
  },
  methods: {
    costChange: function(category, select, cost) {
      //size_peopleが選択されたら額縁の値段を決める
      switch (category) {
        case "size_people":
          var size = select.split("_");
          console.log(size[0]);
          switch (size[0]) {
            case "色紙":
              var frame_cost = 500;
              break;
            case "A4":
              var frame_cost = 1000;
              break;
            case "B4":
              var frame_cost = 1500;
              break;
            case "A3":
              var frame_cost = 2000;
              break;
            case "B3":
              var frame_cost = 2500;
              break;
          }
          //金額の更新
          this.welcome_list.size_people.cost = cost;
          this.welcome_list.size_people.select = select;
          //額縁の金額更新
          this.welcome_list.picture_cost.cost = frame_cost;
          if (this.welcome_list.picture_frame.select == "有り") {
            this.welcome_list.picture_frame.cost = this.welcome_list.picture_cost.cost;
          }
          comicomiChange();
          break;
        case "accessories":
          this.welcome_list.accessories.select = select;
          this.welcome_list.accessories.cost = cost;
          break;
        case "japanese_pattern":
          this.welcome_list.japanese_pattern.select = select;
          this.welcome_list.japanese_pattern.cost = cost;
          break;
        case "picture_frame":
          this.welcome_list.picture_frame.select = select;
          if (select == "有り") {
            this.welcome_list.picture_frame.cost = this.welcome_list.picture_cost.cost;
          } else {
            this.welcome_list.picture_frame.cost = 0;
          }
          break;
        case "rame_add":
          this.welcome_list.rame_add.select = select;
          this.welcome_list.rame_add.cost = cost;
          break;
        case "illustrator":
          this.welcome_list.illustrator.select = select;
          this.welcome_list.illustrator.cost = cost;
          break;
      }
      this.welcome_list.total_cost =
        this.welcome_list.size_people.cost +
        this.welcome_list.accessories.cost +
        this.welcome_list.japanese_pattern.cost +
        this.welcome_list.picture_frame.cost +
        this.welcome_list.rame_add.cost;
      toast_create(this.welcome_list.total_cost);
    },
    send_message: function() {
      console.log("send_mail");
      var size_people_select = this.welcome_list.size_people.select.split("_");
      const email = document.getElementById("email").value;
      const name = document.getElementById("full_name").value;
      const line_id = document.getElementById("line_id").value;
      const icon_prefix2 = document.getElementById("icon_prefix2").value;
      const text =
        "依頼者：" +
        name +
        " 様<br>" +
        "メールアドレス: " +
        email +
        "<br>" +
        "LINE ID: " +
        line_id +
        "<br>" +
        "問い合わせ内容:<br>" +
        icon_prefix2 +
        "<br><br>" +
        "--選択内容--<br>" +
        "人数: " +
        size_people_select[1] +
        "<br>" +
        "サイズ: " +
        size_people_select[0] +
        "<br>" +
        "小物: " +
        this.welcome_list.accessories.select +
        "<br>" +
        "和柄: " +
        this.welcome_list.japanese_pattern.select +
        "<br>" +
        "額縁: " +
        this.welcome_list.picture_frame.select +
        "<br>" +
        "ラメ: " +
        this.welcome_list.rame_add.select +
        "<br>" +
        "絵師: " +
        this.welcome_list.illustrator.select +
        "<br>" +
        "総額: " +
        this.welcome_list.total_cost;
      sendDoc(email, text);
    },
  },
  computed: {},
});

function colorChange(obj, className) {
  // 同じクラスの色を消す
  var eles = document.getElementsByClassName(className);
  for (var i = 0; i < eles.length; i++) {
    eles[i].classList.remove("myChoice");
  }
  // 色を塗る
  obj.classList.add("myChoice");
}

//コミコミのアニメーション
function comicomiChange() {
  var comis = document.getElementsByClassName("comi");
  for (var i = 0; i < comis.length; i++) {
    comis[i].classList.add("myChoice_comi");
    comis[i].classList.add("poyoyon3");
  }
  setTimeout(function() {
    for (var i = 0; i < comis.length; i++) {
      // comis[i].classList.remove("pulse");
      comis[i].classList.add("myChoice");
    }
  }, 500);
}
// トースト
let toasts = document.querySelector("#toasts");
let count = 0;
toast_create = (totalcost) => {
  let toast = document.createElement("div");
  toast.className = "toast myChoice";
  toast.innerHTML = totalcost + "円";

  // トーストを作成
  toasts.appendChild(toast);
  // 2秒後にトーストを消す
  setTimeout(() => {
    toast.remove();
  }, 2000);
  count++;
};
