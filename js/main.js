if (Hls.isSupported()) {
    var video = document.getElementById('myvideo');
    var hls = new Hls();
    hls.loadSource('http://nwbz1u.ecm.tm/806B6CF/89181e/SK_AU_Fox_Sports_501/tracks-v1a1/index.m3u8?token=0558356b27398f74c6bf8c38eb01782ca657f46036bac31f9cfbf54ca92a57a759676626485e5874bf63894c2185a6aaf5dc2e24e8cb28eaf92e19c115c001a3e04ae108ccddd1c9e1e3d987bf3f19c96baa635670af3eea1262c962318d3b1a467e0b8126a01af07da71b2ccb3749&mac=00:1A:79:3A:6B:91&ip=202.134.10.142&magic_server=@xsparktv');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'https://f8e7y4c6.ssl.hwcdn.net/zeecinemame/playlist.m3u8';
    video.addEventListener('canplay', function() {
        video.play();
    });
}