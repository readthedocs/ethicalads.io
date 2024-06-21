import * as jquery from 'jquery';
const ko = require('knockout');


function AdvertiserCalculatorViewModel() {
  // Helper function to validate the passed topic
  this.validateTopic = function (topic) {
    for (var i = 0; i < this.topics.length; i++) {
      if (this.topics[i].slug === topic) {
        return topic;
      }
    }

    return null;
  };

  // Helper function to validate the passed region
  this.validateRegion = function (region) {
    for (var i = 0; i < this.regions.length; i++) {
      if (this.regions[i].slug === region) {
        return region;
      }
    }

    return null;
  };

  this.getSelectedRegion = function () {
    for (var i = 0; i < this.regions.length; i++) {
      if (this.regions[i].slug === this.selected_region()) {
        return this.regions[i];
      }
    }
  };

  this.getSelectedTopic = function () {
    for (var i = 0; i < this.topics.length; i++) {
      if (this.topics[i].slug === this.selected_topic()) {
        return this.topics[i];
      }
    }
  };

  this.getBudget = function () {
    // this.budget can be text type when it is read from the form inputs
    return parseInt(this.budget(), 10);
  };

  this.getCpm = function () {
    let topic_slug = this.selected_topic();
    let region_slug = this.selected_region();
    let cpm = this.pricing[topic_slug][region_slug];

    if (this.budget() >= 25000) {
      cpm = cpm * 0.85;
    } else if (this.budget() >= 3000) {
      cpm = cpm * 0.9;
    }
    if (this.autorenewing()) {
      // 10% discount for auto-renewing
      cpm = cpm * 0.9;
    }
    return cpm;
  };

  this.getNumImpressions = function () {
    return this.budget() * 1000 / (Math.trunc(this.getCpm() * 100) / 100);
  };

  this.getNumClicks = function () {
    return this.getNumImpressions() * this.ctr() / 100;
  };

  this.getNumConversions = function () {
    return this.getNumClicks() * this.conversion_rate() / 100;
  };

  // Generate a URL to the calculator with these values
  this.getUrl = function () {
    let url = window.location.origin + window.location.pathname;
    let searchParams = new URLSearchParams({
      budget: this.budget(),
      region: this.selected_region(),
      topic: this.selected_topic(),
      autorenewing: this.autorenewing(),
    });
    return url + "?" + searchParams.toString();
  };

  this.setUrlState = function () {
    let url = this.getUrl();

    let state = {
      "budget": this.getBudget(),
      "region": this.selected_region(),
      "topic": this.selected_topic(),
      "autorenewing": this.autorenewing(),
    };

    window.history.pushState(state, null, url);
  };

  this.pricing = JSON.parse($('#data-pricing').text());
  this.regions = JSON.parse($('#data-regions').text());
  this.topics = JSON.parse($('#data-topics').text());

  let params = new URLSearchParams(document.location.search);

  let initial_budget = parseInt(params.get("budget"), 10) || 1000;
  let initial_region = this.validateRegion(params.get("region")) || "blend";
  let initial_topic = this.validateTopic(params.get("topic")) || "all-developers";
  let initial_autorenewing = Boolean(params.get("autorenewing")) || false;

  this.selected_region = ko.observable(initial_region);
  this.selected_topic = ko.observable(initial_topic);
  this.budget = ko.observable(initial_budget);
  this.autorenewing = ko.observable(initial_autorenewing);

  this.ctr = ko.observable(0.12);
  this.conversion_rate = ko.observable(5.0);

  // On changes to the region, topic, autorenew, or budget,
  // push the state to the browser's history API
  // This updates the URL in the URL bar without reloading the page
  this.selected_region.subscribe(function () {
    this.setUrlState();
  }, this);
  this.selected_topic.subscribe(function () {
    this.setUrlState();
  }, this);
  this.budget.subscribe(function () {
    this.setUrlState();
  }, this);
  this.autorenewing.subscribe(function () {
    this.setUrlState();
  }, this);
}


if ($('#advertiser-calculator').length > 0) {
  ko.applyBindings(new AdvertiserCalculatorViewModel());
}
