document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([19.3682813, -99.1842243], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([19.3682813, -99.1842243]).addTo(map)
      .bindPopup('Drive 360')
      .openPopup();
  });
  