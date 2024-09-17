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
STATIC_PATHS = ["images", "downloads", "prospectus", "audio"]

TIMEZONE = "US/Pacific"
DEFAULT_LANG = "en"
DEFAULT_DATE_FORMAT = "%b %-d, %Y"


THEME = "ethicalads-theme"
SUMMARY_MAX_LENGTH = 20  # Words

# Add non-default markdown extensions
MARKDOWN = {
    "extension_configs": {
        "markdown.extensions.codehilite": {"css_class": "codehilite"},
        "markdown.extensions.extra": {},
        "markdown.extensions.meta": {},
        # This adds id's to each header. Currently only shows items with `##` & `###` header.
        "markdown.extensions.toc": {"toc_depth": "3"},
    },
    "output_format": "html5",
    "tab_length": 2,  # Support indenting 2 spaces for lists as per mdformat
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
    ("Pricing", "/advertisers/pricing/"),
    ("Advertisers", "/advertisers/"),
    ("Publishers", "/publishers/"),
]
MENUITEMS_CTA = [("Advertise with Us", "/advertisers/")]

# URL settings
# https://docs.getpelican.com/en/stable/settings.html#url-settings
# --------------------------------------------------------------------------
PAGE_URL = "{slug}/"
PAGE_SAVE_AS = "{slug}/index.html"
ARTICLE_URL = "blog/{date:%Y}/{date:%m}/{slug}/"
ARTICLE_SAVE_AS = "blog/{date:%Y}/{date:%m}/{slug}/index.html"
INDEX_SAVE_AS = "blog/index.html"
TAG_URL = TAG_SAVE_AS = "blog/tags/{slug}/index.html"
TAGS_SAVE_AS = "blog/tags/index.html"

# Templates for these pages are not yet styled for the ethicalads-theme
AUTHOR_URL = AUTHOR_SAVE_AS = ""
CATEGORY_URL = CATEGORY_SAVE_AS = ""
ARCHIVES_SAVE_AS = ""
AUTHORS_SAVE_AS = ""
CATEGORIES_SAVE_AS = ""

DEFAULT_METADATA = {
    # Used to fill out the pricing matrix
    # And the advertiser calculator
    "pricing": {
        "niche": {
            "network": 6.00,
            "eng": 6.00,
            "blend": 6.00,
            "weu": 6.00,
            "eeu-apac": 6.00,
            "global": 6.00,
        },
        "security": {
            "network": 4.33,
            "eng": 6.75,
            "blend": 5.5,
            "weu": 4.25,
            "eeu-apac": 2.0,
            "global": 0.7,
        },
        "datascience": {
            "network": 4.25,
            "eng": 6.5,
            "blend": 5.37,
            "weu": 4.25,
            "eeu-apac": 2.0,
            "global": 0.8,
        },
        "devops": {
            "network": 4.0,
            "eng": 6.25,
            "blend": 5.12,
            "weu": 4.0,
            "eeu-apac": 1.75,
            "global": 0.7,
        },
        "frontend": {
            "network": 4.10,
            "eng": 6.5,
            "blend": 5.25,
            "weu": 4.0,
            "eeu-apac": 1.75,
            "global": 0.7,
        },
        "backend": {
            "network": 3.6,
            "eng": 5.75,
            "blend": 4.62,
            "weu": 3.5,
            "eeu-apac": 1.5,
            "global": 0.6,
        },
        "all-developers": {
            "network": 3.0,
            "eng": 5.00,
            "blend": 4.00,
            "weu": 3.00,
            "eeu-apac": 1.1,
            "global": 0.5,
        },
    },
    "regions": [
        {
            "slug": "network",
            "name": "Run of Network",
            "tooltip": "33% English speaking, 33% Western Europe, 33% APAC/E-EU",
        },
        {"slug": "eng", "name": "US, Canada, UK, Australia, New Zealand, Ireland"},
        {
            "slug": "blend",
            "name": "Blend: W. Europe, US, Canada, UK, Australia, New Zealand",
        },
        {"slug": "weu", "name": "Western Europe"},
        {"slug": "eeu-apac", "name": "Eastern EU, Asia Pacific"},
        {"slug": "global", "name": "Global"},
    ],
    "topics": [
        {"slug": "niche", "name": "Custom niche targeting (Run of Network only)"},
        {"slug": "security", "name": "Security & privacy"},
        {"slug": "datascience", "name": "AI & machine learning"},
        {"slug": "devops", "name": "DevOps"},
        {"slug": "frontend", "name": "Frontend web development"},
        {"slug": "backend", "name": "Backend web development"},
        {"slug": "all-developers", "name": "All developers"},
    ],
}


# Blogroll
LINKS = ()

# Social widget
SOCIAL = ()


DEFAULT_PAGINATION = 10

# Used by the pelican-related-posts plugin
RELATED_POSTS_MAX = 3
