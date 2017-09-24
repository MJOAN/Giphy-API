
<div id="buttons">
    <button data-person="arnold schwarzenegger">
      I'll be back
    <button data-person="Maximus Decimus Meridius">
      What we do in life…echoes in eternity
    </button>
    <button data-person="michael j fox">
      My happiness grows in direct proportion to my acceptance,
      and in inverse proportion to my expectations.
    </button>
    <button data-person="william wallace">
      Every man dies, not every man really lives.
    </button>
    <button data-person="jason bourne">
    I mean, we're all trying to find out who the hell we are, aren't we?
  </button>




    <!-- STEP FOUR: go over the JavaScript with your partners, and explain the lines of code to each other. -->

  </div>

  <div id="gifs-appear-here">
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    $("button").on("click", function() {

      var person = $(this).attr("data-person");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");

            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
  </script>
</body>

</html>

