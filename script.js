// Module 4 - Assignment Solution
// Loop over names array and say Hello or Goodbye based on first letter

(function (window) {
  'use strict';

  // Array of names to loop over
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Jackie",
    "Duke"
  ];

  // Loop through the names array
  for (var i = 0; i < names.length; i++) {
    var name = names[i];

    // If the name starts with 'j' or 'J', say Goodbye; otherwise say Hello
    if (name.charAt(0).toLowerCase() === 'j') {
      $speakGoodBye.sayGoodBye(name);
    } else {
      $speakHello.sayHello(name);
    }
  }

})(window);
