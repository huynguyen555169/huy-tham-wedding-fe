const biicore = {
  themeRoot: "https://tuandat-ngocha.iwedding.info/templates/template15",
  webroot: "https://tuandat-ngocha.iwedding.info",
  coreSite: "https://biihappy.com",
  webToken: "645afe3aa37395b2620af454",
  isPremium: !1,
  bgMusic:
    "https://firebasestorage.googleapis.com/v0/b/wedding-thanh-thao.appspot.com/o/BeautifulInWhite-ShaneFilan.mp3?alt=media&token=bddbeeb0-d7ef-4372-b5a8-4e420e14edb4",
  alert: JSON.parse("[]"),
  effect: JSON.parse('{"type":"heart"}')
};
Date.now ||
  (Date.now = function () {
    return new Date().getTime();
  }),
  (function () {
    "use strict";
    for (
      var e = ["webkit", "moz"], t = 0;
      t < e.length && !window.requestAnimationFrame;
      ++t
    ) {
      var i = e[t];
      (window.requestAnimationFrame = window[i + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[i + "CancelAnimationFrame"] ||
          window[i + "CancelRequestAnimationFrame"]);
    }
    if (
      /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) ||
      !window.requestAnimationFrame ||
      !window.cancelAnimationFrame
    ) {
      var n = 0;
      (window.requestAnimationFrame = function (e) {
        var t = Date.now(),
          i = Math.max(n + 16, t);
        return setTimeout(function () {
          e((n = i));
        }, i - t);
      }),
        (window.cancelAnimationFrame = clearTimeout);
    }
  })();
var snowFall = (function () {
    function e() {
      var e = {
          flakeCount: 35,
          flakeColor: "#ffffff",
          flakeIndex: 999999,
          minSize: 1,
          maxSize: 2,
          minSpeed: 1,
          maxSpeed: 5,
          round: !1,
          shadow: !1,
          collection: !1,
          image: !1,
          collectionHeight: 40
        },
        t = [],
        n = {},
        o = 0,
        a = 0,
        s = 0,
        r = 0,
        l = function (e, t) {
          return Math.round(e + Math.random() * (t - e));
        },
        d = function (e, t) {
          for (var i in t)
            e.style[i] = t[i] + ("width" == i || "height" == i ? "px" : "");
        },
        m = function (t, i, n) {
          (this.x = l(s, a - s)),
            (this.y = l(0, o)),
            (this.size = i),
            (this.speed = n),
            (this.step = 0),
            (this.stepSize = l(1, 10) / 100),
            e.collection &&
              (this.target =
                canvasCollection[l(0, canvasCollection.length - 1)]);
          var r = null;
          e.image
            ? ((r = new Image()).src = e.image)
            : ((r = document.createElement("div")),
              d(r, { background: e.flakeColor })),
            (r.className = "snowfall-flakes"),
            d(r, {
              width: this.size,
              height: this.size,
              position: "absolute",
              top: this.y,
              left: this.x,
              fontSize: 0,
              zIndex: e.flakeIndex
            }),
            e.round &&
              d(r, {
                "-moz-border-radius": ~~e.maxSize + "px",
                "-webkit-border-radius": ~~e.maxSize + "px",
                borderRadius: ~~e.maxSize + "px"
              }),
            e.shadow &&
              d(r, {
                "-moz-box-shadow": "1px 1px 1px #555",
                "-webkit-box-shadow": "1px 1px 1px #555",
                boxShadow: "1px 1px 1px #555"
              }),
            t.tagName === document.body.tagName
              ? document.body.appendChild(r)
              : t.appendChild(r),
            (this.element = r),
            (this.update = function () {
              (this.y += this.speed),
                this.y > o - (this.size + 6) && this.reset(),
                (this.element.style.top = this.y + "px"),
                (this.element.style.left = this.x + "px"),
                (this.step += this.stepSize),
                (this.x += Math.cos(this.step)),
                (this.x + this.size > a - s || this.x < s) && this.reset();
            }),
            (this.reset = function () {
              (this.y = 0),
                (this.x = l(s, a - s)),
                (this.stepSize = l(1, 10) / 100),
                (this.size = l(100 * e.minSize, 100 * e.maxSize) / 100),
                (this.element.style.width = this.size + "px"),
                (this.element.style.height = this.size + "px"),
                (this.speed = l(e.minSpeed, e.maxSpeed));
            });
        },
        c = function () {
          for (var e = 0; e < t.length; e += 1) t[e].update();
          r = requestAnimationFrame(function () {
            c();
          });
        };
      return {
        snow: function (r, d) {
          for (
            (function (e, t) {
              for (var i in t) e.hasOwnProperty(i) && (e[i] = t[i]);
            })(e, d),
              o = (n = r).offsetHeight,
              a = n.offsetWidth,
              n.snow = this,
              "body" === n.tagName.toLowerCase() && (s = 25),
              window.addEventListener(
                "resize",
                function () {
                  (o = n.clientHeight), (a = n.offsetWidth);
                },
                !0
              ),
              i = 0;
            i < e.flakeCount;
            i += 1
          )
            t.push(
              new m(
                n,
                l(100 * e.minSize, 100 * e.maxSize) / 100,
                l(e.minSpeed, e.maxSpeed)
              )
            );
          c();
        },
        clear: function () {
          for (
            var e,
              t = (e = n.getElementsByClassName
                ? n.getElementsByClassName("snowfall-flakes")
                : n.querySelectorAll(".snowfall-flakes")).length;
            t--;

          )
            e[t].parentNode === n && n.removeChild(e[t]);
          cancelAnimationFrame(r);
        }
      };
    }
    return {
      snow: function (t, i) {
        if ("string" == typeof i)
          if (t.length > 0)
            for (var n = 0; n < t.length; n++) t[n].snow && t[n].snow.clear();
          else t.snow.clear();
        else if (t.length > 0)
          for (n = 0; n < t.length; n++) new e().snow(t[n], i);
        else new e().snow(t, i);
      }
    };
  })(),
  SNOW_Picture = biicore.webroot + "/common/imgs/heart.png";
if (
  ((window.onload = (e) => {
    if ("none" == biicore.effect.type) return !1;
    setTimeout(function () {
      if ("heart" == biicore.effect.type)
        snowFall.snow(document.getElementsByTagName("body")[0], {
          image: SNOW_Picture,
          minSize: 15,
          maxSize: 32,
          flakeCount: 30,
          maxSpeed: 3,
          minSpeed: 1
        });
      else if ("snow" == biicore.effect.type)
        snowFall.snow(document.getElementsByTagName("body")[0], {
          round: !0,
          shadow: !0,
          flakeCount: 250,
          minSize: 1,
          maxSize: 8
        });
      else if ("custom" == biicore.effect.type) {
        let e = biicore.effect.setting,
          t = parseInt(e.speed) - 3;
        t <= 0 && (t = 1),
          snowFall.snow(document.getElementsByTagName("body")[0], {
            image: e.icon,
            minSize: e.minSize,
            maxSize: e.maxSize,
            flakeCount: e.number,
            maxSpeed: e.speed,
            minSpeed: t
          });
      }
    }, 300);
  }),
  biicore.alert &&
    Object.keys(biicore.alert).length > 0 &&
    1 == biicore.alert.status &&
    setTimeout(function () {
      Swal.fire({
        title: biicore.alert.title,
        html: biicore.alert.content,
        showCloseButton: !1,
        showConfirmButton: !1,
        showCancelButton: !0,
        focusCancel: !0,
        cancelButtonText: "Tắt thông báo"
      });
    }, biicore.alert.timeout),
  biicore.bgMusic)
) {
  console.log("zo day ne dkm");
  var audioPlayer = document.createElement("AUDIO");
  (audioPlayer.style.display = "none"),
    setTimeout(function () {
      audioPlayer.canPlayType("audio/mpeg") &&
        (audioPlayer.setAttribute("src", biicore.bgMusic),
        (document.getElementsByClassName("bii-player")[0].style.display =
          "block")),
        (audioPlayer.volume = 0.3),
        audioPlayer.setAttribute("controls", "controls"),
        document.body.appendChild(audioPlayer);
    }, 1e3);
  var myInterval = setInterval(function () {
    document.querySelector(".bii-player") &&
      (setTimeout(function () {
        document
          .getElementsByClassName("bii-player")[0]
          .classList.add("show-sec");
      }, 2e3),
      setTimeout(function () {
        document
          .getElementsByClassName("bii-player")[0]
          .classList.remove("show-sec");
      }, 7e3),
      clearInterval(myInterval));
  }, 200);
  function playPause() {
    document
      .getElementsByClassName("bii-player")[0]
      .classList.remove("show-sec"),
      audioPlayer.paused
        ? (audioPlayer.play(),
          (document.getElementById("playerVolumeOff").style.display = "none"),
          (document.getElementById("playerVolumeOn").style.display = "block"))
        : (audioPlayer.pause(),
          (document.getElementById("playerVolumeOff").style.display = "block"),
          (document.getElementById("playerVolumeOn").style.display = "none")),
      console.log(
        `playerVolumeOff: ${
          document.getElementById("playerVolumeOff").style.display
        }`
      ),
      console.log(
        `playerVolumeOn: ${
          document.getElementById("playerVolumeOn").style.display
        }`
      );
  }
  document.write(
    '\n\t<style type="text/css">\n\t@-webkit-keyframes biilogo-pulse {\n\t  from {\n\t    -webkit-transform: scale3d(1, 1, 1);\n\t    transform: scale3d(1, 1, 1);\n\t  }\n\t  50% {\n\t    -webkit-transform: scale3d(0.95, 0.95, 0.95);\n\t    transform: scale3d(0.95, 0.95, 0.95);\n\t  }\n\t  to {\n\t    -webkit-transform: scale3d(1, 1, 1);\n\t    transform: scale3d(1, 1, 1);\n\t  }\n\t}\n\t\n\t@keyframes biilogo-pulse {\n\t  from {\n\t    -webkit-transform: scale3d(1, 1, 1);\n\t    transform: scale3d(1, 1, 1);\n\t  }\n\t  50% {\n\t    -webkit-transform: scale3d(0.95, 0.95, 0.95);\n\t    transform: scale3d(0.95, 0.95, 0.95);\n\t  }\n\t  to {\n\t    -webkit-transform: scale3d(1, 1, 1);\n\t    transform: scale3d(1, 1, 1);\n\t  }\n\t}\n\t.bii-player{position: fixed;bottom: 70px;left: 50px;width: 40px;height: 40px;z-index:99999;display:none;}\n\t.bii-player .playerIcon{cursor:pointer;display: block;width:40px;height:40px;-webkit-border-radius: 50%;-moz-border-radius: 50%;-o-border-radius: 50%;-ms-border-radius: 50%;border-radius: 50%;background-color: #df4758;padding-top: 7px;padding-left: 9px;position:absolute;z-index: 2;}\n\t.bii-player:after{content: "";position: absolute;-webkit-border-radius: 50%;-moz-border-radius: 50%;-o-border-radius: 50%;-ms-border-radius: 50%;border-radius: 50%;z-index: -1;background-color: rgba(242, 59, 67, 0.3);width: 120%;height: 120%;left: -10%;top: -10%;-webkit-animation: biilogo-pulse 1s infinite;animation: biilogo-pulse 1s infinite;z-index: 1;}\n\t.bii-player img{width: 100%;z-index: 99999;position: absolute;cursor:pointer;}\n\t.bii-player.show-sec .bii-player-secondary{visibility: visible;}\n\t.bii-player.show-sec .bii-player-secondary-content{ transform: translate3d(0, 0, 0);}\n\t.bii-player-secondary{position: absolute;width: 310px;left: 25px;height: 50px;overflow: hidden;visibility: hidden;}\n\t.bii-player-secondary-content{display: flex;align-items: center;cursor:pointer;user-select: none;position: absolute;width: 310px;left: -25px;background: #fff;height: 40px;padding: 8px 11px 8px 50px;border: 1px solid #df4759;border-radius: 30px;z-index: 1;font-size:14px;transform: translate3d(-100%, 0, 0);transition: transform 175ms ease;font-family: arial;font-weight: 200;color: #000;}\n\t@media (max-width: 799px) {\n\t  .bii-player{bottom: 30px;left: 20px;}\n\t}\n\t</style>\n\t'
  );
}
