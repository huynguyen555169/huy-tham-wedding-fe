!(function (e) {
  "use strict";
  function t() {
    var t = e(".navigation-holder"),
      n = e(".navbar-header .open-btn"),
      i = e(".navigation-holder .close-navbar");
    e(".page-wrapper");
    n.on("click", function () {
      return t.hasClass("slideInn") || t.addClass("slideInn"), !1;
    }),
      i.on("click", function () {
        return t.hasClass("slideInn") && t.removeClass("slideInn"), !1;
      });
  }
  function n() {
    var t = window.innerWidth,
      n = e("#navbar > ul");
    t <= 991 ? n.addClass("small-nav") : n.removeClass("small-nav");
  }
  function i() {
    var t = window.innerWidth,
      n = e(".navigation-holder"),
      i = e(".navigation-holder > .small-nav"),
      o = i.find(".sub-menu"),
      a = i.find(".mega-menu"),
      s = i.find(".menu-item-has-children > a");
    t <= 991
      ? (o.hide(),
        a.hide(),
        s.on("click", function (t) {
          e(this).siblings().slideToggle(),
            t.preventDefault(),
            t.stopImmediatePropagation();
        }))
      : t > 991 && (n.find(".sub-menu").show(), n.find(".mega-menu").show());
  }
  e("#donate-modal").length &&
    e(".buttonDonate").length &&
    e(".donate-modal-close").length &&
    (e(document).on("click", ".buttonDonate", function () {
      e("#donate-modal").show();
    }),
    e(document).on("click", ".donate-modal-close", function () {
      e("#donate-modal").hide();
    }),
    e(document).on("click", "body", function (t) {
      t.target.id == e("#donate-modal").attr("id") && e("#donate-modal").hide();
    })),
    setTimeout(function () {
      var t = e(".invitation-box.calendar-box").parent().height(),
        n = e(".invitation-box.left").parent().height();
      e(".invitation-box").css("height", Math.max(t, n));
    }, 300),
    e(document).on("click", "#donate-modal .crypto-item", function () {
      let t = e(this).parents(".donate-card");
      t.find(".cryptos-box-view").show(),
        t
          .find(".cryptos-box-view .coin-img")
          .html('<img src="' + e(this).data("img") + '" />'),
        t.find(".cryptos-box-view .coin-id").html(e(this).data("id")),
        t.find(".cryptos-box-view .coin-address").html(e(this).data("address")),
        t
          .find(".cryptos-box-view .coin-qr-code")
          .html("")
          .qrcode({ width: 160, height: 160, text: e(this).data("address") });
    }),
    e(document).on(
      "click",
      "#donate-modal .cryptos-box-view-close",
      function () {
        e(this).parents(".donate-card").find(".cryptos-box-view").hide();
      }
    ),
    e("#scroll").length &&
      e("#scroll").on("click", function (t) {
        return (
          t.preventDefault(),
          e("html,body").animate(
            { scrollTop: e(this.hash).offset().top },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
      }),
    t(),
    n(),
    i();
  var o = [];
  jQuery(".swiper-slide").each(function (e) {
    o.push(jQuery(this).find(".slide-inner").attr("data-text"));
  });
  new Swiper(".swiper-container", {
    loop: !0,
    speed: 1e3,
    parallax: !0,
    autoplay: { delay: 6500, disableOnInteraction: !1 },
    watchSlidesProgress: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      progress: function () {
        for (var e = this, t = 0; t < e.slides.length; t++) {
          var n = e.slides[t].progress * (0.5 * e.width);
          e.slides[t].querySelector(".slide-inner").style.transform =
            "translate3d(" + n + "px, 0, 0)";
        }
      },
      touchStart: function () {
        for (var e = 0; e < this.slides.length; e++)
          this.slides[e].style.transition = "";
      },
      setTransition: function (e) {
        for (var t = this, n = 0; n < t.slides.length; n++)
          (t.slides[n].style.transition = e + "ms"),
            (t.slides[n].querySelector(".slide-inner").style.transition =
              e + "ms");
      }
    }
  });
  e(".slide-bg-image").each(function (t) {
    e(this).attr("data-background") &&
      e(this).css(
        "background-image",
        "url(" + e(this).data("background") + ")"
      );
  });
  var a,
    s,
    r = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0
    });
  function l() {
    if (e(".sortable-gallery .gallery-filters").length) {
      var t = e(".gallery-container");
      t.isotope({
        filter: "*",
        animationOptions: { duration: 750, easing: "linear", queue: !1 }
      }),
        e(".gallery-filters li a").on("click", function () {
          e(".gallery-filters li .current").removeClass("current"),
            e(this).addClass("current");
          var n = e(this).attr("data-filter");
          return (
            t.isotope({
              filter: n,
              animationOptions: { duration: 750, easing: "linear", queue: !1 }
            }),
            !1
          );
        });
    }
  }
  e(".fancybox").length &&
    e(".fancybox").fancybox({
      openEffect: "elastic",
      closeEffect: "elastic",
      wrapCSS: "project-fancybox-title-style"
    }),
    e(".video-play-btn").length &&
      e(".video-play-btn").on("click", function () {
        return (
          e.fancybox({
            href: this.href,
            type: e(this).data("type"),
            title: this.title,
            helpers: { title: { type: "inside" }, media: {} },
            beforeShow: function () {
              e(".fancybox-wrap").addClass("gallery-fancybox");
            }
          }),
          !1
        );
      }),
    e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1
    }),
    e(".popup-gallery").length &&
      e(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: { enabled: !0 },
        zoom: {
          enabled: !0,
          duration: 300,
          easing: "ease-in-out",
          opener: function (e) {
            return e.is("img") ? e : e.find("img");
          }
        }
      }),
    l(),
    (function () {
      if (e(".masonry-gallery").length) {
        var t = e(".masonry-gallery").masonry({
          itemSelector: ".grid-item",
          columnWidth: ".grid-item",
          percentPosition: !0
        });
        t.imagesLoaded().progress(function () {
          t.masonry("layout");
        });
      }
    })(),
    e(".site-header .navigation").length &&
      ((a = e(".site-header .navigation")),
      (s = "sticky-header"),
      a
        .addClass("original")
        .clone()
        .insertAfter(a)
        .addClass(s)
        .removeClass("original"));
  var c = "";
  if (e("#clock").length) {
    var d = e("#clock").data("date");
    e("#clock").countdown(d.replace(/-/g, "/"), function (t) {
      if ("stoped" == t.type) {
        var n = new Date(e("#clock").data("date"));
        n.setHours(0),
          n.setMinutes(0),
          n.setSeconds(0),
          n.setMilliseconds(0),
          setInterval(function () {
            !(function (t) {
              var n = Date(),
                i = (Date.parse(n) - Date.parse(t)) / 1e3,
                o = Math.floor(i / 86400);
              o < 10 && (o = "0" + o), (i %= 86400);
              var a = Math.floor(i / 3600);
              a < 10 && (a = "0" + a), (i %= 3600);
              var s = Math.floor(i / 60);
              s < 10 && (s = "0" + s), (i %= 60) < 10 && (i = "0" + i);
              var r =
                '<div class="box"><div>' +
                o +
                "</div> <span>" +
                e("#clock").data("text-day") +
                '</span></div><div class="box"><div>' +
                a +
                "</div> <span>" +
                e("#clock").data("text-hour") +
                '</span> </div><div class="box"><div>' +
                s +
                "</div> <span>" +
                e("#clock").data("text-minute") +
                '</span> </div><div class="box"><div>' +
                i +
                "</div> <span>" +
                e("#clock").data("text-second") +
                "</span></div>";
              e("#clock").html(r);
            })(n);
          }, 1e3);
      } else
        e(this).html(
          t.strftime(
            '<div class="box"><div>%D</div> <span>' +
              e("#clock").data("text-day") +
              '</span> </div><div class="box"><div>%H</div> <span>' +
              e("#clock").data("text-hour") +
              '</span> </div><div class="box"><div>%M</div> <span>' +
              e("#clock").data("text-minute") +
              '</span> </div><div class="box"><div>%S</div> <span>' +
              e("#clock").data("text-second") +
              "</span> </div>"
          )
        );
    });
  }
  if (
    (e("#video-background").length &&
      e("#video-background").YTPlayer({
        showControls: !1,
        playerVars: {
          modestbranding: 0,
          autoplay: 1,
          controls: 1,
          showinfo: 0,
          wmode: "transparent",
          branding: 0,
          rel: 0,
          autohide: 0,
          origin: window.location.origin
        }
      }),
    e("input[name='product-count']").length &&
      e("input[name='product-count']").TouchSpin({ verticalbuttons: !0 }),
    e(".shop-single-slider").length &&
      (e(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".slider-nav"
      }),
      e(".slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".slider-for",
        focusOnSelect: !0,
        prevArrow: '<i class="nav-btn nav-btn-lt ti-arrow-left"></i>',
        nextArrow: '<i class="nav-btn nav-btn-rt ti-arrow-right"></i>',
        responsive: [
          { breakpoint: 500, settings: { slidesToShow: 3, infinite: !0 } },
          { breakpoint: 400, settings: { slidesToShow: 2 } }
        ]
      })),
    e(".header-search-form-wrapper").length)
  ) {
    var u = e(".search-toggle-btn"),
      h = e(".header-search-form"),
      p = e("body");
    u.on("click", function (e) {
      h.toggleClass("header-search-content-toggle"), e.stopPropagation();
    }),
      p
        .on("click", function () {
          h.removeClass("header-search-content-toggle");
        })
        .find(h)
        .on("click", function (e) {
          e.stopPropagation();
        });
  }
  if (e(".mini-cart").length) {
    var g = e(".cart-toggle-btn"),
      m = e(".mini-cart-content");
    p = e("body");
    g.on("click", function (e) {
      m.toggleClass("mini-cart-content-toggle"), e.stopPropagation();
    }),
      p
        .on("click", function () {
          m.removeClass("mini-cart-content-toggle");
        })
        .find(m)
        .on("click", function (e) {
          e.stopPropagation();
        });
  }
  if (
    (e(".odometer").length &&
      (e(".odometer").appear(),
      e(document.body).on("appear", ".odometer", function (t) {
        e(".odometer").each(function () {
          var t = e(this).attr("data-count");
          e(this).html(t);
        });
      })),
    e(".post-slider".length) &&
      e(".post-slider").owlCarousel({
        mouseDrag: !1,
        smartSpeed: 500,
        margin: 30,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="fi flaticon-back"></i>',
          '<i class="fi flaticon-next"></i>'
        ],
        dots: !1,
        items: 1
      }),
    e(".project-single-slider".length) &&
      e(".project-single-slider").owlCarousel({
        mouseDrag: !1,
        smartSpeed: 500,
        margin: 30,
        loop: !0,
        nav: !0,
        navText: [
          '<i class="fi flaticon-back"></i>',
          '<i class="fi flaticon-next"></i>'
        ],
        dots: !1,
        items: 1
      }),
    e(".faq-accordion".length))
  ) {
    e(".panel");
    e(".panel-heading > a").each(function () {
      var t = e(this);
      t.on("click", function () {
        t.parents(".panel").addClass("active-bg-color"),
          t.parents(".panel").siblings().removeClass("active-bg-color");
      });
    });
  }
  e("#wish-form").length &&
    e("#wish-form").validate({
      rules: {
        name: { required: !0, minlength: 5 },
        content: { required: !0, minlength: 10 },
        email: { required: !1, email: !0 }
      },
      messages: {
        name: {
          required: "Vui lòng nhập tên của bạn.",
          minlength: "Tên phải lớn hơn 5 ký tự."
        },
        content: {
          required: "Vui lòng nhập lời chúc.",
          minlength: "Lời chúc phải lớn hơn 10 ký tự."
        },
        email: { email: "Địa chỉ email không hợp lệ." }
      },
      submitHandler: function (t) {
        return (
          e("#loader").css("display", "inline-block"),
          e.ajax({
            type: "POST",
            url: "http://localhost:3001/api/wish",
            data: e(t).serialize(),
            success: function (n) {
              e("#loader").hide(),
                n.error
                  ? (e("#error").html(n.message).slideDown("slow"),
                    setTimeout(function () {
                      e("#error").slideUp("slow");
                    }, 5e3))
                  : (e("#success").html(n.message).slideDown("slow"),
                    setTimeout(function () {
                      e("#success").slideUp("slow");
                    }, 4e3)),
                t.reset();
            },
            error: function () {
              e("#loader").hide(),
                e("#error").slideDown("slow"),
                setTimeout(function () {
                  e("#error").slideUp("slow");
                }, 5e3);
            }
          }),
          !1
        );
      }
    }),
    e("#contact-form").length &&
      e("#contact-form").validate({
        rules: {
          name: { required: !0, minlength: 2 },
          email: "required",
          guest: { required: !0 },
          services: { required: !0 }
        },
        messages: {
          name: "Please enter your name",
          email: "Please enter your email",
          guest: "Select your number of guest",
          services: "Select your service"
        },
        submitHandler: function (t) {
          return (
            e("#loader").css("display", "inline-block"),
            e.ajax({
              type: "POST",
              url: "mail-contact.php",
              data: e(t).serialize(),
              success: function () {
                e("#loader").hide(),
                  e("#success").slideDown("slow"),
                  setTimeout(function () {
                    e("#success").slideUp("slow");
                  }, 3e3),
                  t.reset();
              },
              error: function () {
                e("#loader").hide(),
                  e("#error").slideDown("slow"),
                  setTimeout(function () {
                    e("#error").slideUp("slow");
                  }, 3e3);
              }
            }),
            !1
          );
        }
      }),
    e(window).on("load", function () {
      var n, o, a, s, c, d;
      e(".preloader").length &&
        e(".preloader")
          .delay(100)
          .fadeOut(500, function () {
            r.init();
          }),
        t(),
        i(),
        e(".couple-section").length &&
          ((n = e(".couple-section .img-holder")),
          (o = e(".couple-section .details")),
          (a = n),
          (s = o),
          (c = n.innerHeight()),
          (d = o.innerHeight()),
          c > d
            ? s.css({ height: c + 1 + "px" })
            : a.css({ height: d + 1 + "px" })),
        l();
    }),
    e(window).on("scroll", function () {
      var t, n, i;
      e(".site-header").length &&
        ((t = e(".site-header .navigation")),
        (n = "sticky-on"),
        (i = e(window).scrollTop()),
        e(".site-header .navigation"),
        e(window).scrollTop() > 1e3
          ? i > c
            ? t.removeClass(n)
            : t.addClass(n)
          : t.removeClass(n),
        (c = i));
    }),
    e(window).on("resize", function () {
      n(),
        clearTimeout(e.data(this, "resizeTimer")),
        e.data(
          this,
          "resizeTimer",
          setTimeout(function () {
            i();
          }, 200)
        );
    });
})(window.jQuery);
