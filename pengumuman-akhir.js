// =========================================================================
// FITUR WAKTU MUNDUR (COUNTDOWN LOCK) - BUKA 20 NOVEMBER 2026
// =========================================================================
const targetDate = new Date("November 03, 2026 16:47:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        // Jika sudah mencapai tanggal 20 Nov 2026, sembunyikan overlay & tampilkan web utama
        const countdownOverlay = document.getElementById('countdownOverlay');
        if (countdownOverlay) countdownOverlay.classList.add('hidden');

        document.getElementById('mainNav')?.classList.remove('hidden');
        document.getElementById('mainContent')?.classList.remove('hidden');
        document.getElementById('mainFooter')?.classList.remove('hidden');
    } else {
        // Hitung sisa waktu
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Update ke tampilan HTML
        document.getElementById('cdDays').innerText = String(days).padStart(2, '0');
        document.getElementById('cdHours').innerText = String(hours).padStart(2, '0');
        document.getElementById('cdMinutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('cdSeconds').innerText = String(seconds).padStart(2, '0');
    }
}

// Jalankan fungsi langsung dan atur interval setiap 1 detik
updateCountdown();
setInterval(updateCountdown, 1000);

// =========================================================================
// DATA PESERTA SELEKSI OSIS (SMAN 1 KALIBUNDER)
// Status diset LOLOS semua, silakan ubah manual menjadi "TIDAK LOLOS" jika diperlukan.
// =========================================================================
const dataPeserta = [
    {
        nama: "ABDULOH MUHAMMAD FARHAN",
        nic: "202612001",
        ttl: "SUKABUMI, 23 JULI 2010",
        status: "LOLOS"
    },
    {
        nama: "ADINDA RIZKI APRILIYANTI",
        nic: "202612002",
        ttl: "PEMALANG, 03 APRIL 2011",
        status: "LOLOS"
    },
    {
        nama: "ALMA SIFA AZ-ZAHRA",
        nic: "202612003",
        ttl: "SUKABUMI, 21 JULI 2010",
        status: "LOLOS"
    },
    {
        nama: "BUNYAMIN",
        nic: "202612004",
        ttl: "SUKABUMI, 05 OKTOBER 2009",
        status: "LOLOS"
    },
    {
        nama: "DERIS YUSUF",
        nic: "202612005",
        ttl: "SUKABUMI, 21 JANUARI 2010",
        status: "LOLOS"
    },
    {
        nama: "FAJAR KUSNADI",
        nic: "202612007",
        ttl: "BEKASI, 16 JUNI 2011",
        status: "LOLOS"
    },
    {
        nama: "FITRIANI",
        nic: "202612009",
        ttl: "SUKABUMI, 03 MARET 2010",
        status: "LOLOS"
    },
    {
        nama: "GMELIN NOERZAFAR LAWANA",
        nic: "202612010",
        ttl: "SUKABUMI, 12 FEBRUARI 2010",
        status: "LOLOS"
    },
    {
        nama: "ILHAM",
        nic: "202612011",
        ttl: "SUKABUMI, 03 MARET 2009",
        status: "LOLOS"
    },
    {
        nama: "INTAN MUTIA SRI HARTINI",
        nic: "202612013",
        ttl: "SUKABUMI, 03 JULI 2011",
        status: "LOLOS"
    },
    {
        nama: "IQBAL MAULANA JOIS",
        nic: "202612014",
        ttl: "SUKABUMI, 04 MEI 2010",
        status: "LOLOS"
    },
    {
        nama: "JIHAN AYUWANDIRA",
        nic: "202612015",
        ttl: "SUKABUMI, 19 SEPTEMBER 2010",
        status: "LOLOS"
    },
    {
        nama: "MELANI OKTAVIANI",
        nic: "202612016",
        ttl: "SUKABUMI, 10 OKTOBER 2010",
        status: "LOLOS"
    },
    {
        nama: "MOHAMAD RENGGO WIDODO",
        nic: "202612017",
        ttl: "SAROLANGUN, 02 FEBRUARI 2011",
        status: "LOLOS"
    },
    {
        nama: "MUHAMAD ALDIANSYAH WIRAGU",
        nic: "202612018",
        ttl: "SUKABUMI, 30 MEI 2010",
        status: "LOLOS"
    },
    {
        nama: "MUHAMAD PARDAN KURNIAWAN",
        nic: "202612019",
        ttl: "SUKABUMI, 22 JANUARI 2011",
        status: "LOLOS"
    },
    {
        nama: "MUHAMMAD ARDI FADILLAH",
        nic: "202612020",
        ttl: "SUKABUMI, 25 OKTOBER 2010",
        status: "LOLOS"
    },
    {
        nama: "MUHAMMAD FIKRI",
        nic: "202612021",
        ttl: "SUKABUMI, 24 SEPTEMBER 2010",
        status: "LOLOS"
    },
    {
        nama: "MUHAMMAD REVAN ADISTA PRATAMA",
        nic: "202612023",
        ttl: "SUKABUMI, 02 DESEMBER 2011",
        status: "LOLOS"
    },
    {
        nama: "MUHAMMAD TAUFIQ ABYAN TANJUNG",
        nic: "202612024",
        ttl: "SUKABUMI, 21 JUNI 2010",
        status: "LOLOS"
    },
    {
        nama: "MUTIARA CHYNTIA",
        nic: "202612025",
        ttl: "SUKABUMI, 10 DESEMBER 2010",
        status: "LOLOS"
    },
    {
        nama: "NADIA MARWAH",
        nic: "202612026",
        ttl: "SUKABUMI, 14 AGUSTUS 2009",
        status: "LOLOS"
    },
    {
        nama: "NADILA JULIANTI",
        nic: "202612027",
        ttl: "SUKABUMI, 29 JULI 2010",
        status: "LOLOS"
    },
    {
        nama: "NAZWA NAYLA SAFITRI",
        nic: "202612028",
        ttl: "SUKABUMI, 18 APRIL 2011",
        status: "LOLOS"
    },
    {
        nama: "NENG NUR RISMAYANTI",
        nic: "202612029",
        ttl: "SUKABUMI, 25 SEPTEMBER 2010",
        status: "LOLOS"
    },
    {
        nama: "NURLAYLA",
        nic: "202612030",
        ttl: "SUKABUMI, 12 MEI 2010",
        status: "LOLOS"
    },
    {
        nama: "NURUL AYUNI",
        nic: "202612031",
        ttl: "SUKABUMI, 22 APRIL 2010",
        status: "LOLOS"
    },
    {
        nama: "RADITYA ALVINO RAFFASYA",
        nic: "202612032",
        ttl: "SUKABUMI, 21 SEPTEMBER 2010",
        status: "LOLOS"
    },
    {
        nama: "RAESEL RASESAH HASNA",
        nic: "202612033",
        ttl: "SUKABUMI, 25 FEBRUARI 2012",
        status: "LOLOS"
    },
    {
        nama: "RENATA AJENG PRATIWI",
        nic: "202612034",
        ttl: "SUKABUMI, 05 JUNI 2011",
        status: "LOLOS"
    },
    {
        nama: "SAHLA",
        nic: "202612036",
        ttl: "SUKABUMI, 14 SEPTEMBER 2010",
        status: "LOLOS"
    },
    {
        nama: "SATRIA WIGUNA PUTRA",
        nic: "202612037",
        ttl: "SUKABUMI, 27 JUNI 2011",
        status: "LOLOS"
    },
    {
        nama: "SELA AGUSTINA",
        nic: "202612038",
        ttl: "SUKABUMI, 17 AGUSTUS 2010",
        status: "LOLOS"
    },
    {
        nama: "SEPTIAN FAUZI. H",
        nic: "202612039",
        ttl: "SUKABUMI, 23 SEPTEMBER 2010",
        status: "LOLOS"
    },
    {
        nama: "SITI KAIDA HUMAIROH",
        nic: "202612041",
        ttl: "SUKABUMI, 18 MARET 2010",
        status: "LOLOS"
    },
    {
        nama: "SITI NUROHMAH",
        nic: "202612042",
        ttl: "SUKABUMI, 25 JANUARI 2011",
        status: "LOLOS"
    },
    {
        nama: "SITI RAHMAH",
        nic: "202612043",
        ttl: "SUKABUMI, 09 JULI 2010",
        status: "LOLOS"
    },
    {
        nama: "SITI ZAINAB KEYLA",
        nic: "202612044",
        ttl: "SUKABUMI, 25 OKTOBER 2009",
        status: "LOLOS"
    },
    {
        nama: "SOLIHATUN NISA",
        nic: "202612045",
        ttl: "SUKABUMI, 01 JULI 2011",
        status: "LOLOS"
    },
    {
        nama: "SYAFIRA NUR FAUZIYAH",
        nic: "202612046",
        ttl: "SUKABUMI, 14 MEI 2011",
        status: "LOLOS"
    },
    {
        nama: "SYIFA PEBRIANA",
        nic: "202612047",
        ttl: "SUKABUMI, 09 FEBRUARI 2010",
        status: "LOLOS"
    },
    {
        nama: "TALYA SUBUH",
        nic: "202612048",
        ttl: "SUKABUMI, 11 JULI 2011",
        status: "LOLOS"
    },
    {
        nama: "TEGAR ADITYA PUTRA",
        nic: "202612049",
        ttl: "SUKABUMI, 13 JULI 2010",
        status: "LOLOS"
    },
    {
        nama: "TIA NUR WAHIDAH",
        nic: "202612050",
        ttl: "SUKABUMI, 13 FEBRUARI 2010",
        status: "LOLOS"
    },
    {
        nama: "VITALOKA SALSABILA PRIATNA",
        nic: "202612051",
        ttl: "SUKABUMI, 12 JUNI 2011",
        status: "LOLOS"
    },
    {
        nama: "WIDIYA RAHMADHANI",
        nic: "202612052",
        ttl: "JAKARTA, 22 AGUSTUS 2010",
        status: "LOLOS"
    },
    {
        nama: "WINA EMELIA PUTRI",
        nic: "202612053",
        ttl: "SUKABUMI, 26 OKTOBER 2010",
        status: "LOLOS"
    },
    {
        nama: "ZAHRA AULIA",
        nic: "202612054",
        ttl: "SUKABUMI, 27 OKTOBER 2010",
        status: "LOLOS"
    },
    {
        nama: "ZAHWA CAHYA FATIMAH",
        nic: "202612055",
        ttl: "SUKABUMI, 17 DESEMBER 2011",
        status: "LOLOS"
    }
];

// Formatting otomatis input TTL agar Tempat Lahir menjadi KAPITAL
function formatTTL(input) {
    let val = input.value;
    if (val.includes(',')) {
        let parts = val.split(',');
        parts[0] = parts[0].toUpperCase();
        input.value = parts.join(',');
    }
}

// Fungsi utama pengecekan data
function handleCheck(event) {
    event.preventDefault();

    const inputNama = document.getElementById('nama').value.trim().toUpperCase();
    const inputNIC = document.getElementById('nic').value.trim().toUpperCase();
    const inputTTL = document.getElementById('ttl').value.trim();

    // Sembunyikan form dan tampilkan loading animasi
    document.getElementById('formContainer').classList.add('hidden');
    document.getElementById('loadingOverlay').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');

        // Pencarian data matching 3 parameter (Nama, NIC, TTL - case insensitive)
        const matched = dataPeserta.find(item => 
            item.nama.trim().toUpperCase() === inputNama &&
            item.nic.trim().toUpperCase() === inputNIC &&
            item.ttl.trim().toUpperCase() === inputTTL.toUpperCase()
        );

        if (matched) {
            if (matched.status.toUpperCase() === "LOLOS") {
                document.getElementById('resLolosNama').innerText = matched.nama;
                document.getElementById('resLolosNIC').innerText = matched.nic;
                document.getElementById('resLolosTTL').innerText = matched.ttl;
                document.getElementById('resultLolos').classList.remove('hidden');

                // Efek kembang api/confetti untuk yang lolos
                if (typeof confetti === 'function') {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }
            } else {
                document.getElementById('resGagalNama').innerText = matched.nama;
                document.getElementById('resGagalNIC').innerText = matched.nic;
                document.getElementById('resGagalTTL').innerText = matched.ttl;
                document.getElementById('resultTidakLolos').classList.remove('hidden');
            }
        } else {
            document.getElementById('resultNotFound').classList.remove('hidden');
        }
    }, 9000); // Durasi delay animasi loading
}

// Reset tampilan kembali ke form utama
function resetSearch() {
    document.getElementById('resultLolos').classList.add('hidden');
    document.getElementById('resultTidakLolos').classList.add('hidden');
    document.getElementById('resultNotFound').classList.add('hidden');
    document.getElementById('formContainer').classList.remove('hidden');
    document.getElementById('checkForm').reset();
}