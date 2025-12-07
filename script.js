
const distroData = [
    {
        "Nama": "Linux Mint",
        "Kategori": "Penggunaan Pribadi Ringan",
        "Dasar/Pondasi": "Ubuntu LTS",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik (berdasarkan Ubuntu LTS)",
        "Lingkungan Desktop": "Cinnamon (utama), MATE, Xfce",
        "Fitur Utama": "Ramah pengguna, codec multimedia telah terinstal, tata letak mirip Windows",
        "RAM Minimal (MB)": 2000,
        "Kesulitan Instalasi": "Sangat Mudah",
        "Situs Web": "https://linuxmint.com",
        "Contoh Varian": "LMDE (berbasis Debian)",
        "Filosofi/Target": "Desktop yang mudah dan familiar untuk pengguna baru",
        "Catatan": "Salah satu distro ramah pemula paling populer; menawarkan pengalaman siap pakai yang sangat baik dengan driver dan codec propietary; dukungan komunitas yang kuat."
    },
    {
        "Nama": "Zorin OS Lite",
        "Kategori": "Penggunaan Pribadi Ringan",
        "Dasar/Pondasi": "Ubuntu LTS",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik",
        "Lingkungan Desktop": "XFCE (Lite), mirip GNOME",
        "Fitur Utama": "Estetika mirip Windows, ramah Wine",
        "RAM Minimal (MB)": 1024,
        "Kesulitan Instalasi": "Sangat Mudah",
        "Situs Web": "https://zorin.com/os/",
        "Contoh Varian": "Zorin OS Core, Zorin OS Pro",
        "Filosofi/Target": "Desktop ramah migrasi dari Windows",
        "Catatan": "Dirancang khusus untuk pengguna Windows yang bermigrasi; termasuk pengalih tata letak; versi Lite dioptimalkan untuk perangkat keras lama."
    },
    {
        "Nama": "antiX",
        "Kategori": "Penggunaan Pribadi Ringan",
        "Dasar/Pondasi": "Debian",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "sysvinit/ runit",
        "Model Rilis": "Rilis Titik (berdasarkan Debian)",
        "Lingkungan Desktop": "Fluxbox, IceWM, tanpa DE berat",
        "Fitur Utama": "Sangat ringan, berjalan pada perangkat keras sangat lama",
        "RAM Minimal (MB)": 256,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://antixlinux.com",
        "Contoh Varian": "antiX-full, antiX-base",
        "Filosofi/Target": "Sistem dengan sumber daya sangat rendah",
        "Catatan": "Dapat berjalan pada sistem Pentium II/III; termasuk alat antiX khusus; tidak bergantung pada systemd; ideal untuk proyek penghidupan kembali."
    },
    {
        "Nama": "Elementary OS",
        "Kategori": "Penggunaan Pribadi Ringan",
        "Dasar/Pondasi": "Ubuntu LTS",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik",
        "Lingkungan Desktop": "Pantheon",
        "Fitur Utama": "Opini kuat, desain mirip macOS, aplikasi terkurasi",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sangat Mudah",
        "Situs Web": "https://elementary.io",
        "Contoh Varian": "",
        "Filosofi/Target": "Fokus pada desain, minimalis, UI konsisten",
        "Catatan": "Model bayar-apa-yang-anda-inginkan; fokus pada konsistensi UX dan privasi; menggunakan desktop Pantheon sendiri yang dibangun di atas GTK."
    },
    {
        "Nama": "Fedora (Workstation)",
        "Kategori": "Workstation",
        "Dasar/Pondasi": "Fedora Project",
        "Pengelola Paket": "dnf (RPM)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis enam bulan teratur (mengikuti upstream)",
        "Lingkungan Desktop": "GNOME (default), KDE Plasma spin",
        "Fitur Utama": "Paket mutakhir, SELinux, dukungan perangkat keras luas",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://getfedora.org",
        "Contoh Varian": "Fedora KDE, Fedora Design Suite",
        "Filosofi/Target": "Fokus pada upstream, pengembang/kreator",
        "Catatan": "Distro komunitas Red Hat; sering menjadi yang pertama mengadopsi teknologi baru; fitur pengembang dan enterprise yang kuat."
    },
    {
        "Nama": "Ubuntu (KDE Plasma)",
        "Kategori": "Workstation",
        "Dasar/Pondasi": "Ubuntu LTS",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis enam bulan + LTS setiap 2 tahun",
        "Lingkungan Desktop": "KDE Plasma (Kubuntu)",
        "Fitur Utama": "Basis pengguna besar, driver perangkat keras ekstensif",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Sangat Mudah",
        "Situs Web": "https://ubuntu.com",
        "Contoh Varian": "Kubuntu, Ubuntu Studio",
        "Filosofi/Target": "Workstation serbaguna",
        "Catatan": "Versi resmi Ubuntu dengan KDE; menggabungkan stabilitas Ubuntu dengan kustomisasi KDE; dukungan perangkat keras yang baik."
    },
    {
        "Nama": "Fedora Design Suite",
        "Kategori": "Workstation",
        "Dasar/Pondasi": "Fedora",
        "Pengelola Paket": "dnf",
        "Sistem Init": "systemd",
        "Model Rilis": "Siklus rilis Fedora",
        "Lingkungan Desktop": "GNOME (dengan alat desain)",
        "Fitur Utama": "Perangkat lunak kreatif telah terinstal (Blender, Krita)",
        "RAM Minimal (MB)": 8192,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://labs.fedoraproject.org/design/",
        "Contoh Varian": "Fedora Kinoite, Fedora Silverblue (spin terkait)",
        "Filosofi/Target": "Seniman dan desainer",
        "Catatan": "Fedora Lab spin untuk profesional kreatif; termasuk alat desain gratis, 3D, dan pengeditan video; dioptimalkan untuk alur kerja kreatif."
    },
    {
        "Nama": "Tails",
        "Kategori": "Privasi/Anonim",
        "Dasar/Pondasi": "Debian (live)",
        "Pengelola Paket": "APT (tidak persisten secara default)",
        "Sistem Init": "systemd (live)",
        "Model Rilis": "Rilis Titik (pembaruan keamanan)",
        "Lingkungan Desktop": "GNOME (dikustomisasi)",
        "Fitur Utama": "Sistem live amnesic, Tor secara default, tidak meninggalkan jejak",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://tails.boum.org",
        "Contoh Varian": "",
        "Filosofi/Target": "Anonimitas dan privasi kuat",
        "Catatan": "Dirancang untuk dijalankan dari USB/DVD; semua lalu lintas dipaksa melalui Tor; termasuk opsi penyimpanan persisten; digunakan oleh jurnalis dan aktivis."
    },
    {
        "Nama": "Whonix",
        "Kategori": "Privasi/Anonim",
        "Dasar/Pondasi": "Debian (arsitektur dua-VM)",
        "Pengelola Paket": "apt",
        "Sistem Init": "systemd",
        "Model Rilis": "Rolling dengan pembaruan titik",
        "Lingkungan Desktop": "XFCE/lainnya di dalam VM",
        "Fitur Utama": "Arsitektur VM Workstation + Gateway untuk mengisolasi Tor",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://www.whonix.org",
        "Contoh Varian": "Integrasi Tor Browser Bundle",
        "Filosofi/Target": "Anonimitas melalui isolasi",
        "Catatan": "Dijalankan sebagai mesin virtual; Gateway menangani routing Tor; Workstation menjalankan aplikasi; melindungi terhadap kebocoran IP/MAC."
    },
    {
        "Nama": "Qubes OS",
        "Kategori": "Privasi/Anonim",
        "Dasar/Pondasi": "Fedora/Dom0 (berbasis Xen)",
        "Pengelola Paket": "dnf (template dom0 bervariasi)",
        "Sistem Init": "systemd di dom0",
        "Model Rilis": "Rilis Titik",
        "Lingkungan Desktop": "Xfce (manajemen default), template bervariasi",
        "Fitur Utama": "Keamanan melalui kompartementalisasi (isolasi VM)",
        "RAM Minimal (MB)": 8192,
        "Kesulitan Instalasi": "Sulit",
        "Situs Web": "https://www.qubes-os.org",
        "Contoh Varian": "Template Debian/Ubuntu",
        "Filosofi/Target": "Kompartementalisasi fokus keamanan",
        "Catatan": "Menggunakan hypervisor Xen untuk mengisolasi aplikasi dalam VM (qubes); ideal untuk lingkungan keamanan tinggi; kurva pembelajaran curam."
    },
    {
        "Nama": "Ubuntu Server",
        "Kategori": "Server",
        "Dasar/Pondasi": "Ubuntu LTS",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "LTS (dukungan 5 tahun) & rilis reguler",
        "Lingkungan Desktop": "None (server)",
        "Fitur Utama": "Ekosistem ekstensif, gambar cloud, dukungan LTS",
        "RAM Minimal (MB)": 512,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://ubuntu.com/server",
        "Contoh Varian": "Ubuntu Cloud, Ubuntu Minimal",
        "Filosofi/Target": "Stabilitas dan ekosistem server",
        "Catatan": "Banyak digunakan di cloud dan enterprise; termasuk Canonical livepatch untuk pembaruan kernel; dokumentasi kuat."
    },
    {
        "Nama": "Rocky Linux",
        "Kategori": "Server",
        "Dasar/Pondasi": "RHEL-compatible (binary compatible)",
        "Pengelola Paket": "dnf (yum legacy)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik (dukungan jangka panjang)",
        "Lingkungan Desktop": "None (server)",
        "Fitur Utama": "Distro fokus enterprise kompatibel RHEL, dukungan 10 tahun",
        "RAM Minimal (MB)": 512,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://rockylinux.org",
        "Contoh Varian": "Rocky Linux minimal/desktop spins",
        "Filosofi/Target": "Pengganti enterprise untuk CentOS/RHEL",
        "Catatan": "Fork komunitas RHEL; didirikan oleh pencipta CentOS asli; stabil dan siap produksi."
    },
    {
        "Nama": "Debian",
        "Kategori": "Server/Hybrid",
        "Dasar/Pondasi": "Mandiri (Dasar universal)",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd (default), lainnya tersedia",
        "Model Rilis": "Stable (titik), Testing, Unstable",
        "Lingkungan Desktop": "GNOME, KDE, XFCE, lainnya",
        "Fitur Utama": "Stabilitas, repositori besar, dukungan multi-arsitektur",
        "RAM Minimal (MB)": 512,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://www.debian.org",
        "Contoh Varian": "Debian Stable/Testing/Unstable",
        "Filosofi/Target": "Perangkat lunak bebas, stabilitas",
        "Catatan": "Salah satu distro tertua dan paling stabil; filosofi perangkat lunak murni bebas; repositori paket yang sangat luas."
    },
    {
        "Nama": "AlmaLinux",
        "Kategori": "Server",
        "Dasar/Pondasi": "RHEL-compatible",
        "Pengelola Paket": "dnf",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik (jangka panjang)",
        "Lingkungan Desktop": "None (server)",
        "Fitur Utama": "Alternatif enterprise kompatibel RHEL",
        "RAM Minimal (MB)": 512,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://almalinux.org",
        "Contoh Varian": "AlmaLinux minimal",
        "Filosofi/Target": "Stabilitas enterprise",
        "Catatan": "Disponsori oleh CloudLinux; menyediakan kompatibilitas RHEL 1:1; pembaruan reguler dan siklus dukungan panjang."
    },
    {
        "Nama": "Ubuntu",
        "Kategori": "Hybrid/Serbaguna",
        "Dasar/Pondasi": "Debian",
        "Pengelola Paket": "apt",
        "Sistem Init": "systemd",
        "Model Rilis": "LTS dan reguler",
        "Lingkungan Desktop": "GNOME (default), varian tersedia",
        "Fitur Utama": "Ekosistem besar, dukungan perangkat keras, ketersediaan Snap/Flatpak",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sangat Mudah",
        "Situs Web": "https://ubuntu.com",
        "Contoh Varian": "Kubuntu, Xubuntu, Ubuntu MATE, Ubuntu Studio",
        "Filosofi/Target": "Tujuan umum, dapat diakses",
        "Catatan": "Linux desktop paling populer; dukungan komersial kuat; komunitas ekstensif; banyak varian resmi."
    },
    {
        "Nama": "Arch Linux",
        "Kategori": "Fokus Kustomisasi",
        "Dasar/Pondasi": "Mandiri",
        "Pengelola Paket": "pacman (AUR untuk komunitas)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Rolling",
        "Lingkungan Desktop": "None secara default (pilihan pengguna)",
        "Fitur Utama": "Basis minimal, mutakhir, kontrol pengguna",
        "RAM Minimal (MB)": 1024,
        "Kesulitan Instalasi": "Sulit (instalasi manual)",
        "Situs Web": "https://archlinux.org",
        "Contoh Varian": "Manjaro, EndeavourOS, Archcraft",
        "Filosofi/Target": "Kesederhanaan, kontrol pengguna",
        "Catatan": "Filosofi DIY; dokumentasi sangat baik (Arch Wiki); AUR menyediakan pilihan perangkat lunak yang luas."
    },
    {
        "Nama": "Gentoo",
        "Kategori": "Fokus Kustomisasi/Hardcore",
        "Dasar/Pondasi": "Mandiri (berbasis sumber)",
        "Pengelola Paket": "Portage (emerge)",
        "Sistem Init": "OpenRC (default)",
        "Model Rilis": "Rolling (build sumber)",
        "Lingkungan Desktop": "Pilihan pengguna",
        "Fitur Utama": "Build dari sumber, flag USE untuk kontrol halus",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sangat Sulit",
        "Situs Web": "https://www.gentoo.org",
        "Contoh Varian": "Calculate Linux (terkait)",
        "Filosofi/Target": "Kustomisasi maksimum & pembelajaran",
        "Catatan": "Distro berbasis sumber; sangat dapat disesuaikan melalui flag USE; dapat mengoptimalkan untuk perangkat keras spesifik."
    },
    {
        "Nama": "NixOS",
        "Kategori": "Fokus Kustomisasi",
        "Dasar/Pondasi": "Mandiri (Nix)",
        "Pengelola Paket": "nix",
        "Sistem Init": "systemd",
        "Model Rilis": "Deklaratif, pembaruan atomik (rolling/titik)",
        "Lingkungan Desktop": "Pilihan pengguna",
        "Fitur Utama": "Konfigurasi deklaratif, sistem dapat direproduksi, rollback atomik",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sangat Sulit",
        "Situs Web": "https://nixos.org",
        "Contoh Varian": "NixOS home-manager setups",
        "Filosofi/Target": "Manajemen sistem yang dapat direproduksi",
        "Catatan": "Konfigurasi didefinisikan dalam bahasa Nix; memungkinkan rollback ke keadaan sebelumnya; manajemen paket unik."
    },
    {
        "Nama": "Linux From Scratch",
        "Kategori": "Hardcore/Tantangan",
        "Dasar/Pondasi": "Mandiri (build dari sumber)",
        "Pengelola Paket": "None (manual)",
        "Sistem Init": "Dipilih pengguna",
        "Model Rilis": "N/A",
        "Lingkungan Desktop": "Pilihan pengguna",
        "Fitur Utama": "Edukasi, build seluruh OS dari sumber",
        "RAM Minimal (MB)": 1024,
        "Kesulitan Instalasi": "Sangat Sulit",
        "Situs Web": "http://www.linuxfromscratch.org",
        "Contoh Varian": "Beyond Linux From Scratch (BLFS)",
        "Filosofi/Target": "Pembelajaran/pendidikan",
        "Catatan": "Bukan distro tetapi buku/panduan; mengajarkan cara kerja Linux secara internal; hanya untuk tujuan edukasi."
    },
    {
        "Nama": "Garuda Linux",
        "Kategori": "Gaming",
        "Dasar/Pondasi": "Arch",
        "Pengelola Paket": "pacman (AUR)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rolling",
        "Lingkungan Desktop": "KDE Plasma (Dragonized), GNOME, lainnya",
        "Fitur Utama": "Optimasi gaming, BTRFS secara default, penyesuaian performa",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://garudalinux.org",
        "Contoh Varian": "Garuda Dr460nized KDE",
        "Filosofi/Target": "Performa/gaming",
        "Catatan": "Termasuk alat gaming (Wine, Lutris, Steam); snapshot otomatis; tema default yang menarik."
    },
    {
        "Nama": "Manjaro",
        "Kategori": "Gaming/Serbaguna",
        "Dasar/Pondasi": "Arch",
        "Pengelola Paket": "pacman (AUR)",
        "Sistem Init": "systemd",
        "Model Rilis": "Semi-rolling (cabang stabil)",
        "Lingkungan Desktop": "XFCE, KDE, GNOME",
        "Fitur Utama": "Arch ramah pengguna, deteksi perangkat keras",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://manjaro.org",
        "Contoh Varian": "Instaler Manjaro Architect",
        "Filosofi/Target": "Pengalaman Arch yang dapat diakses",
        "Catatan": "Turunan Arch ramah pengguna; termasuk installer GUI dan deteksi perangkat keras; menahan paket untuk stabilitas."
    },
    {
        "Nama": "Pop!_OS",
        "Kategori": "Gaming/Workstation",
        "Dasar/Pondasi": "Ubuntu",
        "Pengelola Paket": "apt",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik (mengikuti Ubuntu)",
        "Lingkungan Desktop": "COSMIC (fork GNOME dikustomisasi)",
        "Fitur Utama": "Dukungan NVIDIA, window manager tiling, fokus pada kreator/gamer",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Sangat Mudah",
        "Situs Web": "https://pop.system76.com",
        "Contoh Varian": "COSMIC DE berevolusi dari GNOME",
        "Filosofi/Target": "Kreator & gamer, produktivitas",
        "Catatan": "Dikembangkan oleh System76; termasuk penanganan grafis hybrid; desktop COSMIC menawarkan tiling dan kustomisasi."
    },
    {
        "Nama": "Alpine Linux",
        "Kategori": "Khusus - Embedded/IoT",
        "Dasar/Pondasi": "Mandiri",
        "Pengelola Paket": "apk-tools",
        "Sistem Init": "OpenRC (musl, BusyBox)",
        "Model Rilis": "Rolling/point releases",
        "Lingkungan Desktop": "None secara default",
        "Fitur Utama": "Sangat kecil, musl libc, BusyBox, aman",
        "RAM Minimal (MB)": 64,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://alpinelinux.org",
        "Contoh Varian": "Alpine edge",
        "Filosofi/Target": "Embedded, kontainer, jejak minimal",
        "Catatan": "Menggunakan musl libc dan BusyBox; populer untuk kontainer Docker dan VM ringan; fokus pada keamanan."
    },
    {
        "Nama": "OpenWrt",
        "Kategori": "Khusus - Embedded/IoT",
        "Dasar/Pondasi": "Mandiri",
        "Pengelola Paket": "opkg",
        "Sistem Init": "procd",
        "Model Rilis": "Rilis Titik",
        "Lingkungan Desktop": "None",
        "Fitur Utama": "OS router, dapat dipaketkan, banyak target perangkat",
        "RAM Minimal (MB)": 32,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://openwrt.org",
        "Contoh Varian": "LEDE (sejarah digabungkan)",
        "Filosofi/Target": "Jaringan router/embedded",
        "Catatan": "Distribusi Linux untuk perangkat embedded; mengubah router menjadi peralatan jaringan kuat; sistem paket ekstensif."
    },
    {
        "Nama": "SteamOS / HoloISO",
        "Kategori": "Khusus - Konsol Gaming",
        "Dasar/Pondasi": "Varian berbasis Debian/Fedora",
        "Pengelola Paket": "apt/dnf tergantung dasar",
        "Sistem Init": "systemd",
        "Model Rilis": "Point/rolling tergantung upstream",
        "Lingkungan Desktop": "Steam Big Picture / varian GNOME",
        "Fitur Utama": "Pengalaman gaming mirip konsol, integrasi Steam",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://store.steampowered.com/steamdeck",
        "Contoh Varian": "HoloISO (komunitas)",
        "Filosofi/Target": "Gaming ruang keluarga",
        "Catatan": "Dioptimalkan untuk Steam Deck dan gaming ruang keluarga; menggunakan kompositor Gamescope; HoloISO adalah implementasi ulang komunitas."
    },
    {
        "Nama": "Bazzite",
        "Kategori": "Khusus - Konsol Gaming",
        "Dasar/Pondasi": "Fedora/Universal Blue",
        "Pengelola Paket": "rpm-ostree",
        "Sistem Init": "systemd",
        "Model Rilis": "Berbasis gambar (atomik)",
        "Lingkungan Desktop": "GNOME (kustom)",
        "Fitur Utama": "Dukungan multi-toko (Steam/GOG/Epic), overlay gaming",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://github.com/ublue-os/bazzite",
        "Contoh Varian": "",
        "Filosofi/Target": "Toko game yang disatukan",
        "Catatan": "Distro gaming berbasis Fedora yang tidak dapat diubah; menggunakan Universal Blue; termasuk alat gaming dan opsi UI konsol."
    },
    {
        "Nama": "Bedrock Linux",
        "Kategori": "Unik/Meta",
        "Dasar/Pondasi": "Meta (mengintegrasikan distro lain)",
        "Pengelola Paket": "Menggunakan pengelola paket distro lain",
        "Sistem Init": "Mengintegrasikan init host (beragam)",
        "Model Rilis": "Rolling / per-subkomponen",
        "Lingkungan Desktop": "Bervariasi (campur dan cocokkan)",
        "Fitur Utama": "Mencampur komponen dari distro berbeda menjadi satu sistem koheren; memungkinkan Anda menjalankan paket dari beberapa ekosistem distro secara bersamaan",
        "RAM Minimal (MB)": 1024,
        "Kesulitan Instalasi": "Sulit",
        "Situs Web": "https://bedrocklinux.org",
        "Contoh Varian": "N/A (itu sendiri memungkinkan varian)",
        "Filosofi/Target": "Interoperabilitas ekstrem di berbagai distribusi",
        "Catatan": "Pendekatan meta yang sangat berbeda; mencampur dan mencocokkan komponen di berbagai distro. Sumber: Situs resmi Bedrock Linux."
    },
    {
        "Nama": "GNU Guix System",
        "Kategori": "Unik/Pengelolaan Paket Fungsional",
        "Dasar/Pondasi": "Mandiri (GNU)",
        "Pengelola Paket": "guix (fungsional, transaksional)",
        "Sistem Init": "systemd (dengan sistem guix deklaratif)",
        "Model Rilis": "Deklaratif/Transaksional (generasi)",
        "Lingkungan Desktop": "Pilihan pengguna; contoh GNOME ada",
        "Fitur Utama": "Manajemen paket fungsional, konfigurasi sistem dapat direproduksi dinyatakan dalam Guile Scheme, pembaruan/rollback transaksional",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sangat Sulit",
        "Situs Web": "https://guix.gnu.org",
        "Contoh Varian": "Guix System (desktop/server)",
        "Filosofi/Target": "Kebebasan perangkat lunak, kemampuan reproduksi, penyebaran yang dapat direproduksi",
        "Catatan": "Guix adalah pengelola paket fungsional dan distro dengan konfigurasi deklaratif."
    },
    {
        "Nama": "Fedora Silverblue",
        "Kategori": "Immutable/Desktop Modern",
        "Dasar/Pondasi": "Fedora (OSTree/immutable)",
        "Pengelola Paket": "rpm-ostree + toolbox (kontainer)",
        "Sistem Init": "systemd (root OSTree immutable)",
        "Model Rilis": "Berdasarkan gambar (pembaruan OSTree, pembaruan atomik)",
        "Lingkungan Desktop": "GNOME (default)",
        "Fitur Utama": "Gambar OS immutable, pembaruan atomik, alur kerja aplikasi berbasis kontainer (toolbox/flatpak-centric)",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://silverblue.fedoraproject.org",
        "Contoh Varian": "Kinoite (spin KDE immutable)",
        "Filosofi/Target": "Stabilitas, immutability, kemampuan reproduksi untuk desktop",
        "Catatan": "Pendekatan berbasis gambar immutable; lihat Fedora Silverblue."
    },
    {
        "Nama": "openSUSE Leap",
        "Kategori": "Server/Desktop (stabil)",
        "Dasar/Pondasi": "sumber openSUSE/SUSE",
        "Pengelola Paket": "zypper (RPM)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik (Leap - stabil)",
        "Lingkungan Desktop": "KDE Plasma, GNOME, lainnya",
        "Fitur Utama": "Stabilitas kelas enterprise, alat admin YaST",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://www.opensuse.org",
        "Contoh Varian": "openSUSE Tumbleweed (stabil)",
        "Filosofi/Target": "Stabilitas dengan alat admin kuat",
        "Catatan": "Leap adalah cabang stabil, berorientasi enterprise."
    },
    {
        "Nama": "openSUSE Tumbleweed",
        "Kategori": "Desktop/Rolling",
        "Dasar/Pondasi": "openSUSE",
        "Pengelola Paket": "zypper (RPM)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Rolling (Tumbleweed)",
        "Lingkungan Desktop": "KDE Plasma, GNOME",
        "Fitur Utama": "Rilis rolling mutakhir untuk desktop",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://www.opensuse.org",
        "Contoh Varian": "Leap (stabil)",
        "Filosofi/Target": "Pengguna desktop yang mutakhir",
        "Catatan": "Tumbleweed adalah cabang rolling openSUSE."
    },
    {
        "Nama": "Solus",
        "Kategori": "Desktop/Mandiri",
        "Dasar/Pondasi": "Mandiri",
        "Pengelola Paket": "eopkg (sebelumnya) / Solus menggunakan alat paket sendiri",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis rolling yang dikuratori (pembaruan dipentaskan)",
        "Lingkungan Desktop": "Budgie (utama), GNOME, MATE",
        "Fitur Utama": "Pengalaman desktop yang dikuratori, fokus DE Budgie, alat buatan sendiri",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://getsol.us",
        "Contoh Varian": "Edisi Budgie, GNOME, MATE",
        "Filosofi/Target": "Desktop koheren dan dikuratori untuk penggunaan sehari-hari",
        "Catatan": "Solus menyediakan pengalaman desktop yang dikuratori dan koheren; sumber: Situs web Solus."
    },
    {
        "Nama": "Clear Linux",
        "Kategori": "Fokus Performa (Intel)",
        "Dasar/Pondasi": "Mandiri (Intel)",
        "Pengelola Paket": "swupd",
        "Sistem Init": "systemd",
        "Model Rilis": "Rolling (dioptimalkan performa)",
        "Lingkungan Desktop": "GNOME (proyek desktop), tetapi sering ditargetkan server/cloud",
        "Fitur Utama": "Optimasi performa agresif, LTO/PGO, disetel untuk perangkat keras Intel; proyek EOL diumumkan pada 2025",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://clearlinux.org",
        "Contoh Varian": "build Clear Linux Server/Desktop",
        "Filosofi/Target": "Optimasi performa dan cloud",
        "Catatan": "Intel menghentikan dukungan aktif pada 2025; pengguna harus mempertimbangkan migrasi. Sumber: Pengumuman EOL Clear Linux/berita."
    },
    {
        "Nama": "Puppy Linux",
        "Kategori": "Ultra-ringan",
        "Dasar/Pondasi": "Mandiri / berbagai (build Woof)",
        "Pengelola Paket": "pet/ppa, apt opsional untuk puppy berbasis Debian",
        "Sistem Init": "bervariasi (gaya SysV)",
        "Model Rilis": "Rilis Titik (berbagai rasa Puppy)",
        "Lingkungan Desktop": "JWM, ROX, DE ringan",
        "Fitur Utama": "Sangat kecil, berjalan di RAM, fokus live, sangat cepat pada perangkat keras lama",
        "RAM Minimal (MB)": 128,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://puppylinux.org",
        "Contoh Varian": "Rasa Puplet berbasis Ubuntu/Debian",
        "Filosofi/Target": "Menghidupkan kembali perangkat keras lama, sesi live sangat cepat",
        "Catatan": "Keluarga Puppy menggunakan Woof untuk membangun varian."
    },
    {
        "Nama": "Tiny Core Linux",
        "Kategori": "Ultra-kecil/minimal",
        "Dasar/Pondasi": "Mandiri",
        "Pengelola Paket": "tce (Ekstensi Tiny Core)",
        "Sistem Init": "BusyBox / init",
        "Model Rilis": "Titik/rolling (ISO kecil)",
        "Lingkungan Desktop": "FLTK/FLWM (GUI TinyCore)",
        "Fitur Utama": "Jejak kaki sangat kecil (10-20MB), ekstensi modular, berjalan di RAM",
        "RAM Minimal (MB)": 46,
        "Kesulitan Instalasi": "Sedang",
        "Situs Web": "https://tinycorelinux.net",
        "Contoh Varian": "Core, TinyCore, CorePlus",
        "Filosofi/Target": "Minimalisme dan modularitas",
        "Catatan": "Tiny Core sangat kecil dan modular."
    },
    {
        "Nama": "Chromium OS (keluarga ChromiumOS/ChromeOS)",
        "Kategori": "Web-centric/Appliance",
        "Dasar/Pondasi": "Chromium OS (ChromeOS Google bersifat komersial)",
        "Pengelola Paket": "Web/ekstensi Chrome; internal menggunakan APT/manajemen internal lainnya",
        "Sistem Init": "systemd (variasi ChromeOS)",
        "Model Rilis": "Pembaruan berbasis gambar (pembaruan OS via channel)",
        "Lingkungan Desktop": "Browser Chromium/Chrome sebagai UI (Ash/Chrome Shell)",
        "Fitur Utama": "Web-centric, ringan, UX browser-first yang terintegrasi ketat",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Mudah (pada perangkat keras yang didukung)",
        "Situs Web": "https://www.chromium.org/chromium-os",
        "Contoh Varian": "build Chromium OS, CloudReady (lama)",
        "Filosofi/Target": "Appliance web tujuan tunggal/pendidikan",
        "Catatan": "Chromium OS adalah dasar open-source untuk ChromeOS."
    },
    {
        "Nama": "EndeavourOS",
        "Kategori": "Instalasi Arch-based yang ramah",
        "Dasar/Pondasi": "Arch Linux",
        "Pengelola Paket": "pacman (AUR)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Rolling",
        "Lingkungan Desktop": "XFCE (default), KDE, GNOME, lainnya",
        "Fitur Utama": "Instalasi Arch yang ramah pengguna dan alat, dukungan komunitas cepat",
        "RAM Minimal (MB)": 2048,
        "Kesulitan Instalasi": "Mudah hingga Sedang",
        "Situs Web": "https://endeavouros.com",
        "Contoh Varian": "EndeavourOS dengan berbagai DE",
        "Filosofi/Target": "Pengalaman Arch yang dapat diakses",
        "Catatan": "EndeavourOS menyediakan instalasi yang mudah dan konfigurasi berbasis komunitas."
    },
    {
        "Nama": "KDE neon",
        "Kategori": "Fokus KDE",
        "Dasar/Pondasi": "Ubuntu LTS",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "Dasar LTS + paket KDE yang cepat diperbarui",
        "Lingkungan Desktop": "KDE Plasma (terbaru)",
        "Fitur Utama": "Menampilkan perangkat lunak KDE terbaru pada basis Ubuntu yang stabil",
        "RAM Minimal (MB)": 4096,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://neon.kde.org",
        "Contoh Varian": "Edisi User/User LTS",
        "Filosofi/Target": "Pengalaman KDE mutakhir pada dasar stabil",
        "Catatan": "KDE Neon mengemas KDE terbaru pada Ubuntu LTS."
    },
    {
        "Nama": "Raspberry Pi OS",
        "Kategori": "Single-board/ARM",
        "Dasar/Pondasi": "Debian (armhf/arm64)",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik (selaras dengan Debian)",
        "Lingkungan Desktop": "LXDE / PIXEL (kustom)",
        "Fitur Utama": "Dioptimalkan untuk perangkat keras Raspberry Pi, fokus edukasi",
        "RAM Minimal (MB)": 256,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://www.raspberrypi.org/software/",
        "Contoh Varian": "Lite (headless), Desktop",
        "Filosofi/Target": "Pendidikan dan perangkat ARM",
        "Catatan": "OS resmi untuk perangkat keras Raspberry Pi."
    },
    {
        "Nama": "MX Linux",
        "Kategori": "Desktop Midweight",
        "Dasar/Pondasi": "Debian Stable",
        "Pengelola Paket": "apt (dpkg)",
        "Sistem Init": "systemd",
        "Model Rilis": "Rilis Titik (berdasarkan Debian Stable)",
        "Lingkungan Desktop": "Xfce (utama), KDE, Fluxbox",
        "Fitur Utama": "Stabil, ringan, alat komunitas kuat (MX Tools)",
        "RAM Minimal (MB)": 1024,
        "Kesulitan Instalasi": "Mudah",
        "Situs Web": "https://mxlinux.org",
        "Contoh Varian": "MX-19/21/23 (versi)",
        "Filosofi/Target": "Desktop stabil dan efisien untuk perangkat keras lama/baru",
        "Catatan": "MX Linux adalah distro midweight populer."
    }
];

function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(`page-${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        console.error(`Halaman dengan ID page-${pageNumber} tidak ditemukan.`);
    }
}

function getAnswers() {
    const usageType = document.getElementById('usage-type').value;
    const specificPurpose = document.getElementById('specific-purpose').value.toLowerCase(); // Jika ada
    const desktopExperience = document.getElementById('desktop-experience').value;
    const customizationLevel = document.getElementById('customization-level').value;
    const hardwareCompatibility = document.getElementById('hardware-compatibility').value;
    const updateModel = document.getElementById('update-model').value;

    const architecture = document.getElementById('architecture').value;
    const ram = parseInt(document.getElementById('ram').value); // Konversi ke angka
    const storage = document.getElementById('storage').value;
    const deviceAge = document.getElementById('device-age').value;
    const gpuType = document.getElementById('gpu-type').value;
    const diskType = document.getElementById('disk-type').value;

    return {
        usageType,
        specificPurpose,
        desktopExperience,
        customizationLevel,
        hardwareCompatibility,
        updateModel,
        architecture,
        ram,
        storage,
        deviceAge,
        gpuType,
        diskType
    };
}

function calculateResults() {
    const answers = getAnswers();
    const scores = {};

    distroData.forEach(distro => {
        let score = 0;
        let maxScore = 0;

        if (answers.usageType === "other-needs") {
            maxScore += 1;
            const searchTerms = answers.specificPurpose.toLowerCase();
            if (searchTerms && (distro["Fitur Utama"].toLowerCase().includes(searchTerms) ||
                                distro["Filosofi/Target"].toLowerCase().includes(searchTerms) ||
                                distro["Catatan"].toLowerCase().includes(searchTerms))) {
                score += 1; 
            }
        } else {
            if (answers.usageType) {
                maxScore += 1;
                if (distro["Kategori"].toLowerCase().includes(answers.usageType.toLowerCase())) {
                    score += 1;
                }
            }
        }

        if (answers.desktopExperience) {
            maxScore += 1;
            if (answers.desktopExperience === "very-important") {
                if (["Sangat Mudah", "Mudah"].includes(distro["Kesulitan Instalasi"])) {
                    score += 1;
                }
            } else if (answers.desktopExperience === "not-important") {
                if (["Sangat Mudah", "Mudah"].includes(distro["Kesulitan Instalasi"])) {
                    score -= 0.5; // Penalti kecil
                }
            }
        }
        
        if (answers.customizationLevel) {
            maxScore += 1;
            if (answers.customizationLevel === "high") {
                if (["Fokus Kustomisasi", "Hardcore/Tantangan"].includes(distro["Kategori"])) {
                    score += 1;
                }
            } else if (answers.customizationLevel === "low") {
                if (["Penggunaan Pribadi Ringan", "Hybrid/Serbaguna"].includes(distro["Kategori"])) {
                    score += 1;
                }
            }
        }

        if (answers.hardwareCompatibility) {
            maxScore += 1;
            if (answers.hardwareCompatibility === "critical") {
                if (distro["Dasar/Pondasi"].toLowerCase().includes("ubuntu") || distro["Dasar/Pondasi"].toLowerCase().includes("debian")) {
                    score += 1;
                }
            }
        }

        if (answers.updateModel) {
            maxScore += 1;
            if (answers.updateModel === "rolling-release") {
                if (distro["Model Rilis"].toLowerCase().includes("rolling")) {
                    score += 1;
                }
            } else if (answers.updateModel === "stable-lts") {
                if (distro["Model Rilis"].toLowerCase().includes("lts") || distro["Model Rilis"].toLowerCase().includes("titik")) {
                    score += 1;
                }
            }
        }

        if (answers.architecture) {
            maxScore += 1;
            if (answers.architecture === "32-bit") {
                if (["antiX", "Puppy Linux", "Tiny Core Linux"].includes(distro["Nama"])) {
                     score += 1;
                }
            } else if (answers.architecture === "64-bit") {
                if (!distro["Dasar/Pondasi"].toLowerCase().includes("32") && !distro["Dasar/Pondasi"].toLowerCase().includes("arm")) {
                    score += 1;
                }
            } else if (answers.architecture === "arm") {
                 if (distro["Dasar/Pondasi"].toLowerCase().includes("arm") || distro["Nama"].toLowerCase().includes("raspberry")) {
                     score += 1;
                 }
            }
        }

        if (!isNaN(answers.ram)) {
            maxScore += 1;
            if (answers.ram >= distro["RAM Minimal (MB)"]) {
                score += 1;
            }
        }

        if (answers.storage) {
            if (answers.storage === "small") {
                if (distro["RAM Minimal (MB)"] > 2048) {
                    score -= 0.5; // Penalti kecil
                }
            }
        }

        if (answers.deviceAge) {
            if (answers.deviceAge === "old") {
                if (distro["Kategori"].toLowerCase().includes("ringan") || distro["RAM Minimal (MB)"] <= 1024) {
                    score += 1;
                    maxScore += 1;
                }
            } else if (answers.deviceAge === "modern") {
                if (distro["RAM Minimal (MB)"] >= 4096) {
                    score += 1;
                    maxScore += 1;
                }
            }
        }

        if (answers.gpuType) {
            if (["discrete-nvidia", "discrete-amd", "discrete-intel"].includes(answers.gpuType)) {
                if (distro["Kategori"].toLowerCase().includes("gaming")) {
                    score += 1;
                    maxScore += 1;
                }
            }
        }
        if (answers.diskType === "ssd" && distro["Fitur Utama"].toLowerCase().includes("btrfs")) {
            score += 1;
            maxScore += 1;
        }

        scores[distro["Nama"]] = { score, maxScore, details: distro };
    });

    const results = [];
    for (const [distroName, data] of Object.entries(scores)) {
        if (data.maxScore > 0) { // Hindari pembagian dengan nol
            const percentage = (data.score / data.maxScore) * 100;

            if (percentage > 30) {
                results.push({
                    name: distroName,
                    percentage: Math.round(percentage * 100) / 100, // Bulatkan ke 2 desimal
                    details: data.details
                });
            }
        }
    }

    results.sort((a, b) => b.percentage - a.percentage);

    displayResults(results);
}
function displayResults(results) {
    const container = document.getElementById('results-container');
    if (results.length === 0) {
        container.innerHTML = '<p>Maaf, tidak ada distribusi yang ditemukan yang cocok dengan kriteria Anda saat ini.</p>';
        return;
    }

    let html = `<h3>Rekomendasi Distro untuk Anda:</h3>`;
    results.forEach(result => {
        html += `
            <div class="recommendation-item">
                <h4>${result.name} (Kecocokan: ${result.percentage}%)</h4>
                <p><strong>Kategori:</strong> ${result.details["Kategori"]}</p>
                <p><strong>Dasar:</strong> ${result.details["Dasar/Pondasi"]}</p>
                <p><strong>Fitur Utama:</strong> ${result.details["Fitur Utama"]}</p>
                <p><strong>RAM Min:</strong> ${result.details["RAM Minimal (MB)"]} MB</p>
                <p><a href="${result.details["Situs Web"]}" target="_blank">Kunjungi Situs Web</a></p>
            </div>
        `;
    });

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function() {
    showPage(1);
});
