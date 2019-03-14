// Check off specific Todos By clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X  to delete Todo
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  e.stopPropagation();
});

// Create a Todo
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    // grab a new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append(
      "<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li >"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
