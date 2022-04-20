$(document).ready(function () {

    $(".collapse").collapse("hide");

    $('.btnExibirMidia').click(function () {

        var base64 = $(this).attr('base64');
        var tipoMidia = $(this).attr('tipo')

        let midiaWindow = window.open("");
        if (tipoMidia === 'imagem') {
            midiaWindow.document.write("<img src=" + base64 + ">");
        }
        else {
            midiaWindow.document.write("<video controls src=" + base64 + ">Desculpe, mas seu navegador não suporta preview de vídeos em HTML5.</video>");
        }
    });

    $('.parteSumarioAplicar').click(function () {

        var idAbaParte = $(this).attr('nomeAba');
        $('.nav-tabs a[href="#' + idAbaParte + '"]').tab('show');

    });

    $('.concluirSituation').click(function () {

        $(this).closest(".panel").find(".accordion-parte").css("background-color", "rgb(40 214 40)");
        $(this).closest(".panel").find(".collapse").collapse("hide");
        $(this).hide();

        var porcentagemQuestao = $(this).attr('conclusao');
        var porcentagemAtual = $('#conclusaoAplicacao').attr("aria-valuenow");
        var porcentagemAtualizada = parseInt(porcentagemQuestao) + parseInt(porcentagemAtual);

        if (porcentagemAtualizada >= 100) {
            porcentagemAtualizada = 100;
            setTimeout(function () { finalizaAplicacao() }, 200);
        }

        atualizaProgressbar(porcentagemAtualizada);
    });
});

var atualizaProgressbar = function (porcentagem) {
    $('#conclusaoAplicacao').attr('aria-valuenow', porcentagem);
    $('#conclusaoAplicacao').css('width', porcentagem + '%');
    $('#conclusaoAplicacao').find("span").html(porcentagem + '%');
};