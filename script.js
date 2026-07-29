// Data Pengurus & Anggota Karang Taruna dari awal
const dataAnggota = [
  { nama: "Aditya Pratama", jabatan: "Ketua Karang Taruna", rt: "RT 01", status: "Aktif" },
  { nama: "Rian Hidayat", jabatan: "Wakil Ketua", rt: "RT 02", status: "Aktif" },
  { nama: "Siti Rahmawati", jabatan: "Sekretaris 1", rt: "RT 01", status: "Aktif" },
  { nama: "Anisa Fitriani", jabatan: "Sekretaris 2", rt: "RT 03", status: "Aktif" },
  { nama: "Budi Santoso", jabatan: "Bendahara 1", rt: "RT 02", status: "Aktif" },
  { nama: "Dewi Lestari", jabatan: "Bendahara 2", rt: "RT 04", status: "Aktif" },
  { nama: "Fajar Rizky", jabatan: "Koordinator Olahraga", rt: "RT 03", status: "Aktif" },
  { nama: "Gita Gutawa", jabatan: "Koordinator Seni & Budaya", rt: "RT 01", status: "Aktif" },
  { nama: "Hendra Wijaya", jabatan: "Anggota Divisi Humas", rt: "RT 04", status: "Aktif" },
  { nama: "Indah Permata", jabatan: "Anggota Divisi Humas", rt: "RT 02", status: "Aktif" }
];

// Fungsi untuk render data ke tabel
function renderTabel(data) {
  const tbody = document.getElementById('tabelAnggota');
  tbody.innerHTML = '';

  if (data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; color:#64748b; padding: 24px;">
          Data pengurus tidak ditemukan.
        </td>
      </tr>
    `;
    return;
  }

  data.forEach((item, index) => {
    const row = `
      <tr>
        <td><strong>${index + 1}</strong></td>
        <td><strong>${item.nama}</strong></td>
        <td>${item.jabatan}</td>
        <td>${item.rt}</td>
        <td><span class="badge-status">${item.status}</span></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Fungsi pencarian/filter interaktif
function cariAnggota() {
  const keyword = document.getElementById('searchInput').value.toLowerCase();
  const hasil = dataAnggota.filter(item => 
    item.nama.toLowerCase().includes(keyword) ||
    item.jabatan.toLowerCase().includes(keyword) ||
    item.rt.toLowerCase().includes(keyword)
  );
  renderTabel(hasil);
}

// Jalankan saat dokumen dimuat
document.addEventListener('DOMContentLoaded', () => {
  renderTabel(dataAnggota);
});