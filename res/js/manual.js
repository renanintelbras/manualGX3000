// para abrir/fechar menu lateral quando tela for menor que 992px
$(document).ready(function(){
    $("#toggleMenu").click(function(){
        $("#nav").toggleClass("menu");
        $(".overlay").toggleClass("active");
    });
});

// funções para indicar link ativo no menu lateral
if($('#nav').length){
    $('#nav').affix({
        offset: {     
          top: $('#nav').offset().top,
          bottom: ($('footer').outerHeight(true) + $('.application').outerHeight(true)) + 40
        }
    });
}

$('#nav').on('activate.bs.scrollspy', function () {
    item = $('#nav').find(".active").last();
    item.animatescroll({element: '#nav', padding:20});
});

$( function() {
    // Iniciando
    function acendeLedIniciando(){
            $('.led-iniciando').show();
    setTimeout(function(){ apagaLedIniciando() }, 5);
    }
    function apagaLedIniciando(){
            $('.led-iniciando').hide();
    setTimeout(function(){ acendeLedIniciando() }, 40);
    }
    acendeLedIniciando();

    // Aguardando rede
    function acendeLedAguardandoRede(){
            $('.led-aguardando-rede').show();
    setTimeout(function(){ apagaLedAguardandoRede() }, 50);
    }
    function apagaLedAguardandoRede(){
            $('.led-aguardando-rede').hide();
    setTimeout(function(){ acendeLedAguardandoRede() }, 50);
    }
    acendeLedAguardandoRede();

    // Configurando sistema
    function acendeLedConfigurandoSistema(){
            $('.led-configurando-sistema').show();
    setTimeout(function(){ apagaLedConfigurandoSistema() }, 200);
    }
    function apagaLedConfigurandoSistema(){
            $('.led-configurando-sistema').hide();
    setTimeout(function(){ acendeLedConfigurandoSistema() }, 200);
    }
    apagaLedConfigurandoSistema();

    // Aguardando VoIP
    function acendeLedAguardandoVoIP(){
            $('.led-aguardando-voip').show();
    setTimeout(function(){ apagaLedAguardandoVoIP() }, 300);
    }
    function apagaLedAguardandoVoIP(){
            $('.led-aguardando-voip').hide();
    setTimeout(function(){ acendeLedAguardandoVoIP() }, 300);
    }
    apagaLedAguardandoVoIP();

    // Operando normalmente
    function acendeLedOperandoNormalmente(){
            $('.led-operando-normalmente').show();
    setTimeout(function(){ apagaLedOperandoNormalmente() }, 500);
    }
    function apagaLedOperandoNormalmente(){
            $('.led-operando-normalmente').hide();
    setTimeout(function(){ acendeLedOperandoNormalmente() }, 1300);
    }
    apagaLedOperandoNormalmente();

    // Não inicializado
    $('.led-nao_inicializado').show();

    // Sem cartão SIM
    function acendeLedSemCartaoSim(){
            $('.led-sem-cartao-sim').show();
    setTimeout(function(){ apagaLedSemCartaoSim() }, 500);
    }
    function apagaLedSemCartaoSim(){
            $('.led-sem-cartao-sim').hide();
    setTimeout(function(){ acendeLedSemCartaoSim() }, 500);
    }
    apagaLedSemCartaoSim();

    // Conectado
    function acendeLedConectado(){
            $('.led-conectado').show();
    setTimeout(function(){ apagaLedConectado() }, 300);
    }
    function apagaLedConectado(){
            $('.led-conectado').hide();
    setTimeout(function(){ acendeLedConectado() }, 2700);
    }
    apagaLedConectado();

    // Ocupado
    $('.led-ocupado').show();

    // Trafegando dados
    function acendeLedTrafegandoDados(){
            $('.led-trafegando-dados').show();
    setTimeout(function(){ apagaLedTrafegandoDados() }, 300);
    }
    function apagaLedTrafegandoDados(){
            $('.led-trafegando-dados').hide();
    setTimeout(function(){ acendeLedTrafegandoDados() }, 300);
    }
    apagaLedTrafegandoDados();

     // Equipamento ligado
    $('.led-equipamento-ligado').show();

     // Equipamento desligado
    $('.led-equipamento-desligado').show();
});

// para indicar no menu superior qual manual ativo
$(document).ready(function(){
    var path = window.location.pathname;

    if (path.includes("manualHardware")){
        $("#op1").addClass("active");
    }
    else if (path.includes("manualGerWeb")){
        $("#op2").addClass("active");
    }
    else if (path.includes("manualOpeRamal")){
        $("#op3").addClass("active");
    }
});

// var $doc = $('html, body');
// $('a').click(function() {
//     $doc.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 200);
//     return false;
// });