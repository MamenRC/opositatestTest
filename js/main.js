
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MVS3WK8');


  var setAutoredirectUrlAfterRegister = function(url){
  if(sessionStorage){
    sessionStorage.setItem('autoredirectUrlAfterRegister', url);
  }
};

var dataLayerReady = true;
  window.addEventListener('load', function()
  {
  if(!window.google_tag_manager)
  {
    dataLayerReady = false;
  }
  }, false);
  $(function() {
  $('.lazy').Lazy();
  });

WebFontConfig = {
  google: { families: [ 'Open+Sans:300,400,600,700,800' ] }
  };
  (function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
  })();

new SmartBanner({
  daysHidden: 15,   // days to hide banner after close button is clicked (defaults to 15)
  daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
  appStoreLanguage: 'es', // language code for the App Store (defaults to user's browser language)
  title: 'OpositaTest',
  author: 'OpositaTest S.l.',
  button: 'Descargar',
  store: {
    ios: 'En App Store',
    android: 'En Google Play',
  },
  price: {
    ios: 'Gratis',
    android: 'Gratis',
  }
  , icon: '/app_dev.php/images/3ef6cd8_opositatest_simbolo_app_1.png'
  //,force: 'ios' // Uncomment for platform emulation
  });
