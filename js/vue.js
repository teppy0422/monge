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
        select: "",
        cost: 0,
        over: true,
      },
      japanese_pattern: {
        select: "",
        cost: 0,
        over: true,
      },
      picture_frame: {
        select: "",
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
              var frame_cost = "500";
              break;
            case "A4":
              var frame_cost = "1000";
              break;
            case "B4":
              var frame_cost = "1500";
              break;
            case "A3":
              var frame_cost = "2000";
              break;
            case "B3":
              var frame_cost = "2500";
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
      }
    },
    // toast: function() {
    //   const toast = document.getElementById("toast");
    //   toast.style.visibility = "visible";
    //   toast.animate(
    //     [
    //       { transform: window.pageYOffset + "px" },
    //       { transform: "translateY(0px)" },
    //     ],
    //     { duration: 500 }
    //   );
    //   console.log(toast.style.top);
    //   toast.style.top = window.pageYOffset + "px";
    //   console.log(toast.style.top);
    //   console.log(window.pageYOffset);
    //   console.log(window.screenY);

    //   if (timer != false) {
    //     clearTimeout(timer);
    //   }
    //   timer = setTimeout(function() {
    //     timer = false;
    //     toast.style.visibility = "hidden";
    //   }, 2000);
    // },
  },
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

//金額計算
var comicomiFlag = false;
var sizeCost = document.getElementsByClassName("sizeCost");
for (var i = 0; i < sizeCost.length; i++) {
  sizeCost[i].addEventListener("click", function() {
    this.classList.add("myChoice"); //色を塗る
    removeElseChoice(this, sizeCost); //他の色を消す
    if (comicomiFlag == false) {
      comicomiChange();
      comicomiFlag == true;
    }
  });
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
  }, 1000);
}
var backCost = document.getElementsByClassName("backCost");
var backCostValue = document.getElementById("backCostValue");
for (var i = 0; i < backCost.length; i++) {
  backCost[i].addEventListener("click", function() {
    this.classList.add("myChoice"); //色を塗る
    removeElseChoice(this, backCost); //他の色を消す
  });
}
var lameCost = document.getElementsByClassName("lameCost");
for (var i = 0; i < lameCost.length; i++) {
  lameCost[i].addEventListener("click", function() {
    this.classList.add("myChoice"); //色を塗る
    removeElseChoice(this, lameCost); //他の色を消す
  });
}
var japCost = document.getElementsByClassName("japCost");
for (var i = 0; i < japCost.length; i++) {
  japCost[i].addEventListener("click", function() {
    this.classList.add("myChoice"); //色を塗る
    removeElseChoice(this, japCost); //他の色を消す
  });
}
var frameCost = document.getElementsByClassName("frameCost");
for (var i = 0; i < frameCost.length; i++) {
  frameCost[i].addEventListener("click", function() {
    this.classList.add("myChoice"); //色を塗る
    removeElseChoice(this, frameCost); //他の色を消す
  });
}
