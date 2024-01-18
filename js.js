function calculate() {
    var sideLength = parseFloat(document.getElementById('sideLength').value);
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    var resultBox = document.getElementById('result-box');
    var resultText = document.getElementById('result-text');

    // Set transformasi untuk persegi 3D
    resultBox.style.transform = `rotateX(${Math.random() * 720}deg) rotateY(${Math.random() * 720}deg)`;

   // Tampilkan hasil di dalam elemen dengan id "result-container"
resultText.innerHTML = `<span style="color: black;">Luas: ${area} cm<sup>2</sup><br>Keliling: ${perimeter} cm</span>`;

    // Tambahkan watermark ke dalam persegi 3D
    var watermark = document.createElement('div');
    watermark.classList.add('watermark');
    watermark.innerHTML = 'Revou.id';
    resultBox.appendChild(watermark);

   
// Tampilkan elemen hasil dan terapkan animasi
    var resultContainer = document.getElementById('result-container');
    resultContainer.classList.add('show');

    // Hapus kelas 'show' setelah animasi selesai
resultContainer.addEventListener('animationend', () => {
    resultContainer.classList.remove('show');
    resultBox.style.transform = 'initial'; // Kembalikan transformasi ke nilai awal
});    
    setTimeout(() => {
        resultText.style.opacity = 1;
    }, 500);
}