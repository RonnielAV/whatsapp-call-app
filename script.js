function makeWhatsAppCall() {
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (phoneNumber) {
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert('Por favor, ingresa un número de teléfono.');
    }
}
