window.Echo = require('laravel-echo');
window.io = require('socket.io-client');
// Have this in case you stop running your laravel echo server
if (typeof io !== 'undefined') {
  Echo = new Echo({
    // broadcaster: 'socket.io',
    host: 'http://iotdashboard.wg.ugm.ac.id/socket',
    appId: 'smartfarming',
    key: '48d014d84bf55cfdb815ecbbdf95e55b'
  });

  Echo.channel('orders')
    .listen('OrderShipped', (e) => {
      // console.log(e.order.name);
    });
}