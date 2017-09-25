var caption, img, state, data, results;
var topics = ["engineering", "electrons", "photons", "Ohm's Law", "sensor technology", "engines", "CPU", "transistors", "circuits", "information theory", "E=MC^2", "CPU", "neutrino", "quark"];
var APIkey = "WrXZbvLFBbcOdunSWBG3md89agFdJE5y";
var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + APIkey + "&limit=10");


function generateButtons() {

    $("#engineering-view").empty();

    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>");

        button.addClass("btn");
        button.css("margin", "3px");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);

        $("#engineering-view").append(button);
    }
}

    $("button").on("click", function(event) {
        event.preventDefault();

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(data) {
            console.log(data);

            for (var i = 0; i < data[i].length; i++) {
        
                    var gifDiv = $("<div class='gif'>");

                    var rating = data[i].rating;
                    var r = $("<p>").text("Rating: " + rating);
                    gifDiv.append(r);

                    var img = $("<img>");

                    img.attr("src", data[i].images.fixed_height_still.url);
                    img.attr(data[i].images.fixed_height.url);
                    //img.attr(data[i].type);
                    img.attr("data-state");

                    gifDiv.append(r);
                    gifDiv.append(img);
                    $("#engineering-view").prepend(gifDiv); // APPENDS buttons at TOP in engineering view DIV
                }
        });
    });

    $(".gif").on("click", function() {

      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
      } else {
        $(this).attr("src", $(this).attr("data-still"));
      }
});

    $("#user-submit").on("click", function(event) {
        event.preventDefault();

        var userInput = $("#engineering-term").val().trim();
        topics.push(userInput);
        generateButtons();
});

$(document).on("click");

generateButtons();