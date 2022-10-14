Title: Campaign Calculator
slug: calculator
url: advertisers/calculator/
save_as: advertisers/calculator/index.html
description: What kind of return can you expect for your campaign? Use this calculator to change different audiences or metrics, and choose the budget that is right for you.


<div id="advertiser-calculator" class="card card-border border-primary shadow-light-lg">
  <div class="card-body">
    <div class="row justify-content-center">
      <div class="col-md-8 col-xs-12">

        <form>

          <div class="form-group mb-8">
            <h3>Geographic focus</h3>

            <div data-bind="foreach: regions">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="selected_region" data-bind="value: $data.name, checked: $parent.selected_region, attr: {'id': $data.slug}">
                <label class="form-check-label" data-bind="text: $data.name, attr: {'for': $data.slug}"></label>
              </div>
            </div>
          </div>

          <div class="form-group mb-8">
            <h3>Topic focus</h3>

            <div data-bind="foreach: topics">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="selected_topic" data-bind="value: $data.name, checked: $parent.selected_topic, attr: {'id': $data.slug}">
                <label class="form-check-label" data-bind="text: $data.name, attr: {'for': $data.slug}"></label>
              </div>
            </div>
          </div>

          <div class="form-group mb-8">
            <h3>Campaign budget</h3>
            <p class="small">This budget could be over just a few weeks or as long as a quarter. There is an automatic discount of 10% for campaigns over $3k in size.</p>
            <p class="text-center lead" data-bind="text: parseInt(budget()).toLocaleString('en-US', {maximumFractionDigits: 0, style: 'currency', currency: 'USD'})"></p>
            <input type="range" class="form-control-range" min="500" max="10000" data-bind="value: budget" name="budget" id="budget">
            <div class="d-flex">
              <div class="small flex-fill">$500</div>
              <div class="small flex-fill text-right">$10k</div>
            </div>
          </div>

          <div class="form-group mb-8">
            <h3>Ad click-through rate</h3>
            <p class="small">How often do visitors who see your ads click on them. This can vary widely based on how finely targeted your campaign is and how tuned the ads are to our audience. Our network average is about 0.12%. Extremely focused campaigns can do as high as 0.3-0.5%.</p>
            <p class="text-center lead" data-bind="text: parseFloat(ctr()).toFixed(2) + '%'"></p>
            <input type="range" class="form-control-range" min="0" max="1" step="0.01" data-bind="value: ctr" name="ctr" id="ctr">
            <div class="d-flex">
              <div class="small flex-fill">0.0%</div>
              <div class="small flex-fill text-right">1.0%</div>
            </div>
          </div>

          <div class="form-group mb-8">
            <h3>Landing page conversion rate</h3>
            <p class="small">How often does a visitor to your ad landing page take take the action you're looking for? This can vary widely depending on whether you're capturing emails, trying to get app downloads, or getting account signups.</p>
            <p class="text-center lead" data-bind="text: parseFloat(conversion_rate()).toFixed(1) + '%'"></p>
            <input type="range" class="form-control-range" min="0" max="100" step="0.1" data-bind="value: conversion_rate" name="conversion_rate" id="conversion_rate">
            <div class="d-flex">
              <div class="small flex-fill">0.0%</div>
              <div class="small flex-fill text-right">100.0%</div>
            </div>
          </div>

        </form>

      </div>
      <div class="col-md-4 col-xs-12">
        <div class="py-5 text-white bg-secondary rounded" data-bind="if: getSelectedRegion() && getSelectedTopic()">
          <div class="flex-fill text-center mb-5">
            <p class="small mb-0">Region</p>
            <p class="lead mb-0" data-bind="text: getSelectedRegion().name"></p>
          </div>
          <div class="flex-fill text-center mb-5">
            <p class="small mb-0">Topic</p>
            <p class="lead mb-0" data-bind="text: getSelectedTopic().name"></p>
          </div>
          <div class="flex-fill text-center mb-5">
            <p class="small mb-0">CPM</p>
            <p class="lead mb-0" data-bind="text: '$' + getCpm().toFixed(2)"></p>
            <p class="small mb-0" data-bind="if: budget() >= 3000">* 10% discount applied</p>
          </div>
          <div class="flex-fill text-center mb-5">
            <p class="small mb-0">Number of impressions</p>
            <p class="lead mb-0" data-bind="text: getNumImpressions().toLocaleString(undefined, {maximumFractionDigits: 0})"></p>
          </div>
          <div class="flex-fill text-center mb-5">
            <p class="small mb-0">Number of clicks</p>
            <p class="lead mb-0" data-bind="text: getNumClicks().toLocaleString(undefined, {maximumFractionDigits: 0})"></p>
          </div>
          <div class="flex-fill text-center mb-5">
            <p class="small mb-0">Number of conversions</p>
            <p class="lead mb-0" data-bind="text: getNumConversions().toLocaleString(undefined, {maximumFractionDigits: 0})"></p>
          </div>
        </div>

        <p class="text-center mt-10">
          <a href="/advertisers/#inbound-form" class="btn btn-primary lift">
            <span>Start your campaign</span>
          </a>
        </p>
      </div>
    </div> <!-- / .row -->
  </div>
</div>
