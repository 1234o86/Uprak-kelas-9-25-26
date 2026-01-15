// Data Nutrisi Makanan
const dataMakanan = [
    {
        nama: "Nasi Putih",
        kategori: "Sumber Energi",
        deskripsi: "Mengandung karbohidrat sebagai bahan bakar utama tubuh untuk beraktivitas sehari-hari.",
        gambar: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500"
    },
    {
        nama: "Ayam Goreng",
        kategori: "Protein Hewani",
        deskripsi: "Kaya akan protein untuk membangun jaringan otot dan memperbaiki sel tubuh yang rusak.",
        gambar: "https://images.unsplash.com/photo-1562967914-608f82629710?w=500"
    },
    {
        nama: "Tempe Goreng",
        kategori: "Protein Nabati",
        deskripsi: "Mengandung isoflavon dan probiotik yang sangat baik untuk kesehatan jantung dan pencernaan.",
        gambar: "https://images.unsplash.com/photo-1565151522207-3323080e7592?w=500"
    },
    {
        nama: "Sayur Bayam",
        kategori: "Mineral & Vitamin",
        deskripsi: "Tinggi zat besi untuk mencegah anemia dan vitamin A untuk menjaga kesehatan mata.",
        gambar: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500"
    },
    {
        nama: "Jagung",
        kategori: "Karbohidrat & Serat",
        deskripsi: "Sumber serat yang baik untuk pencernaan dan mengandung antioksidan lutein.",
        gambar: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=500"
    },
    {
        nama: "Apel",
        kategori: "Buah & Vitamin",
        deskripsi: "Kaya akan vitamin C dan pektin untuk membantu mengontrol kolesterol dalam darah.",
        gambar: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500"
    },
    {
        nama: "Pepaya",
        kategori: "Pencernaan",
        deskripsi: "Mengandung enzim papain yang sangat efektif membantu metabolisme protein dalam usus.",
        gambar: "https://images.unsplash.com/photo-1517431304320-943fcf3e843c?w=500"
    },
    {
        nama: "Air Putih",
        kategori: "Hidrasi",
        deskripsi: "Cairan esensial untuk menjaga suhu tubuh, melancarkan sirkulasi darah, dan membuang racun.",
        gambar: "https://images.unsplash.com/photo-1548919973-5dea585f3951?w=500"
    }
];

// Fungsi untuk merender kartu makanan ke HTML
function tampilkanMakanan() {
    const grid = document.getElementById('food-grid');
    
    dataMakanan.forEach(makanan => {
        const cardHTML = `
            <div class="card">
                <img src="${makanan.gambar}" alt="${makanan.nama}">
                <div class="card-content">
                    <span class="category">${makanan.kategori}</span>
                    <h3 class="card-title">${makanan.nama}</h3>
                    <p class="description">${makanan.deskripsi}</p>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', tampilkanMakanan);