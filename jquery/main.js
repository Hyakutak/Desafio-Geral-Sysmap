$(document).ready(() => {
    // Funcao de click do botao
    $('#send').click(() => {
        // Impreime valores solicitados (Nome, E-mail e Enviar)
        const name = $('#nome');
        const email = $('#email');
        const send = $('#send');
        console.log(`Nome: ${name.val()} E-mail: ${email.val()} Botao: ${send.val()}`);
    });
    // Funcao para desabilitar o botao
    $(document).ready(() => {
        $('#send').prop("disabled", true);
        $('#salary').on('change', function() {
            if($(this).val() != '') {
                $('#send').prop("disabled", false);
            } else {
                $('#send').prop("disabled", true);
            }
        });
    });
    // Funcao mascara do campo salario
    $(function(){
        $("#salary").maskMoney({
            prefix: 'R$ ',
            allowNegative: true,
            thousands: '.',
            decimal: ','
        });
    });
});

const userAlert = () => {
    // Verifica se o usuario deseja ser alertado
    const alert = $('#alert').is(':checked');
    if(alert) {
        console.log('o usuário deve ser alertado');
    } else {
        console.log('o usuário não deseja ser alertado');
    }
}
const verifica = () => {
    // Verifica se os inputs estao vazios
    const name = $('#nome');
    const email = $('#email');
    const message = $('#msg');
    if($(name).val() == "" && $(email).val() == "" && $(message).val() == ""){
        $(name).css("border", "1px solid red");
        $(email).css("border", "1px solid red");
        $(message).css("border", "1px solid red");
    }
}
