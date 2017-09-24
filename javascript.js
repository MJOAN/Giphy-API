var caption, state, data, results, giphDiv;
var topics = ["engineering", "electrons", "photons", "Ohm's Law", "sensor technology", "engines", "CPU", "transistors", "circuits", "information theory", "E=MC^2", "CPU", "neutrino", "quark"];
var APIkey = "WrXZbvLFBbcOdunSWBG3md89agFdJE5y";
var queryURL = ("http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + APIkey + "&limit=10");


function generateButtons() {

    $("#engineer-view").empty();

    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");

        button.addClass("btn");
        button.css("margin", "3px");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#engineer-view").append(button).prepend($("form"));
    }

    $(".btn").on("click", function(event) {
        event.preventDefault();

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {

        var result = response.data; 

        for (var i = 0; i < result.length; i++) {
        var imageUrl = result[i].images;
        var img = $("<img>");
        img.attr("src", imageUrl);
        img.addClass("gif");
        img.attr("data-still", result[i].images.fixed_height_still.url);
        img.attr("data-animate", result[i].images.fixed_height.url);
        img.attr("data-state", "still");

        var caption = result[i].caption;
        var c = $("<p>").text("Caption: " + caption);
        img.append(c);

        $("#engineer-view").append(img); // APPENDS buttons at TOP in engineering view DIV
            }
        });
    });

    $("img").on("click", function() {

      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

    $("#user-submit").on("click", function(event) {
        event.preventDefault();

        var userInput = $("#engineering-term").val().trim();
        topics.push(userInput);
        generateButtons();

    });
}
$(document).on("click");

generateButtons();