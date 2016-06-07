$(document).ready(function() {
var favoriteFlavors = ['oreo', 'strawberry', 'vanilla', 'rum-raisin'];
  for (var i = 0; i < favoriteFlavors.length; i += 1) {
    $(".favoriteFlavor").append("<li>" + favoriteFlavors[i] + "</li>");
    }
  })
 //
 // favoriteFlavors.forEach(function(favoriteFlavor) {
 //    $("#list").text(favoriteFlavors);
 //  });
 //  });
  // $(document).ready(function() {
  //   $("#blanks form").submit(function(event) {
  //     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
  //
  //     blanks.forEach(function(blank) {
  //       var userInput = $("input#" + blank).val();
  //       $("." + blank).text(userInput);
  //     })


  //     $("#story").show();
  //
  //     event.preventDefault();
  //   });
  // });
