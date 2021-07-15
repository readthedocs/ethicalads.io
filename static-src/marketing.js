import * as Cookies from 'js-cookie';
import * as url from 'js-url';


// This helps our marketing funnel.
//
// Specifically, this looks for the query parameter ("referral")
// and sets a short duration cookie for that.
// If an inbound form is submitted, this value will be appended
// to the form so we can see how a referral came to us.
// This is used to count publisher and advertiser referrals
$(function () {
  let cookieName = 'ethicalads-referrer';
  let referrer = $.url('?referral');
  let expiry = 7;  // days

  if (referrer) {
    // Set the referrer which will submit if a form is submitted
    Cookies.set(cookieName, referrer, { expires: expiry });
  } else {
    referrer = Cookies.get(cookieName);
  }

  // Append the referrer to the inbound form
  let form = document.forms['fa-form-1']
  if (form !== undefined && referrer) {
    let input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "referrer");
    input.setAttribute("value", referrer);
    form.appendChild(input);
  }
});
