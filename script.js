// Konfigurasi Kustom Warna Tailwind via JavaScript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    sand: '#FAF7F2',       /* Latar Belakang Utama */
                    cream: '#F3EFE6',      /* Warna Card & Sekunder */
                    gold: '#E9C46A',       /* Kuning Cerah Aksen */
                    amber: '#D4A373',      /* Kuning Emas Warm */
                    tan: '#BC6C25',        /* Cokelat Muda Energik */
                    wood: '#8B5E3C',       /* Cokelat Muda Klasik */
                    darkwood: '#4A3319',   /* Cokelat Tua Teks */
                    espresso: '#2C1A0E',   /* Gelap Kontras */
                }
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
        }
    }
};

// Penanganan Event Submit Form Aspirasi
document.addEventListener('DOMContentLoaded', function() {
    const formAspirasi = document.getElementById('formAspirasi');
    
    if (formAspirasi) {
        formAspirasi.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Aspirasi Anda berhasil terkirim ke MPK!');
            formAspirasi.reset();
        });
    }
});