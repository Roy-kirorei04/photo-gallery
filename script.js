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
        index = (index + 1) % totalImages;
        updateGallery();
    }

    function prevSlide() {
        index = (index - 1 + totalImages) % totalImages;
        updateGallery();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    setInterval(nextSlide, 3000);

    // Background Music Functionality
    const audio = document.createElement("audio");
    audio.src = "instrumental.ogg"; // Ensure the file exists in the correct directory
    audio.loop = true;
    audio.volume = 0.6;
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
    musicButton.style.borderRadius = "50px";
    musicButton.style.backgroundColor = "#ff4d6d";
    musicButton.style.color = "white";
    musicButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
    musicButton.style.transition = "all 0.3s ease";

    musicButton.addEventListener("mouseover", () => {
        musicButton.style.backgroundColor = "#e03e5e";
    });

    musicButton.addEventListener("mouseout", () => {
        musicButton.style.backgroundColor = "#ff4d6d";
    });

    document.body.appendChild(musicButton);

    let isPlaying = false;

    musicButton.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            musicButton.textContent = "Play Music";
        } else {
            audio.play().then(() => {
                musicButton.textContent = "Pause Music";
            }).catch(error => console.error("Music play error:", error));
        }
        isPlaying = !isPlaying;
    });
});
