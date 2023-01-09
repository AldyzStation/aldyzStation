fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCXbkqa4ImVZr2HkSmoZnVvg&maxResults=10&order=date&key=AIzaSyCKMFkhcRxgp4vmkBn5YXrAdFqgv8S7Zok")
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += `
            <h3>${video.snippet.title}</h3>
            <img src="${video.snippet.thumbnails.high.url}">
        `
    }
})