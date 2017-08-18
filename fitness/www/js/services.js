angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Classes', function() {

  var classes = [{
    id: 0,
    name: 'Gym'
  }, {
    id: 1,
    name: 'Pilates'
  }, {
    id: 2,
    name: 'Spin'
  }, {
    id: 3,
    name: 'Ping Pong'
  }, {
    id: 4,
    name: 'Yogo'
  }, {
    id: 5,
    name: 'HIIT'
  }];

  return {
    all: function() {
      return classes;
    },
    remove: function(woclass) {
      classes.splice(classes.indexOf(woclass), 1);
    },
    get: function(classId) {
      for (var i = 0; i < classes.length; i++) {
        if (classes[i].id === parseInt(classId)) {
          return classes[i];
        }
      }
      return null;
    }

  }

});
