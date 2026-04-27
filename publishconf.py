"""
Production (publish) settings for Pelican.

These are only used when running `inv preview`.
"""

import os
import sys


sys.path.append(os.curdir)
from pelicanconf import *  # noqa


# Always use the production SITEURL so that RTD's files-changed logic
# can properly diff PR builds against the main build.
# Previously this was set to "" for PR builds, which caused every page
# to show as changed since SITEURL is embedded in canonical/og meta tags.
SITEURL = "https://www.ethicalads.io"
RELATIVE_URLS = False

# Generate from scratch when building for production
DELETE_OUTPUT_DIRECTORY = True


# Feed (RSS/Atom) settings
# --------------------------------------------------------------------------
FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"
