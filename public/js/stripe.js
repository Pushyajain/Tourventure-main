import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51NU8c5SFQpEB44Sk0oKwUXPHSlCeb9V3klCTiIWunwuxSfDdRzsxS4m53e5Pcy0jNHN7PfU49yQA4SvSip4c4M3T00oc7FD2js'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
  } catch (error) {
    showAlert('error', error);
  }
};
