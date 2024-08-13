var cursor = document.querySelector('#cursor');
var main = document.querySelector('#main');
var image = document.querySelector('#image');

main.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    }) 
});

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "GSAP";
    gsap.to(cursor,{
        scale:2,

    })
});
image.addEventListener("mouseleave", function(){
    cursor.innerHTML = "";
    gsap.to(cursor,{
        scale:1,
        
    })
})