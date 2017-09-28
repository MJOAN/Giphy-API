var state, results, imageAnimateUrl, imageStillUrl;
var topics = ["engineering", "electrons", "photons", "Ohm's Law", "sensor technology", "engines", "CPU", "transistors", "circuits", "information theory", "E=MC^2", "CPU", "neutrino", "quark"];
var APIkey = "WrXZbvLFBbcOdunSWBG3md89agFdJE5y";


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
    $(".btn").on("click", function() {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr('data-name') + "&api_key=" + APIkey + "&limit=10";

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

                var rating = results[i].rating;
                var r = $("<p>").text("Rating: " + rating);
                giphDiv.append(r);

                var img = $("<img>");

                // create two var's for animated then still img url's
                var imgStillUrl = results[i].images.fixed_height_still.url;
                //var imgAnimateUrl = results[0].images.fixed_height.url;

                // create class giph to use later for onclick function()
                img.addClass("giph");
                // assign attributes animate and still to img
                img.attr("src", imgStillUrl);
                // if URL string has _s.gif at end remove and add .gif
                // otherwise 

                giphDiv.append(r);
                giphDiv.append(img);
                $("#engineering-giphs").prepend(giphDiv); // APPENDS buttons at TOP in engineering view DIV
            }
        });

        // create giph class onclick to still and animate img

              
        // create button function for user submit 
        $("#user-submit").on("click", function(event) {
            event.preventDefault();

            var userInput = $("#engineering-term").val().trim();
            topics.push(userInput);
            generateButtons();

        });
    });

    $("#engineering-giphs").on("click", '.giph', function() {

            // set this to current img clicked 
            var curURL = $(this).attr("src");
            var newURL = "";

            if (curURL.indexOf("_s.gif") !== -1) {
                newURL = curURL.replace("_s.gif", ".gif");
            } else {
               newURL = curURL.replace(".gif", "_s.gif");
            }

            $(this).attr("src", newURL);
            console.log(newURL);

        });
}

$(document).on("click");

generateButtons();









   












