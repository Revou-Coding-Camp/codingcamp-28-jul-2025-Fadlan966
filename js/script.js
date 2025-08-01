WelcomeSpeech();

// Form handling function
function handleSubmit(event) {
    event.preventDefault();

    // Get input values
    const nama = document.getElementById('nama').value.trim();
    const tanggal = document.getElementById('tanggal').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('pesan').value.trim();

    // Simple validation
    if (!nama || !tanggal || !pesan) {
        alert("Harap isi semua kolom.");
        return;
    }

    // Update modal content
    document.getElementById('outputNama').textContent = nama;
    document.getElementById('outputTanggal').textContent = tanggal;
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputPesan').textContent = pesan;
    document.getElementById('currentTime').textContent = new Date().toLocaleString();

    // Show Bootstrap modal
    const modal = new bootstrap.Modal(document.getElementById('outputModal'));
    modal.show();

    // Show success notification
    let notif = document.createElement('div');
    notif.textContent = "Pesan berhasil terkirim!";
    notif.style.position = 'fixed';
    notif.style.top = '20px';
    notif.style.right = '20px';
    notif.style.background = '#28a745';
    notif.style.color = '#fff';
    notif.style.padding = '12px 24px';
    notif.style.borderRadius = '8px';
    notif.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    notif.style.zIndex = '10000';
    notif.style.fontSize = '16px';
    notif.style.fontWeight = '500';
    notif.style.transform = 'translateX(100%)';
    notif.style.transition = 'transform 0.3s ease';
    document.body.appendChild(notif);

    // Animate notification
    setTimeout(() => {
        notif.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notif.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notif.remove();
        }, 300);
    }, 3000);

    // Reset form
    event.target.reset();
}

// Welcome speech popup function
function WelcomeSpeech() {
    // Create custom styled popup
    const popupOverlay = document.createElement('div');
    popupOverlay.style.position = 'fixed';
    popupOverlay.style.top = '0';
    popupOverlay.style.left = '0';
    popupOverlay.style.width = '100vw';
    popupOverlay.style.height = '100vh';
    popupOverlay.style.background = 'rgba(0,0,0,0.7)';
    popupOverlay.style.display = 'flex';
    popupOverlay.style.justifyContent = 'center';
    popupOverlay.style.alignItems = 'center';
    popupOverlay.style.zIndex = '9999';
    popupOverlay.style.backdropFilter = 'blur(5px)';
    popupOverlay.style.opacity = '0';
    popupOverlay.style.transition = 'opacity 0.3s ease';

    const popupBox = document.createElement('div');
    popupBox.style.background = 'linear-gradient(135deg, #ff6a00, #ee0979)';
    popupBox.style.padding = '32px 40px';
    popupBox.style.borderRadius = '20px';
    popupBox.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    popupBox.style.textAlign = 'center';
    popupBox.style.minWidth = '320px';
    popupBox.style.maxWidth = '90vw';
    popupBox.style.transform = 'scale(0.8)';
    popupBox.style.transition = 'transform 0.3s ease';

    const label = document.createElement('label');
    label.textContent = 'Silahkan masukkan nama Anda:';
    label.style.display = 'block';
    label.style.marginBottom = '20px';
    label.style.fontSize = '18px';
    label.style.fontWeight = '600';
    label.style.color = 'white';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Nama Anda...';
    input.style.width = '100%';
    input.style.padding = '12px 16px';
    input.style.fontSize = '16px';
    input.style.marginBottom = '20px';
    input.style.borderRadius = '10px';
    input.style.border = 'none';
    input.style.outline = 'none';
    input.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    input.style.transition = 'all 0.3s ease';

    const button = document.createElement('button');
    button.textContent = 'OK';
    button.style.padding = '12px 30px';
    button.style.fontSize = '16px';
    button.style.fontWeight = '600';
    button.style.borderRadius = '25px';
    button.style.border = 'none';
    button.style.background = 'white';
    button.style.color = '#ff6a00';
    button.style.cursor = 'pointer';
    button.style.transition = 'all 0.3s ease';
    button.style.boxShadow = '0 4px 15px rgba(255,255,255,0.3)';

    button.onmouseover = function () {
        button.style.transform = 'translateY(-2px)';
        button.style.boxShadow = '0 6px 20px rgba(255,255,255,0.4)';
    };

    button.onmouseout = function () {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 4px 15px rgba(255,255,255,0.3)';
    };

    button.onclick = function () {
        const name = input.value.trim();
        if (name) {
            const nameSpeechElement = document.getElementById('name-Speech');
            if (nameSpeechElement) {
                nameSpeechElement.textContent = name;
            }

            // Add styled alert when name is submitted
            setTimeout(() => {
                alert(`Terima kasih ${name}! Selamat datang di website kami.`);
            }, 300);

            // Animate close
            popupOverlay.style.opacity = '0';
            popupBox.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(popupOverlay);
            }, 300);
        } else {
            input.style.borderColor = 'red';
            input.style.boxShadow = '0 0 0 2px rgba(255,0,0,0.2)';
            input.focus();
            alert('Mohon masukkan nama Anda terlebih dahulu!');
            // Reset input style after 3 seconds
            setTimeout(() => {
                input.style.borderColor = '';
                input.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }, 3000);
        }
    };

    input.onfocus = function () {
        input.style.transform = 'scale(1.02)';
        input.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
    };

    input.onblur = function () {
        input.style.transform = 'scale(1)';
        input.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    };

    popupBox.appendChild(label);
    popupBox.appendChild(input);
    popupBox.appendChild(button);
    popupOverlay.appendChild(popupBox);
    document.body.appendChild(popupOverlay);

    // Animate in
    setTimeout(() => {
        popupOverlay.style.opacity = '1';
        popupBox.style.transform = 'scale(1)';
    }, 100);

    input.focus();
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            button.click();
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.animate__animated').forEach(el => {
    observer.observe(el);
});

// Additional responsive enhancements
window.addEventListener('resize', function () {
    // Adjust popup on mobile
    const popup = document.querySelector('[style*="position: fixed"][style*="z-index: 9999"]');
    if (popup && window.innerWidth < 576) {
        const popupBox = popup.querySelector('div');    
        if (popupBox) {
            popupBox.style.margin = '20px';
            popupBox.style.minWidth = 'auto';
        }
    }
});