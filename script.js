class Pendaftar {
    constructor(nama, umur, uangSangu) {
      this.nama = nama;
      this.umur = umur;
      this.uangSangu = uangSangu;
    }
  }
  
  const pendaftarList = [];
  const registrationForm = document.getElementById('registrationForm');
  const pendaftarTable = document.getElementById('pendaftarTable');
  const pendaftarData = document.getElementById('pendaftarData');
  const resume = document.getElementById('resume');
  
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uang').value);
  
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
      alert('Tidak memenuhi kriteria.');
      return;
    }
  
    const pendaftar = new Pendaftar(nama, umur, uangSangu);
    pendaftarList.push(pendaftar);
    updateTable();
    registrationForm.reset();
  });
  
  function updateTable() {
    pendaftarData.innerHTML = '';
  
    for (const pendaftar of pendaftarList) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${pendaftar.nama}</td>
        <td>${pendaftar.umur}</td>
        <td>${pendaftar.uangSangu}</td>
      `;
      pendaftarData.appendChild(row);
    }
  
    const totalUangSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangSangu, 0);
    const totalUmur = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);
    const rataRataUangSangu = pendaftarList.length > 0 ? totalUangSangu / pendaftarList.length : 0;
    const rataRataUmur = pendaftarList.length > 0 ? totalUmur / pendaftarList.length : 0;
  
    resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar Rp. ${rataRataUangSangu.toFixed(2)} dengan rata-rata umur ${rataRataUmur.toFixed(2)}`;
  }
  
  function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (const content of tabcontent) {
      content.style.display = 'none';
    }
  
    const tablinks = document.getElementsByClassName('tablink');
    for (const link of tablinks) {
      link.className = link.className.replace(' active', '');
    }
  
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
  }
  
  // Default open tab
  document.getElementsByClassName('tablink')[0].click();
  