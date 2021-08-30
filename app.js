const videoContainer = document.querySelector(".video-container");
const searchInput = document.querySelector("#search-field");

const fetchVideo = async () => {
    const key = "23154204-1578468ec077745b2da9ac0d3&q";
    const url = `https://pixabay.com/api/videos/?key=${key}=${searchInput.value}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayVideo(data.hits);
    }
    catch (error) {
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("text-center");
        errorMessage.innerHTML = `
            <img src="https://a-k-saad.github.io/BD-Meal/images/error.png" alt="" class="error-img">
            <h1 class="text-danger">OOPS! <span class="text-light">No results found for</span> "<span class="text-primary">${searchInput.value}</span>"!</h1>
            <h3 class="text-warning">Please try again!</h3>
        `;
        videoContainer.appendChild(errorMessage);
    }
}
const showVideo = async () => {
    const key = "23154204-1578468ec077745b2da9ac0d3&q";
    const url = `https://pixabay.com/api/videos/?key=${key}=nature`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayVideo(data.hits);
    }
    catch (error) {
        const errorMessage = document.createElement("div");
        errorMessage.classList.add("text-center");
        errorMessage.innerHTML = `
            <img src="https://a-k-saad.github.io/BD-Meal/images/error.png" alt="" class="error-img">
            <h1 class="text-danger">OOPS! <span class="text-light">No results found for</span> "<span class="text-primary">${searchInput.value}</span>"!</h1>
            <h3 class="text-warning">Please try again!</h3>
        `;
        videoContainer.appendChild(errorMessage);
    }
}
const displayVideo = (videos) => {
    videoContainer.textContent = "";
    videos.map(video => {
        const videoSingle = document.createElement("div");
        videoSingle.classList.add("col-12", "col-md-4")
        videoSingle.innerHTML = `
            <video src="${video.videos.small.url}" controls class="p-2 bg-dark display-video"></video>
        `;
        videoContainer.appendChild(videoSingle);
        searchInput.value = "";
    });
}
searchInput.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        document.querySelector("#search-btn").click();
    }
});
showVideo();