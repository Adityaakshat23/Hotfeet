document.getElementById('location-form').addEventListener('submit', submitLocation);

function submitLocation(event) {
    event.preventDefault();

    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
    const address = document.getElementById('address').value;

    const locationDisplay = document.getElementById('location-display');

    if (latitude && longitude) {
        locationDisplay.innerHTML = `Your location: Latitude - ${latitude}, Longitude - ${longitude}`;
    } else if (address) {
        locationDisplay.innerHTML = `Your address: ${address}`;
    } else {
        locationDisplay.innerHTML = 'Please enter either latitude and longitude or an address.';
    }
}