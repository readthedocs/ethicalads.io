import * as Cookies from 'js-cookie';
import * as url from 'js-url';


// This helps our marketing funnel.
//
// Specifically, this looks for the query parameters "referral" and "ref"
// and sets a short duration cookie for that.
// If an inbound form is submitted, these will be appended
// to the form so we can see how a referral came to us.
// This is used to count publisher and advertiser referrals
$(function () {
  let cookieName = 'ethicalads-referrer';
  let referrer = $.url('?referral');
  let ref = $.url('?ref');  // Used internally by RTD
  let expiry = 7;  // days
  let cookieVal = Cookies.getJSON(cookieName) || {};

  if (referrer && !cookieVal["referrer"]) {
    cookieVal["referrer"] = referrer;
  }
  if (ref && !cookieVal["ref"]) {
    cookieVal["ref"] = ref;
  }

  if (Object.keys(cookieVal).length > 0 && cookieVal.constructor === Object) {
    Cookies.set(cookieName, cookieVal, { expires: expiry });
  }

  // Append the referrer to the inbound form
  let form = document.forms['fa-form-1']
  if (form !== undefined && cookieVal) {
    for (const key in cookieVal) {
      let input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", "_" + key);
      input.setAttribute("value", cookieVal[key]);
      form.appendChild(input);
    }
  }
});
