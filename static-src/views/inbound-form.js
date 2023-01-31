import * as jquery from 'jquery';
const ko = require('knockout');


function AdvertiserInboundFormViewModel() {

  this.getSelectedBudget = function () {
    let selected = null;

    if (this.passed_budget > 0 && this.passed_budget <= 1000) {
      selected = "500-1k";
    } else if (this.passed_budget > 1000 && this.passed_budget <= 3000) {
      selected = "1-3k";
    } else if (this.passed_budget > 3000 && this.passed_budget <= 5000) {
      selected = "3-5k";
    } else if (this.passed_budget > 5000) {
      selected = "5k+";
    }
    return selected;
  };

  let params = new URLSearchParams(document.location.search);

  this.passed_budget = parseInt(params.get("budget"), 10) || 0;
  this.passed_region = params.get("region");
  this.passed_topic = params.get("topic");
  this.calculator_url = params.get("calculator-url");

  this.referral = ko.observable();
}


if ($('#inbound-form').length > 0) {
  ko.applyBindings(new AdvertiserInboundFormViewModel());
}
