

progressBar = gsap.to('.sc-visual .btn-auto svg',3,{
    ease:"none",
    'stroke-dashoffset': 0,
    paused:true,
})


const mainSlide1 = new Swiper('.sc-visual .swiper',{
    effect:"fade",
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    allowTouchMove: false,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    on:{
        "init":function(){
            progressBar.restart();
        },
        "slideChange":function(){
            if (!$('.sc-visual .btn-auto').hasClass('active')) {
                progressBar.restart();
            }
            progressBar.restart();
        }
    }
});



ScrollTrigger.create({
    trigger:".sc-visual",
    start:"0% 50%",
    end:"100% 90%",
    markers:false,
    onLeave:function(){
        $('.scroll').addClass('hide');
    },
    onEnterBack:function(){
        $('.scroll').removeClass('hide');
    },
})



$('.sc-visual .btn-auto').click(function(){
    if ($(this).hasClass('active')) {
        progressBar.restart();
        mainSlide1.autoplay.start();
    } else {
        progressBar.pause();
        mainSlide1.autoplay.stop();
    }
    $(this).toggleClass('active');
})



ScrollTrigger.create({
    trigger:".sc-intro",
    start:"0% 44%",
    end:"100% 50%",
    markers:false,
    toggleClass:"active",
})

$('.sc-intro').mousemove(function(e){
    const x = e.clientX;

    const result = -(x - $('.sc-intro').innerWidth())/20;



    gsap.to('.sc-intro .txt',{
        x:result,
    })

})




ScrollTrigger.create({
    trigger:".sc-ad",
    start:"0% 100%",
    end:"0% 50%",
    markers:false,
    toggleActions:"none play none none",
    onLeave:function(){
        $('.sc-ad').addClass('active');
    },
    onLeaveBack:function(){
        $('.sc-ad').removeClass('active');
    },
})

$('.sc-ad').mousemove(function(e){
    const x = e.clientX;
    const y = e.clientY;

    const result = (x - $('.sc-ad').innerWidth())/50;

    gsap.to('.sc-ad .thumb .move',{
        x:result
    })
})


ScrollTrigger.create({
    trigger:".sc-info",
    start:"0% 100%",
    end:"0% 50%",
    markers:false,
    toggleActions:"none play none none",
    onLeave:function(){
        $('.sc-info').addClass('active');
    },
    onLeaveBack:function(){
        $('.sc-info').removeClass('active');
    },
})









const recommendSlide = new Swiper('.sc-recommend .swiper',{
    centeredSlides:true,
    loop:true,
    spaceBetween:95,
    navigation:{
        prevEl:".prev",
        nextEl:".next",
    },
    speed:1000,
});