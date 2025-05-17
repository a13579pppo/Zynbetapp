function navigate(section) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(section).classList.add('active');
}

// اتصال به Tonkeeper واقعی در آینده اینجا انجام میشه.