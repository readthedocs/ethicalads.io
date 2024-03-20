import * as jquery from 'jquery';
const ko = require('knockout');


function SimilarPagesViewModel() {
  let params = new URLSearchParams(document.location.search);

  const initialUrl = params.get('url') || "";

  // const SIMILAR_PAGES_URL = "http://ethicaladserver.lan:5000/api/v1/similar-pages/";
  const SIMILAR_PAGES_URL = "https://server.ethicalads.io/api/v1/similar-pages/";

  this.url = ko.observable(initialUrl);
  this.results = ko.observable([]);
  this.state = ko.observable();


  // Gets the current URL with the extra custom URL query parameter
  this.getUrl = function () {
    let url = window.location.origin + window.location.pathname;
    let searchParams = new URLSearchParams({
      url: this.url(),
    });
    return url + "?" + searchParams.toString();
  };

  // Sets the current URL into the browser history
  // This lets users copy/paste the URL on similar pages example
  // to show results for a specific product page URL
  this.setUrlState = function () {
    let state = {
      "url": this.url(),
    };

    window.history.pushState(state, null, this.getUrl());
  };

  // Handles retrieving similar pages.
  // Fired when the user submits the form or when there's a passed URL
  this.getSimilarPages = function () {
    if (!this.url()) return;

    console.debug("Retrieving similar pages to: " + this.url() + "...");

    this.setUrlState();
    this.state("loading");
    this.results([]);

    let viewmodel = this;

    $.ajax({
      "method": "GET",
      "url": SIMILAR_PAGES_URL,
      "data": {"url": this.url()},
    })
    .done(function(data) {
      let res = [];
      data.results.forEach(function (result) {
        let url = new URL(result.url);
        let image = url.origin + "/favicon.ico";
        res.push({
          "title": result.title,
          "description": result.description,
          "url": result.url,
          "distance": result.distance,
          "image": image,
        });
      });
      viewmodel.results(res);
      viewmodel.state("loaded");
    })
    .fail(function(data) {
      viewmodel.state("error");
      console.debug("Error getting similar pages", data);
    });
  };

  // Fire the form submission if there's a passed URL
  if (initialUrl) {
    this.getSimilarPages();
  }
}


if ($('form[name="similar-pages"]').length > 0) {
  ko.applyBindings(new SimilarPagesViewModel());
}
