fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXbkqa4ImVZr2HkSmoZnVvg&maxResults=10&order=date&key=AIzaSyCKMFkhcRxgp4vmkBn5YXrAdFqgv8S7Zok")
  .then(result => result.json())
  .then(data => {
    const videos = data.items;
    const videoContainer = document.querySelector(".youtube-container");
    videos.forEach(video => {
      videoContainer.innerHTML += `
        <h3>${video.snippet.title}</h3>
        <img src="${video.snippet.thumbnails.high.url}">
      `;
    });
  });