var caption, results, giphDiv; 
var topics = ["engineering", "electrons", "photons", "Ohms+Law", "sensor technology", "engines", "CPU",
    "transistors", "circuits", "information theory", "E=MC^2", "CPU", "neutrino", "quark"
];

var APIKey = "WrXZbvLFBbcOdunSWBG3md89agFdJE5y";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + APIKey + "&limit=10";

// function generateButtons() {
// $("#engineer-view").empty();
for (var i = 0; i < topics.length; i++) {

    var button = $("<button>");
    button.addClass("button");
    button.attr("data-name", topics[i]);
    button.text(topics[i]);
    $("#engineer-view").append(button);

}

$("button").on("click", function(event) {
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function(response) {

        var results = response.data;
        // var engineeringTerms = $(this).attr("data-name"); 

        // function generateDivs() {
        for (var i = 0; i < results.length; i++) {
            var giphDiv = $("<div>");

            var caption = results.caption;
            var r = $("<p>").text("Caption: " + caption);
            giphDiv.append(r);

            var imgURL = response.images;
            var img = $("<img>");
            img.attr("src", results[i].images.fixed_height_still.url);
            giphDiv.append(img);

            $("#engineer-view").prepend(giphDiv);
        }
    });
});


$("img").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element

    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");

    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});

/*      var results = response.data;
        var still = $(this).attr("src", results[i].images.fixed_height_still.url);
        var animate = $(this).attr("src", results[i].images.fixed_height.url);

        if (still) {
          $(this).attr("src", $(this).attr("src", animate));
        } else {
          $(this).attr("src", $(this).attr("src", still));
        }
});

  */
//. generateDivs();

/*$("#userinput-submit").on("click", function(event) {
  event.preventDefault();

  var userInput = $("#engineering-term").val().trim();
  topics.push(userInput);

  generateButtons();*/
/*
      $(document).on("click", "button", engineerGiphDiv);*/

/* generateButtons();*/