(function (window) {
  'use strict';

  function SpeakHello() {}

  SpeakHello.prototype.sayHello = function (name) {
    console.log("Hello " + name);
  };

  window.$speakHello = new SpeakHello();

})(window);
