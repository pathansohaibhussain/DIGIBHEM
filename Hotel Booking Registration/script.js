document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const totalDays = parseInt(document.getElementById('totalDays').value);
    const advanceAmount = parseInt(document.getElementById('advanceAmount').value);
    const extraPerson = parseInt(document.getElementById('extraPerson').value);
    const roomRate = parseInt(document.getElementById('roomRate').value);
    const amenitiesCost = parseInt(document.getElementById('amenitiesCost').value);
    const totalPersons = parseInt(document.getElementById('totalPersons').value);
    
    const totalRoomCost = totalDays * roomRate;
    const totalAmenitiesCost = totalDays * amenitiesCost;
    let totalCost = totalRoomCost + totalAmenitiesCost;
    totalCost += extraPerson * totalDays * totalPersons;
    const balance = totalCost - advanceAmount;
    
    document.getElementById('totalCost').value = totalCost;
    document.getElementById('balance').value = balance;
});

document.getElementById('roomType').addEventListener('change', function() {
    const roomType = this.value;
    const roomRateInput = document.getElementById('roomRate');
    const amenitiesCostInput = document.getElementById('amenitiesCost');
    
    if (roomType === 'deluxe') {
        roomRateInput.value = 1000;
        amenitiesCostInput.value = 500;
    } else if (roomType === 'suite') {
        roomRateInput.value = 1500;
        amenitiesCostInput.value = 700;
    }
});
