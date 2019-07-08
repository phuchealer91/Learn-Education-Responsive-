$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.navbar-menu').toggleClass('active');
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
    // $(document).click(function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass("active"); 
    // })
    // $(".navbar-menu > ul").hover(function(){}, 
    // function(){
    //     $('ul',this).fadeOut(300);
    // }); 

})
// $('html').click(function() {
//     // Hide the menus if visible.
//   });
  
//   $('#menucontainer').click(function(event){
//     event.stopPropagation();
//   });
// function show-menu(){
//     document.getElementsByClassName('sub-menu').style.display = "none";
// }
// $(document).ready(function(){
//     $('html').click(function() {
//     $('.sub-menu').removeClass('active');
//     });
    
    
//        $('.sub-menu').on('click', function(event){
//      event.stopPropagation();
//            // Check if active class is there and remove it if it is
//                if($( this ).hasClass( "active" )){
//                    $(this).removeClass('active');
//                }
//                else{
//                // else just remove all other opened tabs and add the needed one
//                    $('.sub-menu').removeClass('active');
//                    $(this).toggleClass('active');
//                }   		
//        });
      
//       // removing active class if clicked anywhere else ??
    
//     });