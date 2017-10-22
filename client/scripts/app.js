// YOUR CODE HERE:

var app = {
 
};

app.server = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages';
app.init = function() {};


app.send = function(message) {
  // var data = {
  //   username: 'Guvvala',
  //   text: message,
  //   roomname: $('#roomSelect').val()
  // };
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'POST',
    data: message,
    //contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
      //app.sendmessage(data);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  }); 
 
};


app.fetch = function() {
  
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      //console.log('chatterbox: Message sent');
      app.filterRooms(data);
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
  var div = '<div class="chat"><div class="username" onclick = app.handleUsernameClick()>' + message.username + ':</div>' + message.text + '</div>';
 // $(div) = text()
  $('#chats').append(div);
};

app.appendRoom = function(roomName) {
  var htmlstr = '<option value=\"' + roomName + '\">' + roomName;
  $('#roomSelect').append(htmlstr);
};

app.renderRoom = function() {
  var roomName = $('#roomSelect').val();
  app.clearMessages();
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: this.server,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname === roomName && data.results[i].username !== undefined && data.results[i].text !== undefined) {
          app.renderMessage(data.results[i]);
        }
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  }); 

};

app.handleUsernameClick = function () {
  
};


app.handleSubmit = function () {
  // var newObj = {};
  // newObj.username = this.username;
  // newObj.room = this.roomname;
  // newObj.text = $('.submit').val();
  // console.log('hi');
  // app.send(newObj);
  console.log('sending message..');
  app.send($('#message').val());
};

app.filterRooms = function (obj) {
  var newObj = {};
  for (var i = 0; i < obj.results.length; i++) {
    var name = obj.results[i].roomname;
    if (!(name in newObj)) {
      newObj[name] = 1;
      app.appendRoom(name);
    }
  }
  //return newObj;
};

app.sendMessage = function(message) {
  var newObj = {};
  newObj.username = message.username;
  newObj.text = message.text;
  newObj.roomname = message.roomname;
  return newObj;
};










  
