import { registerApplication, start } from 'single-spa'

registerApplication(
  'navBar', 
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true
);

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

registerApplication(
  'react2', 
  () => import('./src/react2/react2.app.js'),
  (location) => location.pathname === "/react2"
);

start();