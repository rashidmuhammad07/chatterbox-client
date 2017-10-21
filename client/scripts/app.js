// YOUR CODE HERE:

var app = {
  friend: [],
  room: []
};

app.server = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages';
app.init = function() {};


app.send = function(message) {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'POST',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  }); 
 
};

app.fetch = function(message) {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'GET',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  }); 
 
};

app.clearMessages = function(message) {
  $('#chats').empty();
};

app.renderMessage = function(message) {
  var div = $('<div></div>');
 // $(div) = text()
  div.text(message);
  $('#chats').append(div);
};

app.renderRoom = function(room) {

  var div = $('<div></div>');
  div.text(room);
  $('#roomSelect').append(div);
};

app.handleUsernameClick = function () {
  
};


app.handleSubmit = function () {
  
};





  
