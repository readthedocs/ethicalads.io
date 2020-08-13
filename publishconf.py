"""
Production (publish) settings for Pelican.

These are only used when running `inv preview` or `inv publish`
"""
import os
import sys

sys.path.append(os.curdir)
from pelicanconf import *


# This setting is needed to make the RSS/Atom feeds generate correctly
SITEURL = "https://www.ethicalads.io"
RELATIVE_URLS = False

# Generate from scratch when building for production
DELETE_OUTPUT_DIRECTORY = True


# Feed (RSS/Atom) settings
# --------------------------------------------------------------------------
FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/{slug}.atom.xml"
