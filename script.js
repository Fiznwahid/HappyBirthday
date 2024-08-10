function animate() {
    // Mengatur timer untuk animasi
    var timer = setInterval(function() {
      // Mengubah posisi kue
      document.querySelector(".kue").style.top = document.querySelector(".oven").getBoundingClientRect().top + 200 + "px";
    }, 100);
  
    // Menghentikan animasi setelah 5 detik
    setTimeout(function() {
      clearInterval(timer);
    }, 5000);
  }
  
  // Menjalankan animasi saat halaman dimuat
  document.addEventListener("DOMContentLoaded", animate);

  then((result) => {
    if (result.isConfirmed) {
        document.querySelector('.song').play();
        animationTimeline();
    } else {
        animationTimeline();
    }
});

