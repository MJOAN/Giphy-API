var state, results, imageAnimateUrl, imageStillUrl;
var topics = ["engineering", "electrons", "photons", "Ohm's Law", "sensor technology", "engines", "CPU", "transistors", "circuits", "information theory", "E=MC^2", "CPU", "neutrino", "quark"];
var APIkey = "WrXZbvLFBbcOdunSWBG3md89agFdJE5y";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + APIkey + "&limit=10";


// create button function for all topics listed
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

    // create button onclick function() to call API giphy data
    $(".btn").on("click", function(event) {

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            console.log(response);

            // create var for API response data
            var results = response.data;

            // loop through API giphy results assigning data to each img and div
            for (var i = 0; i < results.length; i++) {

                var giphDiv = $("<div class='giph'>");

                var rating = results[0].rating;
                var r = $("<p>").text("Rating: " + rating);
                giphDiv.append(r);

                var img = $("<img>");

                // create two var's for animated then still img url's
                var imgAnimateUrl = results[0].images.fixed_height.url;
                var imgStillUrl = results[0].images.fixed_height_still.url;

                // create class giph to use later for onclick function()
                img.addClass("giph");
                // assign attributes animate and still to img
                img.attr("src", imgStillUrl, imgAnimateUrl);

                giphDiv.append(r);
                giphDiv.append(img);
                $("#engineering-giphs").prepend(giphDiv); // APPENDS buttons at TOP in engineering view DIV
            }
        });

        // create giph class onclick to still and animate img
        $(".giph").on("click", function() {

            // set this to current img clicked 
            var state = $(this);

            if (state === imgStillUrl) {
                $(this).attr("src", imgAnimateUrl);
            } else {
                $(this).attr("src", imgStillUrl);    
            }
        });
              
        // create button function for user submit 
        $("#user-submit").on("click", function(event) {
            event.preventDefault();

            var userInput = $("#engineering-term").val().trim();
            topics.push(userInput);
            generateButtons();

        });
    });
}

$(document).on("click");

generateButtons();









   












