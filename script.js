const input = document.getElementById('bikeId');
const button = document.getElementById('checkBtn');
const result = document.getElementById('result');

function checkBattery() {
  const value = input.value.trim();
  result.className = '';

  if (value === '') {
    result.textContent = 'Error: Please enter a valid Bike ID.';
    result.classList.add('result-error');
    return;
  }

  if (value.toUpperCase() === 'KB-000') {
    result.textContent = 'Maintenance Required. Do not ride.';
    result.classList.add('result-error');
    return;
  }

  const lastChar = value.charAt(value.length - 1);
  const lastDigit = parseInt(lastChar, 10);

  if (!isNaN(lastDigit)) {
    if (lastDigit % 2 === 0) {
      result.textContent = 'Battery Optimal: 95% - Ready to Ride!';
      result.classList.add('result-optimal');
    } else {
      result.textContent = 'Battery Low: 15% - Swap at next station.';
      result.classList.add('result-low');
    }
    return;
  }

  result.textContent = 'Error: Please enter a valid Bike ID.';
  result.classList.add('result-error');
}

button.addEventListener('click', checkBattery);
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') checkBattery();
});