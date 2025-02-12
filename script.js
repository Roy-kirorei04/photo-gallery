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
    audio.volume = 0.8; // Set volume to 0.8
    document.body.appendChild(audio);

    // Play/Pause Button
    const musicButton = document.createElement("button");
    musicButton.textContent = "Play Music";
    musicButton.style.position = "fixed";
    musicButton.style.bottom = "20px";
    musicButton.style.right = "20px";
    musicButton.style.padding = "12px 24px";
    musicButton.style.fontSize = "18px";
    musicButton.style.cursor = "pointer";
    musicButton.style.border = "none";
    musicButton.style.borderRadius = "20px";
    musicButton.style.backgroundColor = "#ff4d6d";
    musicButton.style.color = "white";
    musicButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    musicButton.style.transition = "all 0.3s ease";
    
    musicButton.addEventListener("mouseover", () => {
        musicButton.style.backgroundColor = "#e03e5e";
    });

    musicButton.addEventListener("mouseout", () => {
        musicButton.style.backgroundColor = "#ff4d6d";
    });

    document.body.appendChild(musicButton);

    musicButton.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            musicButton.textContent = "Pause Music";
        } else {
            audio.pause();
            musicButton.textContent = "Play Music";
        }
    });

    // Handle user interaction to play music on some browsers
    const playMusic = () => {
        if (audio.paused) {
            audio.play();
            musicButton.textContent = "Pause Music";
            document.removeEventListener("click", playMusic);
        }
    };
    document.addEventListener("click", playMusic);
});
