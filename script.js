// All JavaScript from the <script> tags go here
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function trackShipment() {
    const courier = document.getElementById("courier-partner").value;
    let trackingUrl = "";

    switch (courier) {
        case "dtdc":
            trackingUrl = "https://www.dtdc.in/tracking/tracking.asp";
            break;
        case "tpc":
            trackingUrl = "https://trackingstatus.in/the-professional-courier-tracking/";
            break;
        case "bluedart":
            trackingUrl = "https://www.bluedart.com/tracking";
            break;
        case "delhivery":
            trackingUrl = "https://www.delhivery.com/tracking";
            break;
        case "fedex":
            trackingUrl = "https://www.fedex.com/en-in/tracking.html";
            break;
        case "aramex":
            trackingUrl = "https://www.aramex.com/track/shipments";
            break;
        default:
            alert("Please select a courier partner.");
            return;
    }

    window.open(trackingUrl, "_blank");
}