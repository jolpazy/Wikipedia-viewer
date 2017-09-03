$(document).ready(function() {
    function submitter() {
      var item;
      item = $("#input").val();
      var url =
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        item +
        "&callback?";
      $.ajax({
        url: url,
        type: "GET",
        async: false,
        dataType: "jsonp",
        success: function(data) {
          var result = "";
          for (i = 0; i < data[1].length; i++) {
            result +=
              "<a target='blank' href=" +
              data[3][i] +
              "><p class= 'result'><i><strong>" +
              data[1][i] +
              "</strong></i><br>" +
              data[2][i] +
              "</p></a>";
          }
          $("#results").html(result);
        }, //succes
        error: function(err) {
          console.log(err);
        } //error
      }); //ajax
    } //submitter
  
    $("#input").keypress(function(key) {
      if (key.which == 13) {
        submitter();
      }
    }); //input enter function
  
    $("#submit").click(function() {
      submitter();
    }); //submit click
  }); //dc ready
  