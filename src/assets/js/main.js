(function ($) {
  "use strict";
  
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    
  // ============== Mobile Nav Menu Dropdown Js Start =======================
  function toggleSubMenu() {
    if ($(window).width() <= 991) {
      $('.has-submenu').off('click').on('click', function () {
        $(this).toggleClass('active').siblings('.has-submenu').removeClass('active').find('.nav-submenu').slideUp(300);
        $(this).find('.nav-submenu').stop(true, true).slideToggle(300);
      });
    } else {
      $('.has-submenu').off('click'); 
    }
  }

  toggleSubMenu();
  $(window).resize(toggleSubMenu);
  // ============== Mobile Nav Menu Dropdown Js End =======================
    
  // ===================== Scroll Back to Top Js Start ======================
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
  // ===================== Scroll Back to Top Js End ======================

  
// ========================== add active class to navbar menu current page Js Start =====================
  function dynamicActiveMenuClass(selector) {
    let FileName = window.location.pathname.split("/").reverse()[0];

    // If we are at the root path ("/" or no file name), keep the activePage class on the Home item
    if (FileName === "" || FileName === "index.html") {
      // Keep the activePage class on the Home link
      selector.find("li.nav-menu__item.has-submenu").eq(0).addClass("activePage");
    } else {
      // Remove activePage class from all items first
      selector.find("li").removeClass("activePage");

      // Add activePage class to the correct li based on the current URL
      selector.find("li").each(function () {
        let anchor = $(this).find("a");
        if ($(anchor).attr("href") == FileName) {
          $(this).addClass("activePage");
        }
      });

      // If any li has activePage element, add class to its parent li
      selector.children("li").each(function () {
        if ($(this).find(".activePage").length) {
          $(this).addClass("activePage");
        }
      });
    }
  }

  if ($('ul').length) {
    dynamicActiveMenuClass($('ul'));
  }
// ========================== add active class to navbar menu current page Js End =====================


// ========================== Set Language in dropdown Js Start =================================
$('.lang-dropdown li').each(function () {
  var thisItem = $(this); 

  thisItem.on('click', function () {
    const listText = thisItem.text().trim(); // Get the text of the clicked item
    const listImageSrc = thisItem.find('img').attr('src'); // Get the image source of the clicked item

    // Set the selected text and image
    const selectedTextContainer = thisItem.closest('.group-item').find('.selected-text');
    selectedTextContainer.contents().last().replaceWith(listText); // Update the text (after the image)
    selectedTextContainer.find('img').attr('src', listImageSrc); // Update the image
  });
});
// ========================== Set Language in dropdown Js End =================================

  
// ========================== Add Attribute For Bg Image Js Start ====================
$(".bg-img").css('background', function () {
  var bg = ('url(' + $(this).data("background-image") + ')');
  return bg;
});
// ========================== Add Attribute For Bg Image Js End =====================


// ============================ Swiper Slider Js Start ===========================
var menu = ['Air Freight', 'Ocean Freight', 'Land Transport']
var mySwiper = new Swiper ('.banner-slider', {
  loop: true,
  speed: 1500,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
// ============================ Swiper Slider Js End ===========================


// ============================ AOS Js Start ===========================
AOS.init();
// ============================ AOS Js End ===========================


// ============================ Features Item Js Start ===========================
$('.features-item').on('mouseenter', function () {
  $('.features-item').removeClass('bg-white common-shadow-two');
  $(this).addClass('bg-white common-shadow-two');
});
// ============================ Features Item Js End ===========================


// ============================ Animated Radial Progress Bar Js Start ===========================
$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});
// ============================ Animated Radial Progress Bar Js End ===========================


// ========================= Counter Up Js Start ===================
const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains('is-visible')) {
      counterUp(el, {
        duration: 2000,
        delay: 16,
      });
      el.classList.add('is-visible');
    }
  });
};
const IO = new IntersectionObserver(callback, { threshold: 1 });


// Counter
const counter = document.querySelector('.counter');
if (counter) {
  IO.observe(counter);
}
// ========================= Counter Up Js End ===================


// ========================= Add Class To transport way item Js Start ===================
$('.transport-way-item').on('mouseenter', function () {
  $('.transport-way-item').find('.transport-way-item__icon').removeClass('bg-main-two-600');
  $(this).find('.transport-way-item__icon').addClass('bg-main-two-600');
});
// ========================= Add Class To transport way item Js End ===================


// ========================= magnific Popup Js Start =====================
$('.play-button').magnificPopup({
  type:'iframe',
  removalDelay: 300,
  mainClass: 'mfp-fade',
});
// ========================= magnific Popup Js End =====================



  // ================== Password Show Hide Js Start ==========
  // $(".toggle-password").on('click', function() {
  //   $(this).toggleClass("active");
  //   var input = $($(this).attr("id"));
  //   if (input.attr("type") == "password") {
  //     input.attr("type", "text");
  //     $(this).removeClass('ph-bold ph-eye-closed');
  //     $(this).addClass('ph-bold ph-eye');
  //   } else {
  //     input.attr("type", "password");
  //       $(this).addClass('ph-bold ph-eye-closed');
  //   }
  // });
  // ========================= Password Show Hide Js End ===========================

  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
    $(window).on("load", function(){
      $('.preloader').fadeOut(); 
    })
    // ========================= Preloader Js End=====================

    // ========================= Header Sticky Js Start ==============
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 260) {
        $('.header').addClass('fixed-header');
      }
      else {
          $('.header').removeClass('fixed-header');
      }
    }); 
    // ========================= Header Sticky Js End===================

})(jQuery);
