import * as jquery from 'jquery';
const ko = require('knockout');


function SimilarPagesViewModel() {
  let params = new URLSearchParams(document.location.search);

  const initialUrl = params.get('url') || "";

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

    // Replace with an AJAX call to the ad server
    setTimeout(function (viewmodel) {
      viewmodel.results([{
          "url": "https://mongoengine-odm.readthedocs.io/",
          "title": "MongoEngine User Documentation",
          "image": "https://mongoengine-odm.readthedocs.io/favicon.ico",
          "description": "MongoEngine is an Object-Document Mapper, written in Python for working with MongoDB. To install it, simply run python -m pip install -U mongoengine",
        },
        {
          "url": "https://doc.ivre.rocks/en/latest/overview/principles.html",
          "title": "Principles - IVRE Documentation",
          "image": "https://doc.ivre.rocks/favicon.ico",
          "description": "IVRE is a network cartography (or network recon) framework. IVRE has five purposes (we use this word to refer to the different types of data IVRE handles), which can be stored by one or more backend databases:",
        },
      ]);
      viewmodel.state("loaded");
    }, 1000, this);
  };

  // Fire the form submission if there's a passed URL
  if (initialUrl) {
    this.getSimilarPages();
  }
}


if ($('form[name="similar-pages"]').length > 0) {
  ko.applyBindings(new SimilarPagesViewModel());
}
