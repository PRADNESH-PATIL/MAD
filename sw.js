self.addEventListener('install', evt=>{
    console.log('service worker is registered')
});

self.addEventListener('activate', evt=>{
    console.assertlog('service worker is activated')
});

self.addEventListener('fetch', evt=>{
    console.assertlog('service worker is fetching')
});
