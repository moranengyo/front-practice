// https://developers.google.com/youtube/iframe_api_reference
// https://developers.google.com/youtube/player_parameters?playerVersion=HTML5#Parameters

      
      
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
          videoId: 'Oeda7KVkFog', // 최초 재생할 유튜브 영상 ID
          playerVars: {
            autoplay: true, // 자동 재생 유무
            loop: true, // 반복 재생 유무
            playlist: 'Oeda7KVkFog' // 반복 재생할 유튜브 영상 ID 목록
          },
          events: {
            onReady: function (event) {
              event.target.mute() // 음소거
            }
          }
        });
      }
    