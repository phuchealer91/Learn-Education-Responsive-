// // Slider image 
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     navText: ["<img src='./image/prev.png'>","<img src='./image/next.png'>"],
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })
// Slider text
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoHeight:true
            },
            400:{
                items:1,
                nav:true,
              autoHeight:true
            },
            600:{
                items:1,
                nav:true,
              autoHeight:true
            },
            1000:{
                items:1,
                nav:false,
                loop:true,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:false,
              autoHeight:true
            }
        }
    })
