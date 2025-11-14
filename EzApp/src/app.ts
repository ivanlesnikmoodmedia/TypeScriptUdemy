const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const GOOGLE_API_KEY = 'YOUR_API_KEY_HERE';

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput!.value;
}

form.addEventListener('submit', searchAddressHandler);