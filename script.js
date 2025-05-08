// Initialize all functionality after content loads
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tracking functionality
    window.trackShipment = function() {
        const courier = document.getElementById("courier-partner").value;
        const partners = {
            dtdc: "https://www.dtdc.in/tracking/tracking.asp",
            tpc: "https://trackingstatus.in/the-professional-courier-tracking/",
            bluedart: "https://www.bluedart.com/tracking",
            delhivery: "https://www.delhivery.com/tracking",
            fedex: "https://www.fedex.com/en-in/tracking.html",
            aramex: "https://www.aramex.com/track/shipments"
        };
        
        if (partners[courier]) {
            window.open(partners[courier], "_blank");
        } else {
            alert("Please select a courier partner.");
        }
    };

    // Phone number handling
    window.handlePhoneClick = function(element) {
        const phoneNumber = element.textContent;
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isAndroid = /android/i.test(navigator.userAgent);

        if (isIOS || isAndroid) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            const tempInput = document.createElement("input");
            tempInput.value = phoneNumber;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            alert(`Phone number ${phoneNumber} copied to clipboard!`);
        }
    };
});
