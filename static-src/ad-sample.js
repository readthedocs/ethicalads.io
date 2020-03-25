import * as jquery from 'jquery';


const AD_DECISION_URL = "https://server.ethicalads.io/api/v1/decision/";

const SAMPLEAD_DIV = "sample-ad";
const AD_TYPE = "readthedocs-sidebar";

var data = {
  format: "jsonp",
  publisher: "ethicaladsio",

  // This only works because there's one of them
  // Otherwise they should be pipe (|) separated
  div_ids: SAMPLEAD_DIV,
  ad_types: AD_TYPE,
};


$.ajax({
  url: AD_DECISION_URL,
  crossDomain: true,
  data: data,
  dataType: "jsonp",
  success: function (data) {
    $("#" + SAMPLEAD_DIV).html(data.html);
  },
  error: function () {
    console.error('Failed to load an ad - check your ad blocker');
  },
});
