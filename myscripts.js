$("#move").click(function () {
  // $("#A").toggleClass("noScrollBar");
  $("#Z")
    .html($("#B").html())
    .css("height", $("#B").height() + "px")
    .toggle();
});

$("#Z").on("scroll", function () {
  $("#B").scrollTop($(this).scrollTop());
});

// alert("I am a boy");
