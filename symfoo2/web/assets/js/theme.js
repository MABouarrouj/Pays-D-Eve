;(function($) {
    "use strict";
    
    
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/
    var navbar=$('.header_menu_area');
	navbar.affix({
	  offset: {
	    top: 1
	  }
	});
	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});

	navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	  	
	});
    
    /*----------------------------------------------------*/
    /*  Home Slider js
    /*----------------------------------------------------*/
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
    function home_slider(){
        if ( $('#home-slider').length ){
            $("#home-slider").revolution({
                sliderType:"fullscreen",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                disableProgressBar:"on",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"erinyen",
                        enable:false,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:30,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:30,
                            v_offset:0
                        }
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"pause",
                    visible_area:"80%",
                    presize:false
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[796,796,580,480],
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                hideThumbsOnMobile:"on",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"on",
                    disableFocusListener:true,
                }
            });
        }
    }
    home_slider();
  
    /*----------------------------------------------------*/
    /*  Home Slider2 js
    /*----------------------------------------------------*/
    function home_slider2(){
        if ( $('#home-slider2').length ){
            $("#home-slider2").revolution({
                sliderType:"fullscreen",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"Gyges",
                        enable:true,
                        hide_onmobile:false,
                        hide_under:600,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    }
                },
                responsiveLevels:[1240,1199,767,480],
                visibilityLevels:[1240,1199,767,480],
                gridwidth:[1240,1199,767,480],
                gridheight:[796,796,580,580],
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                hideThumbsOnMobile:"on",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"on",
                    disableFocusListener:true,
                }
            });
        }
    }
    home_slider2();    
  
    /*----------------------------------------------------*/
    /*  Home Slider3 js
    /*----------------------------------------------------*/
    function home_slider3(){
        if ( $('#home-slider3').length ){
            $("#home-slider3").revolution({
                sliderType:"fullscreen",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"Gyges",
                        enable:false,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    },
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"uranus",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"right",
                        v_align:"bottom",
                        h_offset:75,
                        v_offset:50,
                        space:10,
                        tmp:'<span class="tp-bullet-inner"></span>'
                    }
                },
                responsiveLevels:[1240,991,767,480],
                visibilityLevels:[1240,991,767,480],
                gridwidth:[1240,991,767,500],
                gridheight:[765,765,600,600],
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                hideThumbsOnMobile:"on",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"on",
                    disableFocusListener:true,
                }
            });
        }
    }
    home_slider3(); 
  
    /*----------------------------------------------------*/
    /*  Abiut Slider js
    /*----------------------------------------------------*/
    function about_slider(){
        if ( $('#about-bg-slider').length ){
            $("#about-bg-slider").revolution({
                sliderType:"standard",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                disableProgressBar:"on",
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on"
                    },
                    arrows: {
                        style:"Gyges",
                        enable:false,
                        hide_onmobile:true,
                        hide_under:600,
                        hide_onleave:true,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:0,
                            v_offset:0
                        }
                    },
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"uranus",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"right",
                        v_align:"bottom",
                        h_offset:75,
                        v_offset:50,
                        space:10,
                        tmp:'<span class="tp-bullet-inner"></span>'
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"pause",
                    visible_area:"80%",
                    presize:false
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[372,372,372,372],
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                hideThumbsOnMobile:"on",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"on",
                    disableFocusListener:true,
                }
            });
        }
    }
    about_slider();

    /*----------------------------------------------------*/
    /*  Product Details Slider
    /*----------------------------------------------------*/
    function product_details(){
        if ( $('#product_details').length ){
            $("#product_details").revolution({
                sliderType:"fullscreen",
                jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    tabs: {
                        style:"hesperiden",
                        enable:true,
                        width:76,
                        height:76,
                        min_width:76,
                        wrapper_padding:0,
                        wrapper_color:"#ffffff",
                        wrapper_opacity:"1",
                        visibleAmount: 5,
                        hide_onmobile: false,
                        hide_onleave:false,
                        hide_delay:200,
                        direction:"horizontal",
                        span:false,
                        position:"outer-bottom",
                        space:22,
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:0
                    },
                    arrows: {
                        style:"Guys",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:778,
                        hide_onleave:false,
                        hide_delay:200,
                        hide_delay_mobile:1200,
                        tmp:'<div class="left-arrow"></div>',
                        left: {
                            h_align:"left",
                            v_align:"center",
                            h_offset:45,
                            v_offset:217
                        },
                        right: {
                            h_align:"right",
                            v_align:"center",
                            h_offset:45,
                            v_offset:217
                        }
                    },
                },
                responsiveLevels:[1240,1024,778,480],
                gridwidth:[470,470,470,470],
                gridheight:[470,470,470,470],
                lazyType:"smart",
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }
    }
    product_details();
    
    /*----------------------------------------------------*/
    /*  Skill Progress js
    /*----------------------------------------------------*/
    $(".skill_item").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
    
    /*----------------------------------------------------*/
    /*  Testimonial Slider
    /*----------------------------------------------------*/
    function download_content(){
        if ( $('.download_content, .testimonials_slider').length ){
            $('.download_content, .testimonials_slider').owlCarousel({
                loop:true,
                margin:0,
                items: 1,
                nav:true,
                autoplay: false,
                smartSpeed: 1500,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
            })
        }
    }
    download_content();
    
    /*----------------------------------------------------*/
    /*  Dwinload Mobile Slider
    /*----------------------------------------------------*/
    $(window).on('load', function(){
        function download_mobile(){
            if ( $('.download_moblile_slider').length ){
                $('.download_moblile_slider').owlCarousel({
                    loop:true,
                    margin:0,
                    items: 1,
                    nav:false,
                    autoplay: true,
                    smartSpeed: 1500,
                })
            }
        }
        download_mobile();
    });
    
    
    /*----------------------------------------------------*/
    /*  Blog Slider
    /*----------------------------------------------------*/
    function blog_slider(){
        if ( $('.blog_slider_inner').length ){
            $('.blog_slider_inner').owlCarousel({
                loop:true,
                margin:0,
                items: 4,
                nav:true,
                autoplay: true,
                smartSpeed: 1800,
                navContainer: '.blog_slider_inner',
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    450:{
                        items:2
                    },
                    700:{
                        items:3
                    },
                    900:{
                        items:4
                    }
                }
            })
        }
    }
    blog_slider();
    
    /*----------------------------------------------------*/
    /*  Adms Slider
    /*----------------------------------------------------*/
    function adms_slider(){
        if ( $('.slider_adms_active').length ){
            $('.slider_adms_active').owlCarousel({
                loop:true,
                margin:30,
                items: 4,
                nav:true,
                autoplay: true,
                smartSpeed: 1800,
                navText: ['<span>Previous<i class="fa fa-angle-left"></i></span>','<span><i class="fa fa-angle-right"></i>Next</span>'],
                responsive:{
                    0:{
                        items:1
                    },
                    430:{
                        items:2
                    },
                    730:{
                        items:4
                    }
                }
            })
        }
    }
    adms_slider();
    
    /*----------------------------------------------------*/
    /*  Members Slider
    /*----------------------------------------------------*/
    function members_slider(){
        if ( $('.r_members_inner').length ){
            $('.r_members_inner').owlCarousel({
                loop:true,
                margin:28,
                items: 6,
                nav:true,
                autoplay: true,
                smartSpeed: 1800,
                navContainer: '.r_members_inner',
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive:{
                    0:{
                        items:2
                    },
                    400:{
                        items:3
                    },
                    520:{
                        items:4
                    },
                    991:{
                        items:6
                    }
                }
            })
        }
    }
    members_slider();
    
    /*----------------------------------------------------*/
    /*  Sticky Stories Slider
    /*----------------------------------------------------*/
    function sticky_slider(){
        if ( $('.sticky_slider').length ){
            $('.sticky_slider').owlCarousel({
                loop:true,
                margin:30,
                items: 3,
                nav:true,
                autoplay: false,
                smartSpeed: 1800,
                navContainer: '.sticky_slider',
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    768:{
                        items:3
                    }
                }
            })
        }
    }
    sticky_slider();
    
    /*----------------------------------------------------*/
    /*  Sticky Stories Slider
    /*----------------------------------------------------*/
    function simillar_slider(){
        if ( $('.simillar_product_slider').length ){
            $('.simillar_product_slider').owlCarousel({
                loop:true,
                margin:30,
                items: 3,
                nav:true,
                autoplay: true,
                smartSpeed: 1800,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsive:{
                    0:{
                        items:1
                    },
                    440:{
                        items:2
                    },
                    680:{
                        items:3
                    }
                }
            })
        }
    }
    simillar_slider();
    
    
    /*----------------------------------------------------*/
    /*  Language Flag js 
    /*----------------------------------------------------*/
    function createByJson() {
        var jsonData = [					
            {description:'Choos your payment gateway', value:'', text:'Payment Gateway'},					
            {image:'../img/country-aus.png', description:'My life. My card...', value:'amex', text:'Amex'},
            {image:'../img/country-aus.png', description:'It pays to Discover...', value:'Discover', text:'Discover'},
            {image:'../img/country-aus.png', title:'For everything else...', description:'For everything else...', value:'Mastercard', text:'Mastercard'},
            {image:'../img/country-aus.png', description:'Sorry not available...', value:'cash', text:'Cash on devlivery', disabled:true},
            {image:'../img/country-aus.png', description:'All you need...', value:'Visa', text:'Visa'},
            {image:'../img/country-aus.png', description:'Pay and get paid...', value:'Paypal', text:'Paypal'}
        ];
        $("#byjson").msDropDown({byJson:{data:jsonData, name:'payments2'}}).data("dd");
    }
    $(document).ready(function(e) {		
    //no use
    try {
        var pages = $("#pages").msDropdown({on:{change:function(data, ui) {
            var val = data.value;
            if(val!="")
                window.location = val;
        }}}).data("dd");

        var pagename = document.location.pathname.toString();
        pagename = pagename.split("/");
        pages.setIndexByValue(pagename[pagename.length-1]);
        $("#ver").html(msBeautify.version.msDropdown);
    } catch(e) {
    //console.log(e);	
    }
    $("#ver").html(msBeautify.version.msDropdown);

    //convert
    $(".language_drop").msDropdown({roundedBorder:false});
        createByJson();
        $("#tech").data("dd");
    });
    function showValue(h) {
        console.log(h.name, h.value);
    }
    $("#tech").change(function() {
        console.log("by jquery: ", this.value);
    })
    
    /*----------------------------------------------------*/
    /*  Popup js
    /*----------------------------------------------------*/
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

        
    /*----------------------------------------------------*/
    /*  Popup Blur js
    /*----------------------------------------------------*/
    function offcanvas_from(){
        if ( $('.popup-with-zoom-anim').length ){
            $('.popup-with-zoom-anim').on('click',function(){
                if( $("body").hasClass('blur') ){
                    $("body").removeClass('blur')
                }
                else{
                    $("body").addClass('blur')
                }
                return false
            });
        }
    }
    offcanvas_from();
    
    $('body').on('click',function(){
        $("body").removeClass('blur')
    });
    
    
    /*----------------------------------------------------*/
    /*  Select js
    /*----------------------------------------------------*/
    /*Bootstrap Select picker*/
    $( document.body ).on( 'click', '.registration_form_s .btn-group .dropdown-menu li', function( event ) {

        window.location.href = $('a', this).attr('href');

        var $target = $( event.currentTarget );

        $target.closest( '.registration_form_s .form-group .btn-group' )
        .find( '[data-bind="label"]' ).text( $target.text() )
        .end()
        .children( '.registration_form_s .btn-group .dropdown-toggle' ).dropdown( 'toggle' );

        return false;

    });
    
    /*----------------------------------------------------*/
    /*  Date Picker js
    /*----------------------------------------------------*/
    $(".form_datetime").datetimepicker({format: 'dd-mm-yyyy hh:ii'});
    
    /*----------------------------------------------------*/
    /*  Counter up js
    /*----------------------------------------------------*/
    function counterup(){
        if ( $('.counter').length ){
            $('.counter').counterUp({
                delay: 20,
                time: 1000
            });
        }
    }
    counterup();
    
    /*----------------------------------------------------*/
    /*Date Time Picker*/
    /*----------------------------------------------------*/
    $('.datetimepicker4').datetimepicker();
    
    /*----------------------------------------------------*/
    /*Price select custome handle*/
    /*----------------------------------------------------*/
    $( function() {
        var handle = $( ".custom-handle, .custom-value" );
        $( "#slider-range-min" ).slider({
            range: "min",
            min: 1,
            max: 50,
            value: 42,
            create: function() {
                handle.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handle.text( ui.value );
            }
        });
    });
    
    $( function() {
        var handle = $( ".custom-handle, .custom-value" );
        $( "#slider-range-min2" ).slider({
            range: "min",
            min: 1,
            max: 50,
            value: 22,
            create: function() {
                handle.text( $( this ).slider( "value" ) );
            },
            slide: function( event, ui ) {
                handle.text( ui.value );
            }
        });
    });
    
    $(document).ready(function () { // <--- Added brackets around document
        var w = $('.left_inner_content').css("margin-left");
        $('.right_best_content').css("width", w); // <--- Removed $ from $w since your variable is w not $w
    });
    
    
    /*----------------------------------------------------*/
    /*Average Range slider*/
    /*----------------------------------------------------*/
    $( ".average" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 2, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( ".average" ).slider( "values", 0 ) +
      " - $" + $( ".average" ).slider( "values", 1 ) );
    
    
    /*----------------------------------------------------*/
    /*Price Select*/
    /*----------------------------------------------------*/
    $( "#price_select" ).slider({
      range: true,
      min: 0,
      max: 400,
      values: [ 50, 350 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + "                                                                             $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#price_select" ).slider( "values", 0 ) +
      "                                                                                $" + $( "#price_select" ).slider( "values", 1 ) );
    
    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/   
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
            el: '#mapBox',
            lat: $lat,
            lng: $lon,
            scrollwheel: false,
            scaleControl: true,
            streetViewControl: false,
            panControl: true,
            disableDoubleClickZoom: true,
            mapTypeControl: false,
            zoom: $zoom,
                styles: [
                  {
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  }
                ]
            });
        
            map.addMarker({
                lat: $markerLat,
                lng: $markerLon,
                icon: $marker,    
                infoWindow: {
                  content: $info
                }
            })
        }

 

})(jQuery)