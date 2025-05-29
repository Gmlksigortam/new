// Menüden tıklanan bölümü göster, diğerlerini gizle
function showSection(sectionId) {
    // Bölümleri seç
    const home = document.getElementById('home');
    const hakkimizda = document.getElementById('hakkimizda');
    const iletisim = document.getElementById('iletisim');

    // Hepsini gizle
    home.style.display = 'none';
    hakkimizda.style.display = 'none';
    iletisim.style.display = 'none';

    // İlgili bölümü göster
    if (sectionId === 'home') {
        home.style.display = '';
    } else if (sectionId === 'hakkimizda') {
        hakkimizda.style.display = '';
    } else if (sectionId === 'iletisim') {
        iletisim.style.display = '';
    }
}

// Sayfa ilk açıldığında ana sayfa görünsün
window.onload = function() {
    showSection('home');
};