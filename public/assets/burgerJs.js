
$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newStatus = $(this).data("newstatus");
  
      var newBurgerStatus = {
        devoured: newStatus
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerStatus
      }).then(
        function() {
          console.log("changed status to", newStatus);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=devoured]:checked").val().trim()
      };
  
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger");
          location.reload();
        }
      );
    });
  });
  