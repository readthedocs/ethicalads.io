import * as jquery from 'jquery';
const ko = require('knockout');


function AdvertiserCalculatorViewModel() {
  this.regions = [
    {
      "name": "US & Canada",
      "slug": "us-ca"
    },
    {
      "name": "Western Europe, Australia, New Zealand",
      "slug": "weu"
    },
    {
      "name": "Eastern EU, Asia Pacific",
      "slug": "eeu-apac"
    },
    {
      "name": "Global",
      "slug": "global"
    }
  ];
  this.topics = [
    {
      "name": "Data science and machine learning",
      "slug": "datascience",
      "prices": {
        "US & Canada": 6.00,
        "Western Europe, Australia, New Zealand": 5.00,
        "Eastern EU, Asia Pacific": 2.50,
        "Global": 1.00,
      }
    },
    {
      "name": "Security and privacy",
      "slug": "security",
      "prices": {
        "US & Canada": 5.50,
        "Western Europe, Australia, New Zealand": 4.50,
        "Eastern EU, Asia Pacific": 2.25,
        "Global": 0.85,
      }
    },
    {
      "name": "DevOps",
      "slug": "devops",
      "prices": {
        "US & Canada": 5.50,
        "Western Europe, Australia, New Zealand": 4.50,
        "Eastern EU, Asia Pacific": 2.25,
        "Global": 0.85,
      }
    },
    {
      "name": "Frontend web development",
      "slug": "frontend-web",
      "prices": {
        "US & Canada": 5.50,
        "Western Europe, Australia, New Zealand": 4.50,
        "Eastern EU, Asia Pacific": 2.25,
        "Global": 0.85,
      }
    },
    {
      "name": "Backend web development",
      "slug": "backend-web",
      "prices": {
        "US & Canada": 5.00,
        "Western Europe, Australia, New Zealand": 4.00,
        "Eastern EU, Asia Pacific": 2.00,
        "Global": 0.75,
      }
    },
    {
      "name": "All developers",
      "slug": "all-developers",
      "prices": {
        "US & Canada": 4.70,
        "Western Europe, Australia, New Zealand": 3.50,
        "Eastern EU, Asia Pacific": 1.50,
        "Global": 0.66,
      }
    },
  ];
  this.selected_region = ko.observable("US & Canada");
  this.selected_topic = ko.observable("All developers");
  this.budget = ko.observable(1000);
  this.ctr = ko.observable(0.12);
  this.conversion_rate = ko.observable(5.0);

  this.getSelectedRegion = function () {
    for (var i = 0; i < this.regions.length; i++) {
      if (this.regions[i].name === this.selected_region()) {
        return this.regions[i];
      }
    }
  };

  this.getSelectedTopic = function () {
    for (var i = 0; i < this.topics.length; i++) {
      if (this.topics[i].name === this.selected_topic()) {
        return this.topics[i];
      }
    }
  };

  this.getCpm = function () {
    for (var i = 0; i < this.topics.length; i++) {
      if (this.topics[i].name === this.selected_topic()) {
        for (const region in this.topics[i].prices) {
          if (region == this.selected_region()) {
            let cpm = this.topics[i].prices[region];
            if (this.budget() >= 3000) {
              cpm = cpm * 0.9;
            }
            return cpm;
          }
        }
      }
    }
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
