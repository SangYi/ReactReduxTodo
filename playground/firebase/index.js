import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDMX01KF2O6MEMOgS6seRI_8X8UFJnLWKI",
    authDomain: "redux-todo-app.firebaseapp.com",
    databaseURL: "https://redux-todo-app.firebaseio.com",
    storageBucket: "redux-todo-app.appspot.com",
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
