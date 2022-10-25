import * as jquery from 'jquery';
const ko = require('knockout');


function AdvertiserCalculatorViewModel() {
  this.pricing = JSON.parse($('#data-pricing').text());
  this.regions = JSON.parse($('#data-regions').text());
  this.topics = JSON.parse($('#data-topics').text());

  this.selected_region = ko.observable("blend");
  this.selected_topic = ko.observable("all-developers");
  this.budget = ko.observable(1000);
  this.ctr = ko.observable(0.12);
  this.conversion_rate = ko.observable(5.0);

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

  this.getCpm = function () {
    let topic_slug = this.selected_topic();
    let region_slug = this.selected_region();
    let cpm = this.pricing[topic_slug][region_slug];

    if (this.budget() >= 3000) {
      cpm = cpm * 0.9;
    }
    return cpm;
  };

  this.getNumImpressions = function () {
    return this.budget() * 1000 / this.getCpm();
  };

  this.getNumClicks = function () {
    return this.getNumImpressions() * this.ctr() / 100;
  };

  this.getNumConversions = function () {
    return this.getNumClicks() * this.conversion_rate() / 100;
  };
}


if ($('#advertiser-calculator').length > 0) {
  ko.applyBindings(new AdvertiserCalculatorViewModel());
}
