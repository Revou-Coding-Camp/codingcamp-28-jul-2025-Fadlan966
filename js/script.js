WelcomeSpeech();

function handleSubmit(event) {
  event.preventDefault();

  // Ambil nilai input
  const nama = document.getElementById('nama').value.trim();
  const tanggal = document.getElementById('tanggal').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const pesan = document.getElementById('pesan').value.trim();

  // Validasi sederhana (opsional)
  if (!nama || !tanggal || !pesan) {
    alert("Harap isi semua kolom.");
    return;
  }

  // Tampilkan hasil ke modal
  document.getElementById('outputNama').textContent = nama;
  document.getElementById('outputTanggal').textContent = tanggal;
  document.getElementById('outputGender').textContent = gender;
  document.getElementById('outputPesan').textContent = pesan;
  document.getElementById('currentTime').textContent = new Date().toLocaleString();

  // Tampilkan modal Bootstrap
  const modal = new bootstrap.Modal(document.getElementById('outputModal'));
  modal.show();

  // Reset form (opsional)
  event.target.reset();
}

function WelcomeSpeech() {
    // Create a custom styled popup
    const popupOverlay = document.createElement('div');
    popupOverlay.style.position = 'fixed';
    popupOverlay.style.top = '0';
    popupOverlay.style.left = '0';
    popupOverlay.style.width = '100vw';
    popupOverlay.style.height = '100vh';
    popupOverlay.style.background = 'rgba(0,0,0,0.5)';
    popupOverlay.style.display = 'flex';
    popupOverlay.style.justifyContent = 'center';
    popupOverlay.style.alignItems = 'center';
    popupOverlay.style.zIndex = '9999';

    const popupBox = document.createElement('div');
    popupBox.style.background = '#fff';
    popupBox.style.padding = '24px 32px';
    popupBox.style.borderRadius = '12px';
    popupBox.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    popupBox.style.textAlign = 'center';
    popupBox.style.minWidth = '300px';

    const label = document.createElement('label');
    label.textContent = 'Silahkan masukkan nama Anda:';
    label.style.display = 'block';
    label.style.marginBottom = '12px';
    label.style.fontSize = '18px';

    const input = document.createElement('input');
    input.type = 'text';
    input.style.width = '100%';
    input.style.padding = '8px';
    input.style.fontSize = '16px';
    input.style.marginBottom = '16px';
    input.style.borderRadius = '6px';
    input.style.border = '1px solid #ccc';

    const button = document.createElement('button');
    button.textContent = 'OK';
    button.style.padding = '8px 24px';
    button.style.fontSize = '16px';
    button.style.borderRadius = '6px';
    button.style.border = 'none';
    button.style.background = '#007bff';
    button.style.color = '#fff';
    button.style.cursor = 'pointer';

    button.onclick = function () {
        const name = input.value.trim();
        if (name) {
            const nameSpeechElement = document.getElementById('name-Speech');
            if (nameSpeechElement) {
                nameSpeechElement.textContent = name;
            }
            
            // Add alert when name is submitted
            alert(`Terima kasih ${name}! Selamat datang di website kami.`);
            
            document.body.removeChild(popupOverlay);
        } else {
            input.style.borderColor = 'red';
            input.focus();
            alert('Mohon masukkan nama Anda terlebih dahulu!');
        }
    };

    popupBox.appendChild(label);
    popupBox.appendChild(input);
    popupBox.appendChild(button);
    popupOverlay.appendChild(popupBox);
    document.body.appendChild(popupOverlay);

    input.focus();
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            button.click();
        }
    });
}