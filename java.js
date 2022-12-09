$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        700:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})
function kirim(){
    Swal.fire(
        'Pesan Anda telah dikirim',
        'Silahkan menunggu balasan dari kami',
        'success'
      )
}
