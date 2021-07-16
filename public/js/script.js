$(document).on('submit','#form_contacto',function(e){
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
        url:'/cliente',
        method:'post',
        data:data,
        success:function(response){
            toastr.success(response['message'],'Gracias!',{
                "positionClass": "toast-top-right",
                "progressBar": true,
                "timeOut": "1500",
            });
            //recibir mensaje en pantalla de confirmacion
            //cerrar modal y limpiar campos
            $('form').trigger('reset');
            $('.modal').modal('hide');

        },error:function(error){
            toastr.danger('Error al Enviar','Lo siento!');
            $('form').trigger('reset');
            $('.modal').modal('hide');
        }
    });


    return false;
});