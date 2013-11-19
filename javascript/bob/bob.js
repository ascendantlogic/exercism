var Bob = function() {
  this.hey = function(what) {
    var isQuestion = function(message) {
      return message.match(/\?$/);
    }

    var isYelling = function(message) {
      if (message.match(/[a-zA-Z]/)) {
        return message === message.toUpperCase();
      }

      return false;
    }

    var isSilent = function(message) {
      return message.trim() === '';
    }

    if (isSilent(what)) return "Fine. Be that way!";
    if (isYelling(what)) return "Woah, chill out!";
    if (isQuestion(what)) return "Sure.";

    return "Whatever.";
  }
};

module.exports = Bob;