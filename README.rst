EthicalAds
==========

This is a landing page for EthicalAds.io,
the developer network coming soon from Read the Docs.


Building the site
-----------------

.. code-block:: bash

    $ npm install
    $ npm run build     # use "npm run dist" for minified builds

The static content appears in www/bundle


Deploying the site
------------------

The site is generated automatically by GitHub Actions
whenever there's new commits on the ``master`` branch.
It is served by GitHub pages at https://www.ethicalads.io.

For more details on the deployment actions, see workflows_.

.. _workflows: https://github.com/readthedocs/ethicalads.io/tree/master/.github/workflows
