jQuery('document').ready(function($){

    var menuboton = $('.icono_menu'),
        menu = $('.nav_menu ul');

        menuboton.click(function(){

            if(menu.hasClass('mostrar_menu')){

                menu.removeClass('mostrar_menu');

            }else{

                menu.addClass('mostrar_menu');
            }
                
    });
});