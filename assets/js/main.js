(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
        onePage: true,
    });

       $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "19920",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

     $documentOn.on("click", ".mean-expand", function () {
        let icon = $(this).find("i");

        if (icon.hasClass("fa-plus")) {
            icon.removeClass("fa-plus").addClass("fa-minus"); 
        } else {
            icon.removeClass("fa-minus").addClass("fa-plus"); 
        }
    });

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

      /* ================================
       Parallaxie Js Start
    ================================ */

      if ($('.parallaxie').length && $(window).width() > 991) {
          if ($(window).width() > 768) {
              $('.parallaxie').parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }

      /* ================================
      Hover Active Js Start
    ================================ */

    $(".service-box-items, .career-waypoints-list li, .cta-content1 a, .work-positions-items").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".service-box-items, .career-waypoints-list li, .cta-content1 a, .work-positions-items").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

    /* ================================
      Brand Slider Js Start
    ================================ */

    if ($('.brand-slider-2').length > 0) {
      const brandSlider2 = new Swiper(".brand-slider-2", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".array-next",
              prevEl: ".array-prev",
          },
          breakpoints: {
              1399: {
                  slidesPerView: 5,
              },
              1199: {
                  slidesPerView: 5.5,
              },
              991: {
                  slidesPerView: 4.5,
              },
              767: {
                  slidesPerView: 3.3,
              },
              575: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1.6,
              },
          },
      });
    }
    /* ================================
      Testimonial Slider Js Start
    ================================ */

    if ($('.testimonial-slider').length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
          spaceBetween: 16,
          speed: 1300,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".array-next",
              prevEl: ".array-prev",
          },
          breakpoints: {
              1399: {
                  slidesPerView: 3,
              },
              1199: {
                  slidesPerView: 2.4,
              },
              991: {
                  slidesPerView: 2,
              },
              767: {
                  slidesPerView: 1.2,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

    /* ================================
      Project Slider Js Start
    ================================ */
     if ($('.project-slider').length > 0) {
      const projectSlider = new Swiper(".project-slider", {
          spaceBetween: 16,
          speed: 1300,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".array-next",
              prevEl: ".array-prev",
          },
          breakpoints: {
              1399: {
                  slidesPerView: 3,
              },
              1199: {
                  slidesPerView: 2,
              },
              991: {
                  slidesPerView: 2,
              },
              767: {
                  slidesPerView: 1.6,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

     if ($('.project-slider-10').length > 0) {
      const projectSlider10 = new Swiper(".project-slider-10", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          navigation: {
              nextEl: ".array-next",
              prevEl: ".array-prev",
          },
          breakpoints: {
              1399: {
                  slidesPerView: 2.5,
              },
              1199: {
                  slidesPerView: 2,
              },
              991: {
                  slidesPerView: 3,
              },
              767: {
                  slidesPerView: 2,
              },
              575: {
                  slidesPerView: 1,
              },
              0: {
                  slidesPerView: 1,
              },
          },
      });
    }

    if ($('.project-slider-6').length > 0) {
    const ProjectSlider6 = new Swiper(".project-slider-6", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

    /* ================================
      Comprehensive Service Box Js Start
    ================================ */

    if (document.querySelectorAll(".comprehensive-items").length) {
    const comprehensiveItems = document.querySelectorAll(".comprehensive-items");

    comprehensiveItems.forEach((box) => {
        const hoverImg = box.querySelector(".hover-image");
        if (!hoverImg) return;

        box.addEventListener("mousemove", (event) => {
        const rect = box.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hoverImg.style.opacity = "1";
        hoverImg.style.visibility = "visible";
        hoverImg.style.transform = `translate(${x}px, ${y}px) rotate(10deg)`;
        });

        box.addEventListener("mouseleave", () => {
        hoverImg.style.opacity = "0";
        hoverImg.style.visibility = "hidden";
        hoverImg.style.transform = `translateY(-50%) rotate(10deg)`;
        });
    });
    }


    /* ================================
      Feature Box Slider Js Start
    ================================ */
    if ($(".slide").length) {

            var index = 0;

            function updateSlider() {

                var $slides = $(".slide");
                var total = $slides.length;

                $slides.removeClass("active prev next");

                $slides.eq(index).addClass("active");
                $slides.eq((index - 1 + total) % total).addClass("prev");
                $slides.eq((index + 1) % total).addClass("next");
            }

            // Next
            $(document).on("click", ".array-next", function (e) {
                e.preventDefault();

                var total = $(".slide").length;
                index = (index + 1) % total;

                updateSlider();
            });

            // Prev
            $(document).on("click", ".array-prev", function (e) {
                e.preventDefault();

                var total = $(".slide").length;
                index = (index - 1 + total) % total;

                updateSlider();
            });

            updateSlider();
        }

  
    /* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $windowOn.on('scroll', function() {
        var windowScrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= documentHeight - 10) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });

    $documentOn.on('click', '#back-top', function(e) {
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: 0 }, 600);
        return false;
    });


     /* ================================
           Image Move scale Js Start
        ================================ */
        const $section = $('.hero-section1');
        const $target = $('.tilt_scale');

        if ($section.length && $target.length) {
            let requestId;

            $section.on('mousemove', function(e) {
                if (requestId) {
                    cancelAnimationFrame(requestId);
                }

                requestId = requestAnimationFrame(() => {
                    const offset = $section.offset();
                    const width = $section.outerWidth();
                    const height = $section.outerHeight();

                    const x = e.pageX - offset.left;
                    const y = e.pageY - offset.top;

                    const rotateY = ((x / width) - 0.5) * 20;
                    const rotateX = ((y / height) - 0.5) * -20;

                    $target.css({
                        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
                    });
                });
            });

            $section.on('mouseleave', function() {
                if (requestId) {
                    cancelAnimationFrame(requestId);
                }
                $target.css({
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
                });
            });
        }

        if (window.matchMedia("(min-width: 1200px)").matches) {
            document.querySelectorAll(".tv-desti-content").forEach((section) => {
                let items = section.querySelectorAll(".tv-desti-item");

                gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                        toggleActions: "play reverse play reverse",
                        markers: false,
                    },
                })
                .from(items, {
                    xPercent: 70,
                    opacity: 0,
                    ease: "back.out(2.5)",
                    duration: 1,
                    stagger: -0.2,
                });
            });
        }
	
    /* ================================
       GSAP & Title Animation Setup
    ================================ */
    if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });
    }

     /* ================================
       Text Anim Js Start
    ================================ */

      if (
    typeof SplitText !== "undefined" &&
        document.querySelectorAll(".split-title").length > 0
        ) {
    document.querySelectorAll(".split-title").forEach((title) => {

        // split by words + chars (IMPORTANT)
        const split = new SplitText(title, {
        type: "words,chars"
        });

        // add class to chars
        split.chars.forEach((char) => {
        char.classList.add("char");
        });

        // GSAP animation
        gsap.to(split.chars, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        clipPath: "inset(0% 0% -15% 0%)",
        x: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.03
        });

    });
    }

     if (typeof gsap !== "undefined") {
          gsap.registerPlugin(ScrollTrigger, SplitText);

          let mm = gsap.matchMedia();

          mm.add("(min-width: 1200px)", () => {

              let splits = [];

              // ===== tz-sub-tilte =====
              $('.tz-sub-tilte').each(function (index, el) {

              let split = new SplitText(el, {
                  type: "lines,words,chars",
                  linesClass: "split-line"
              });

              splits.push(split);

              gsap.set(split.chars, {
                  opacity: 0,
                  x: 7
              });

              gsap.to(split.chars, {
                  scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  end: "top 60%",
                  scrub: 1
                  },
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.2
              });
              });

              // ===== tz-itm-title =====
              $('.tz-itm-title').each(function (index, el) {

              let split = new SplitText(el, {
                  type: "lines,words,chars",
                  linesClass: "split-line"
              });

              splits.push(split);

              gsap.set(split.chars, {
                  opacity: 0.3,
                  x: -7
              });

              gsap.to(split.chars, {
                  scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  end: "top 60%",
                  scrub: 1
                  },
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.2
              });
              });

              // ðŸ”¥ MOST IMPORTANT PART
              ScrollTrigger.refresh();

              // ðŸ”¥ cleanup on breakpoint change
              return () => {
              splits.forEach(split => split.revert());
              ScrollTrigger.getAll().forEach(st => st.kill());
              };

          });
    }

     /* ================================
       Service Panel Js Start
    ================================ */

	let sv = gsap.matchMedia();
	sv.add("(min-width: 1199px)", () => {
		let tl = gsap.timeline();
		let projectpanels = document.querySelectorAll('.tp-service-panel');
		let baseOffset = 120;
		let offsetIncrement = 120;

		projectpanels.forEach((section, index) => {
			let topOffset = baseOffset + (index * offsetIncrement);
			tl.to(section, {
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: `top ${topOffset}px`,
					end: "bottom 80%",
					endTrigger: '.tp-service-pin',
					pinSpacing: false,
					markers: false,
				},
			});
		});
	});
  

    /* ================================
       Advance Ani Js Start
    ================================ */

    if (window.innerWidth > 1199) {
        const items = document.querySelectorAll(".advance-wrap .advance-item");
        if (items.length < 4) return;

        const advanced = gsap.timeline({
            scrollTrigger: {
            trigger: ".advance-wrap",
            start: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
            },
            defaults: {
            ease: "power1.out", //
            duration: 1,
            },
        });
        advanced
            .from(items[0], { xPercent: 100, rotate: -8 })
            .from(items[1], { xPercent: 30, rotate: 4.13 }, "<")
            .from(items[2], { xPercent: -30, rotate: -6.42 }, "<")
            .from(items[3], { xPercent: -60, rotate: -12.15 }, "<");
    }

    
    }); // End Document Ready Function


    /* ================================
       Preloader Js Start
    ================================ */
	const svg = document.getElementById("preloaderSvg");
	const preTl = gsap.timeline({
		onComplete: startAnimationAfterPreloader,
	});
	const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
	const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
	preTl.to(".preloader-heading .load-text , .preloader-heading .cont", {
		delay: 1.5,
		y: -100,
		opacity: 0,
	});
	preTl
		.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		})
		.to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
	preTl.to(".preloader", {
		delay: 1.5,
		y: -1500,
	});
	preTl.to(".preloader", {
		zIndex: -1,
		display: "none",
	});
	let svgText = document.querySelector("svg text");
	function startAnimationAfterPreloader() {
		if (svgText) {
			// Add a class or directly apply styles to trigger the stroke animation
			svgText.classList.add("animate-stroke");
		}
	}

     const $calendar = $('.calendar-wrapper');

    if (!$calendar.length) {
      return;
    }

    const $monthYear = $('#monthYear');
    const $daysContainer = $('#days');
    const $prevBtn = $('#prev');
    const $nextBtn = $('#next');

    let currentDate = new Date();
    let selectedDay = null;

    const monthNames = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];

    function renderCalendar() {
      $daysContainer.empty();

      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const today = new Date();

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      $monthYear.text(monthNames[month] + ' ' + year);

      for (let i = 0; i < firstDay; i++) {
        $daysContainer.append('<div class="day empty"></div>');
      }

      for (let day = 1; day <= lastDate; day++) {

        let classes = 'day';

        if (
          day === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          classes += ' today';
        }

        const dayHtml = `<div class="${classes}" data-day="${day}">${day}</div>`;
        $daysContainer.append(dayHtml);
      }
    }

    // Prev Month
    $prevBtn.on('click.calendar', function () {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });

    // Next Month
    $nextBtn.on('click.calendar', function () {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });

    // Day Click (Delegation)
    $daysContainer.on('click.calendar', '.day:not(.empty)', function () {
      $daysContainer.find('.day').removeClass('selected');
      $(this).addClass('selected');

      selectedDay = {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        day: $(this).data('day')
      };

      console.log('Selected Date:', selectedDay);
    });

    renderCalendar();


  
  
    
  
    /* ================================
       Single Page Smooth Anchor Scroll & ScrollSpy
    ================================ */
    var navSections = ["#hero", "#about", "#skills", "#experience", "#projects", "#education", "#contact"];

    function getHeaderOffset() {
      var header = document.querySelector("#header-sticky");
      return header ? header.offsetHeight + 15 : 95;
    }

    function scrollToSection(targetId) {
      if (!targetId || targetId === "#" || targetId === "#0") return;
      var $target = jQuery(targetId);
      if (!$target.length) return;

      var headerOffset = getHeaderOffset();

      if (targetId === "#hero") {
        jQuery("html, body").stop().animate({ scrollTop: 0 }, 500);
      } else {
        var targetTop = $target.offset().top - headerOffset;
        jQuery("html, body").stop().animate({ scrollTop: Math.max(0, targetTop) }, 500);
      }

      setActiveNav(targetId);
    }

    function setActiveNav(targetId) {
      if (!targetId) return;
      jQuery(".main-menu ul li a, .mean-nav ul li a").removeClass("active");
      jQuery(".main-menu ul li a[href='" + targetId + "'], .mean-nav ul li a[href='" + targetId + "']").addClass("active");
    }

    function updateScrollSpy() {
      var scrollPos = jQuery(window).scrollTop();
      var headerOffset = getHeaderOffset();
      var checkPosition = scrollPos + headerOffset + 50;

      var currentSection = "#hero";
      for (var i = 0; i < navSections.length; i++) {
        var $sec = jQuery(navSections[i]);
        if ($sec.length) {
          var secTop = $sec.offset().top;
          if (checkPosition >= secTop) {
            currentSection = navSections[i];
          }
        }
      }
      setActiveNav(currentSection);
    }

    jQuery(document).on("click", "a[href^=\"#\"]", function (e) {
      var targetId = jQuery(this).attr("href");
      if (targetId && targetId.length > 1 && jQuery(targetId).length) {
        e.preventDefault();

        // Close mobile drawer and overlays if open
        jQuery(".offcanvas__info").removeClass("info-open");
        jQuery(".offcanvas__overlay").removeClass("overlay-open");
        jQuery(".sidebar-sticky-item").fadeIn().addClass("active");

        if (jQuery(".mean-nav ul").length) {
          jQuery(".mean-nav ul").slideUp(200);
          jQuery(".meanmenu-reveal").removeClass("meanclose");
        }

        scrollToSection(targetId);
      }
    });

    // Back to top button integration
    $documentOn.on('click', '#back-top', function (e) {
      e.preventDefault();
      scrollToSection("#hero");
      return false;
    });

    // Hook scrollspy to window scroll and ScrollTrigger
    jQuery(window).on("scroll", updateScrollSpy);
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.addEventListener("scrollEnd", updateScrollSpy);
    }
    updateScrollSpy();

  })(jQuery); // End jQuery
