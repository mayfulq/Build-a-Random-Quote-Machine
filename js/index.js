const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


function getRandomColor(){
    let index=Math.round(Math.random()*colors.length);
    return colors[index];
}

function getQuote() {
    let color=getRandomColor();
    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random",
        function (data) {
            let content = data.quote;
            let author = '-- ' + data.author;
            $('.content').html(content);
            $('.author').html(author);
        });
         $("html body").animate({
        backgroundColor: color
      }, 1500);

}

$('.btn').click(getQuote);