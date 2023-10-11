$(document).ready( () => {

    $("body").hide().fadeIn(1000);


    //secciones skillset
    $('[data-bs-toggle="tooltip"]').tooltip();





    //puntero personalizado
    $(document).mousemove(function(){
        $("html").css("cursor","none");

        var sigueme = $("#sigueme");
        sigueme.css("left",event.pageX)
                .css("top",event.pageY);
    });

    $("a, .btn").css("cursor","none");
    




    //scroll arriba de la web
    var subir = $("#subir");
    subir.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });





    //scroll links
    
    var link_about = $("#link_about");
    link_about.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#about").offset().top)
        }, 800);
    });


    var link_skillset = $("#link_skillset");
    link_skillset.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#about").offset().top)
        }, 800);
    });


    var link_servicios = $("#link_servicios");
    link_servicios.click((e) => {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#servicios").offset().top)
        }, 800);
    });


    var link_seccion_portafolio = $("#link_seccion_portafolio");
    link_seccion_portafolio.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#seccion-portafolio").offset().top)
        }, 800);
    });


    var link_formacion = $("#link_formacion");
    link_formacion.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#formacion").offset().top)
        }, 1000);
    });


    var link_contacto = $("#link_contacto, #link-contacto-tit");
    link_contacto.click(function(e){
        e.preventDefault();

        $("html, body").animate({
            scrollTop: parseInt($("#contacto").offset().top)
        }, 1000);
    });



    

    // Fecha footer.
    const year = new Date();
    document.getElementById("footerDate").innerHTML = year.getFullYear();





});