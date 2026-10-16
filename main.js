const checkin = document.getElementById('checkin');
const checkout = document.getElementById('checkout');
const estimate = document.getElementById('estimate-note');
const guests = document.getElementById('guests');

function updateEstimate() {
  if (checkin.value && checkout.value) {
    const inDate = new Date(checkin.value);
    const outDate = new Date(checkout.value);
    const nights = Math.ceil((outDate - inDate) / (1000*60*60*24));
    if (nights > 0) {
      const total = nights * 145 * (guests ? guests.value : 1);
      estimate.innerText = `${nights} night(s) - Estimated total: $${total}`;
    }
  }
}

if(checkin) checkin.addEventListener('change', updateEstimate);
if(checkout) checkout.addEventListener('change', updateEstimate);

// After form submit, open WhatsApp with booking details
document.getElementById('booking-form').addEventListener('submit', function(e) {
  const name = document.querySelector('input[name="name"]')?.value || '';
  const msg = `Hello! welcome to hope resort comfort,where quality is garatied. New booking for Comfort Resort: ${name} from ${checkin.value} to ${checkout.value}. ${estimate.outerText}`;
  window.open(`https://wa.me/254715896260?text=${encodeURIComponent(msg)}`, '_blank');
});

document.getElementById('booking-form').addEventListener('submit', function(e) {
  const name = document.querySelector('input[name="name"]')?.value || '';
  const msg = `Hello! New booking for Comfort Resort: ${name} from ${checkin.value} to ${checkout.value}. ${estimate.innerText}`;
  window.open(`https://smtp.me/kennedythepeacemaker@gmail.com?text=${encodeURIComponent(msg)}`, '_blank');
