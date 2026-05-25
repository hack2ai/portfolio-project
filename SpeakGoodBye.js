(function (window) {
  'use strict';

  function SpeakGoodBye() {}

  SpeakGoodBye.prototype.sayGoodBye = function (name) {
    console.log("Goodbye " + name);
  };

  window.$speakGoodBye = new SpeakGoodBye();

})(window);
