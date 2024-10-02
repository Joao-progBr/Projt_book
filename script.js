$(document).ready(function(){
    const animate = $(".autor").click(function(){
        if(animate){
            const destino = $("#autor")
            $("html").animate({
                scrollTop: destino.offset().top
            }, 1000)
        }
    })

    const animate2 = $(".sobre-livro").click(function(){
        if(animate2){
            const destino = $("#livro")
            $("html").animate({
                scrollTop: destino.offset().top
            }, 1000)
        }
    })

    const animate3 = $(".leis").click(function(){
        if(animate3){
            const destino = $("#leis")
            $("html, body").animate({
                scrollTop: destino.offset().top
            }, 1000)
        }
    })

    // function scrollToDestination(triggerClass, targetId) {
    //     $(triggerClass).click(function() {
    //         const destino = $(targetId);
    //         $('html, body').animate({
    //             scrollTop: destino.offset().top
    //         }, 1000);
    //     });
    // }

    // // Chama a função genérica para cada elemento
    // scrollToDestination('.autor', '#autor');
    // scrollToDestination('.sobre-livro', '#livro');
    // scrollToDestination('.leis', '#leis');
})