"""
Settings for the Pelican static site generator.

https://docs.getpelican.com/en/stable/settings.html
"""

AUTHOR = "Read the Docs, Inc."
SITENAME = "EthicalAds"
SITEURL = ""

PATH = "content"

# Directories are relative to PATH
PAGE_PATHS = ["pages"]
ARTICLE_PATHS = ["posts"]
STATIC_PATHS = ["images", "prospectus"]

TIMEZONE = "US/Pacific"
DEFAULT_LANG = "en"
DEFAULT_DATE_FORMAT = "%b %-d, %Y"


THEME = "ethicalads-theme"
SUMMARY_MAX_LENGTH = 20  # Words

# Add non-default markdown extensions
MARKDOWN = {
    "extension_configs": {
        "markdown.extensions.codehilite": {"css_class": "highlight"},
        "markdown.extensions.extra": {},
        "markdown.extensions.meta": {},
        # This adds id's to each header. Currently only shows items with `##` header.
        "markdown.extensions.toc": {"toc_depth": "2"},
    },
    "output_format": "html5",
}

PLUGINS = ["related_posts"]


# Feed (RSS/Atom) settings
# Feed generation is usually not desired when developing
# --------------------------------------------------------------------------
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None


# Menu settings
# --------------------------------------------------------------------------
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
MENUITEMS = [
    ("Blog", "/blog/"),
    ("Learning Hub", "/learning-hub/"),
    ("Advertisers", "/advertisers/"),
    ("Publishers", "/publishers/"),
]
MENUITEMS_CTA = [("Monetize your site", "/publishers/")]

# URL settings
# https://docs.getpelican.com/en/stable/settings.html#url-settings
# --------------------------------------------------------------------------
PAGE_URL = "{slug}/"
PAGE_SAVE_AS = "{slug}/index.html"
ARTICLE_URL = "blog/{date:%Y}/{date:%m}/{slug}/"
ARTICLE_SAVE_AS = "blog/{date:%Y}/{date:%m}/{slug}/index.html"
INDEX_SAVE_AS = "blog/index.html"
# Templates for these pages are not yet styled for the ethicalads-theme
AUTHOR_URL = AUTHOR_SAVE_AS = ""
CATEGORY_URL = CATEGORY_SAVE_AS = ""
TAG_URL = TAG_SAVE_AS = ""
ARCHIVES_SAVE_AS = ""
AUTHORS_SAVE_AS = ""
CATEGORIES_SAVE_AS = ""
TAGS_SAVE_AS = ""


# Blogroll
LINKS = ()

# Social widget
SOCIAL = ()


DEFAULT_PAGINATION = 10

# Used by the pelican-related-posts plugin
RELATED_POSTS_MAX = 3
