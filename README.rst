EthicalAds
==========

This is a landing page for EthicalAds.io, the developer network from Read the Docs.


Site details
------------

The site is built as a static site using `Pelican <https://blog.getpelican.com/>`_ and hosted by `GitHub pages <https://pages.github.com/>`_.
The site is automatically built and updated when there are commits on the main branch although it can take up to 5 minutes.


Building the site locally
~~~~~~~~~~~~~~~~~~~~~~~~~

You can build the site HTML and serve it locally with:

.. code-block:: bash

    $ pip install -r requirements.txt
    $ pre-commit install  # Install a code style pre-commit hook
    $ inv rebuild         # build one time
    $ inv regenerate      # regenerate the site whenever you modify a page/post
    $ inv serve           # serve the site at http://localhost:8000

If you don't see any styling, you may also need to build static assets (see below).


Building static assets
~~~~~~~~~~~~~~~~~~~~~~

Built static assets are **NOT** checked into the repository and you need to build them
if files under ``static-src/`` are modified.

.. code-block:: bash

    $ npm install
    $ npm run build     # use "npm run dist" for minified builds

The static content appears in ``ethicalads-theme/static/``


Deploying the site
------------------

The site is generated automatically by GitHub Actions
whenever there's new commits on the ``main`` branch.
It is served by GitHub pages at https://www.ethicalads.io.

For more details on the deployment actions, see workflows_.

.. _workflows: https://github.com/readthedocs/ethicalads.io/tree/master/.github/workflows


Developing the site
-------------------
For guidance on title capitalization, see our [style guide](https://docs.google.com/document/d/1IKoejweuDeBcSvQWbXcBrzViFU8M9d0lMFBq8ODNEY4/edit?usp=sharing). 

Writing pages
~~~~~~~~~~~~~

Pages should be saved under ``content/pages/``.
By default, they use the ``ethicalads-theme/templates/page.html`` template but that can be overridden.


Writing blog posts
~~~~~~~~~~~~~~~~~~

Blog posts should be saved under ``content/posts/``.


Updating the design
~~~~~~~~~~~~~~~~~~~

The styles and scripts for the site are built by Webpack from the sources in ``static-src/``.
The HTML templates for the site live under ``ethical-ads-theme/``
and extend from Pelican's `simple theme`_.

The EthicalAds theme was not designed to work with relative URLs.

.. _simple theme: https://github.com/getpelican/pelican/tree/master/pelican/themes/simple/templates
