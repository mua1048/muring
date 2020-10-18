function device_check() {
  var pc_device = "win16|win32|win64|mac|macintel";

  var this_device = navigator.platform;

  if ( this_device ) {

      if ( pc_device.indexOf(navigator.platform.toLowerCase()) < 0 ) {
          window.location.href = 'http://muring.vercel.app/m';
      } else {
          console.log('PC');
      }

  }
}