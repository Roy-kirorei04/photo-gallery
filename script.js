document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const totalImages = gallery.children.length;
    let autoSlide;

    function updateGallery() {
        const translateX = `-${index * 100}%`;
        gallery.style.transition = "transform 0.5s ease-in-out";
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

    nextBtn.addEventListener("click", () => {
        nextSlide();
        restartAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        restartAutoSlide();
    });

    function restartAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
    }

    restartAutoSlide();

    // 🎵 Background Music Functionality
    const audio = new Audio("instrumental.ogg"); // Ensure this file exists
    audio.loop = true;
    audio.volume = 0.6;

    // 🎵 Play/Pause Music Button
    const musicButton = document.createElement("button");
    musicButton.textContent = "Play Music 🎵";
    Object.assign(musicButton.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "12px 24px",
        fontSize: "18px",
        cursor: "pointer",
        border: "none",
        borderRadius: "50px",
        backgroundColor: "#ff4d6d",
        color: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease"
    });

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
            musicButton.textContent = "Play Music 🎵";
        } else {
            audio.play().then(() => {
                musicButton.textContent = "Pause Music ⏸";
            }).catch(error => console.error("Music play error:", error));
        }
        isPlaying = !isPlaying;
    });
});
