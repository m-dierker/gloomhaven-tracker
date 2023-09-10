export const environment = {
  production: true,
  firebase: {
    projectId: "glo2mhaven-tracker",
    appId: "1:45893613327:web:f65ae60aa04c61c3f4307a",
    databaseURL: "https://glo2mhaven-tracker.firebaseio.com",
    storageBucket: "glo2mhaven-tracker.appspot.com",
    locationId: "us-central",
    apiKey: "AIzaSyChJ0kL_gSZmimsTpJFDZfhlns1K_rX5OI",
    authDomain: window.location.host.includes("simba.dog")
      ? "haven.simba.dog"
      : "gloomhaven.muri.ca",
    messagingSenderId: "45893613327",
    measurementId: "G-9MHPF6EEGR",
  },
};
