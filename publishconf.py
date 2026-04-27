"""
Production (publish) settings for Pelican.

These are only used when running `inv preview`.
"""

import os
import sys


sys.path.append(os.curdir)
from pelicanconf import *  # noqa


# Use relative URLs so that RTD's files-changed logic
# can properly diff PR builds against the main build.
SITEURL = ""
RELATIVE_URLS = False

# FEED_DOMAIN is needed for RSS/Atom feeds to have absolute URLs
FEED_DOMAIN = "https://www.ethicalads.io"

# Generate from scratch when building for production
DELETE_OUTPUT_DIRECTORY = True


# Feed (RSS/Atom) settings
# --------------------------------------------------------------------------
FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"
