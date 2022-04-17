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
    costs: [0, 0, 0, 0, 0, 0, 0, 0],
    sizeCostValue: 0 + "円",
    totalCostValue: 0 + "円",
    backCostValue: 0 + "円",
    japCostValue: 0 + "円",
    frameCostValue: "",
  },
  methods: {
    costChange: function(selectType, event, costs) {
      if (event.currentTarget.hasAttribute("size")) {
        switch (event.currentTarget.getAttribute("size")) {
          case "sikisi":
            var cost = "500";
            document.getElementById("frameText").innerText =
              " 色紙(+" + cost + "円)";
            break;
          case "A4":
            var cost = "1000";
            document.getElementById("frameText").innerText =
              " A4(+" + cost + "円)";
            break;
          case "B4":
            var cost = "1500";
            document.getElementById("frameText").innerText =
              " B4(+" + cost + "円)";
            break;
          case "A3":
            var cost = "2000";
            document.getElementById("frameText").innerText =
              " A3(+" + cost + "円)";
            break;
          case "B3":
            var cost = "2500";
            document.getElementById("frameText").innerText =
              " B3(+" + cost + "円)";
            break;
        }
        document.getElementById("frameEvent").setAttribute("value", cost);
        if (this.frameCostValue != 0 + "円") {
          this.frameCostValue = Number(cost).toLocaleString() + "円";
          costs[4] = Number(cost);
        }
      }
      var currentValue = event.currentTarget.getAttribute("value");
      costs.forEach(function(elem, index) {
        if (index == selectType) {
          costs[index] = currentValue;
        }
      });
      let totalCostTemp = 0;
      costs.forEach(function(elem) {
        totalCostTemp = totalCostTemp + parseInt(elem);
      });
      this.totalCostValue = Number(totalCostTemp).toLocaleString() + "円";
      switch (selectType) {
        case 1:
          this.sizeCostValue = Number(currentValue).toLocaleString() + "円";
          break;
        case 2:
          this.backCostValue = Number(currentValue).toLocaleString() + "円";
          break;
        case 3:
          this.japCostValue = Number(currentValue).toLocaleString() + "円";
          break;
        case 4:
          this.frameCostValue = Number(currentValue).toLocaleString() + "円";
          break;
      }
    },
    toast: function() {
      const toast = document.getElementById("toast");
      toast.style.visibility = "visible";
      toast.animate(
        [
          { transform: window.pageYOffset + "px" },
          { transform: "translateY(0px)" },
        ],
        { duration: 500 }
      );
      console.log(toast.style.top);
      toast.style.top = window.pageYOffset + "px";
      console.log(toast.style.top);
      console.log(window.pageYOffset);
      console.log(window.screenY);

      if (timer != false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function() {
        timer = false;
        toast.style.visibility = "hidden";
      }, 2000);
    },
  },
});

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
  }, 2000);
}
// 同じグループの自分以外のクラスを外す
function removeElseChoice(nowSelect, targetClass) {
  var nowSize = nowSelect.getAttribute("size");
  for (var i = 0; i < targetClass.length; i++) {
    var targetSize = targetClass[i].getAttribute("size");
    if (
      targetClass[i].innerText + targetSize !=
      nowSelect.innerText + nowSize
    ) {
      targetClass[i].classList.remove("myChoice");
    }
  }
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
