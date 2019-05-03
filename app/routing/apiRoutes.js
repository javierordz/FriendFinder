// Routes
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// Submit click
$("#submit").on("click", function(event) {
  event.preventDefault();

  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".selection").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    return isValid;
  }

  // Valid form creates data array, posts api/friends
  if (validateForm()) {
    var userData = {
      name: $("#name").val(),
      pic: $("#pic").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    $.post("/api/friends", userData, function(data) {
      $("#friendName").text(data.name);
      $("#friendPic").attr("src", data.pic);
      $("#friend-results").modal("toggle");
    });

  } else {
    alert("Please fill all fields to submit.");
  }
});