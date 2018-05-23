//This page I have left as it provides code for how to write a push notification to a mobile app.
//Interesting stuff to get stuck in a rabbit hole with

// import { Constants, Permissions, Notifications } from 'expo';

// //This is about pushing data to your device specifically but not connected to api's

// // Example server, implemented in Rails: https://git.io/vKHKv
// const PUSH_ENDPOINT = 'https://expo-push-server.herokuapp.com/tokens';

// export default (async function registerForPushNotificationsAsync() {
//   // Remote notifications do not work in simulators, only on device
//   if (!Constants.isDevice) {
//     return;
//   }

//   // Android remote notification permissions are granted during the app
//   // install, so this will only ask on iOS
//   let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

//   // Stop here if the user did not grant permissions
//   if (status !== 'granted') {
//     return;
//   }

//   // Get the token that uniquely identifies this device
//   let token = await Notifications.getExpoPushTokenAsync();

//   // POST the token to our backend so we can use it to send pushes from there
//   return fetch(PUSH_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       token: {
//         value: token,
//       },
//     }),
//   });
// });


//Not related to api's at all. Please ignore.