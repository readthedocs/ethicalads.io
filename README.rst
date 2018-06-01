EthicalAds
==========

This is a landing page for EthicalAds.io,
the developer network coming soon from Read the Docs.


Building the site
-----------------

    % npm install
    % npm run build     # use "npm run build-production" for minified builds

The static content appears in www/bundle


Deploying the site
------------------

The following command will run a production asset build,
commit the resulting ``www/`` directory to the ``gh-pages`` branch,
and push to ``origin/gh-pages``.

    % npm run deploy
