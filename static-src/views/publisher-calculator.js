import * as jquery from 'jquery';
const ko = require('knockout');


function PublisherCalculatorViewModel() {
  // Helper function to validate the passed source
  this.validatePageviewSource = function (source) {
    for (var i = 0; i < this.PAGEVIEW_SOURCES.length; i++) {
      if (this.PAGEVIEW_SOURCES[i].value === source) {
        return source;
      }
    }

    return null;
  };

  this.getPageviewMultiplier = function () {
    for (var i = 0; i < this.PAGEVIEW_SOURCES.length; i++) {
      if (this.PAGEVIEW_SOURCES[i].value === this.pageview_source()) {
        return this.PAGEVIEW_SOURCES[i].multiplier;
      }
    }
  };

  this.getNumAdImpressions = function () {
    return this.pageviews() * this.getPageviewMultiplier();
  };

  this.getMonthlyPayout = function () {
    return (this.getNumAdImpressions() / 1000) * this.cpm();
  };

  this.getCpm = function () {
    return parseFloat(this.cpm());
  };

  // Generate a URL to the calculator with these values
  this.getUrl = function () {
    let url = window.location.origin + window.location.pathname;
    let searchParams = new URLSearchParams({
      cpm: this.cpm(),
      pageviews: this.pageviews(),
      pageview_source: this.pageview_source(),
    });
    return url + "?" + searchParams.toString();
  };

  this.setUrlState = function () {
    let url = this.getUrl();

    let state = {
      "cpm": this.cpm(),
      "pageviews": this.pageviews(),
      "pageview_source": this.pageview_source(),
    };

    window.history.pushState(state, null, url);
  };

  let params = new URLSearchParams(document.location.search);

  // The multipliers are a bit arbitrary
  // but take into account the data from https://docs.readthedocs.io/en/stable/advertising/ad-blocking.html#statistics-and-data
  // as well as we took a few measurements for Read the Docs analytics and compared it with ad views
  this.PAGEVIEW_SOURCES = [
    {value: "js-analytics", text: "JavaScript-based analytics (GA, Plausible, Simple)", multiplier: 0.65},
    {value: "logs", text: "Server-side analytics (CDN stats, log parsing)", multiplier: 0.3},
    {value: "ad-network", text: "Another ad network", multiplier: 0.8},
  ];

  let initial_cpm = parseFloat(params.get("cpm")) || 2.55;
  let initial_pageviews = parseInt(params.get("pageviews"), 10) || 250000;
  let initial_pageview_source = this.validatePageviewSource(params.get("pageview_source")) || this.PAGEVIEW_SOURCES[0].value;

  this.cpm = ko.observable(initial_cpm);
  this.pageviews = ko.observable(initial_pageviews);
  this.pageview_source = ko.observable(initial_pageview_source);

  // On changes to the cpm or pageviews or pageview source,
  // push the state to the browser's history API
  // This updates the URL in the URL bar without reloading the page
  this.cpm.subscribe(function () {
    this.setUrlState();
  }, this);
  this.pageviews.subscribe(function () {
    this.setUrlState();
  }, this);
  this.pageview_source.subscribe(function () {
    this.setUrlState();
  }, this);
}


if ($('#publisher-calculator').length > 0) {
  ko.applyBindings(new PublisherCalculatorViewModel());
}
