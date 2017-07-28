function admin(title, sentence, content) {
    this.title = title;
    this.sentence = sentence;
    this.content = content;
    /*this.send = function(){
     $('.title').text(this.title);
     $('.sentence').text(this.sentence);
     $('.content').text(this.content);
     }*/
}
function product() {
    this.validateForm = function () {
        var newadmin = new admin($('#title').val(), $('#sentence').val(), $('#content').val());
        var validateTitle = $('#title').val();
        var validateSentence = $('#sentence').val();
        var validateContent = $('#content').val();
        var exp = /([a-z|A-Z|0-9])/gi;
        var textExp = /([a-z|A-Z|0-9!?-_@])/gi;
        if (!exp.test(validateTitle) || validateTitle == '') {
            //$(".valTitle").html("<div class='btn btn-danger'>Vous n'avez pas rentrer un champ valide</div>");
            $(".valTitle").slideDown(500, function(){
                setTimeout(function(){
                    $(".valTitle").slideUp(500);
                },5000);
            });
        }else if(!exp.test(validateSentence) || validateSentence == ''){
            //$(".valSentence").html("<div class='btn btn-danger'>Vous n'avez pas rentrer un champ valide</div>");
            $(".valSentence").slideDown(500, function(){
                setTimeout(function(){
                    $(".valSentence").slideUp(500);
                },5000);
            });
        }else if (!textExp.test(validateContent) || validateContent == ''){
            $(".valContent").slideDown(500, function(){
                setTimeout(function(){
                    $(".valContent").slideUp(500);
                },5000);
            });
        }else{
            var card = "<div class='card col-md-3 offset-3' id='card'><div class='card-block'><h4 class='card-title title'>"+newadmin.title+"</h4>"+
                "<p class='card-text sentence'>"+newadmin.sentence+"</p><p class='card-text content'>"+newadmin.content+"</p></div></div>"
            $('.card-response').append(card).hide().show('slow');

        }
    }

    //$('.card-block').append("<h4 class='card-title title'>"+newadmin.title+"</h4>");
}
$('#button').click(function () {
    var prod = new product()
    prod.validateForm();
    $('#title').val('');
    $('#sentence').val('');
    $('#content').val('')
});
