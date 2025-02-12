document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const totalImages = gallery.children.length;

    function updateGallery() {
        const translateX = `-${index * 100}%`;
        gallery.style.transform = `translateX(${translateX})`;
    }

    function nextSlide() {
        index = (index + 1) % totalImages; // Move to the next slide, loop back to the first one
        updateGallery();
    }

    function prevSlide() {
        index = (index - 1 + totalImages) % totalImages; // Move to the previous slide, loop back to the last one
        updateGallery();
    }

    nextBtn.addEventListener("click", nextSlide); // When the "Next" button is clicked
    prevBtn.addEventListener("click", prevSlide); // When the "Previous" button is clicked

    setInterval(nextSlide, 3000); // Auto slide every 3 seconds

    // Background Music Functionality
    const audio = document.createElement("audio");
    audio.src = "music/background-music.mp3"; // Ensure the file exists in the correct directory
    audio.loop = true;
    audio.autoplay = true;
    audio.volume = 0.8; // Set volume (adjust if needed)
    document.body.appendChild(audio);

    // Handle user interaction to play music on some browsers
    document.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        }
    });
});
