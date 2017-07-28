
function admin(title,sentence,content){
    this.title = title;
    this.sentence = sentence;
    this.content = content;
    /*this.send = function(){
        $('.title').text(this.title);
        $('.sentence').text(this.sentence);
        $('.content').text(this.content);
    }*/
}
function product(){
}
$('#button').click(function(){
    var newadmin = new admin($('#title').val(),$('#sentence').val(),$('#content').val());
    newadmin.send();
    $('.card').show('slow')
});
