$(document).ready(function() {
  $("#favorites").submit(function(event) {
    var band = $("#band").val();
    var cocktail = $("#cocktail").val();
    var movie = $("#movie").val();
    var book = $("#book").val();
    var coffeePlace = $("#coffee").val();
    // console.log(band);
    // console.log(cocktail);
    // console.log(movie);
    // console.log(book);
    // console.log(coffeePlace);

    var favs = [band, cocktail, movie, book, coffeePlace];
    console.log(favs);
    var favs2 = [];
    var first = favs[1];
    var zeroth = favs[0];
    var second = favs[2];
    favs2.push(first, zeroth, second);

    // $("#empty-ul").text(favs2);

    $('#empty-ul li').each(function (index) {
        $(this).text(favs2[index]);
    });
    // alert(favs);



    event.preventDefault();
  });

});
