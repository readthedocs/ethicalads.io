# EthicalAds.io Agent Guide

This document provides a summary of the EthicalAds.io project structure, build processes, and coding/writing guidelines, based on the project's README.

## Project Overview

EthicalAds.io is the landing page for the developer ad network from Read the Docs.

### Technologies Used
*   **Static Site Generator:** [Pelican](https://getpelican.com/)
*   **Hosting:** Hosted by [Read the Docs](https://about.readthedocs.com/) and served via Read the Docs at https://www.ethicalads.io.
*   **Python Package Manager:** [uv](https://docs.astral.sh/uv/)
*   **Frontend Build:** Webpack (via npm) for building static assets (styles and scripts).

### Directory Structure
*   `content/pages/`: Contains static pages.
*   `content/posts/`: Contains blog posts.
*   `static-src/`: Source files for styles and scripts.
*   `ethicalads-theme/`: Contains the Pelican HTML templates (extending Pelican's simple theme).
*   `ethicalads-theme/static/`: Destination for built static assets (not checked into the repository).
*   `ethicalads-theme/templates/page.html`: The default template for pages.

## How to Build the Site

### Pelican Build

The project relies on `uv` for environment management. To build and serve the HTML locally:

```bash
uv python install       # Install a compatible Python version
uv sync                 # Install dependencies
uv run inv rebuild      # build one time
uv run inv regenerate   # regenerate the site whenever you modify a page/post
uv run inv serve        # serve the site at http://localhost:8000
uv run inv livereload   # Rebuild and serve the site on http://localhost:8000
```

### Building Static Assets (CSS/JS)

If you modify files under `static-src/` or don't see any styling locally, you must build the static assets. These assets are **not** checked into the repository.

```bash
npm clean-install
npm run build     # use "npm run dist" for minified builds
```
The output will be placed in `ethicalads-theme/static/`.

## Code Style

To ensure code quality and valid HTML output, always run the following tools before committing:

```bash
uv run pre-commit install           # Install pre-commit (one-time setup)
uv run pre-commit run --all-files   # Run pre-commit checks on all files
tox                                 # Run the HTML validator
```

## Writing Style Guide

When contributing content, follow these writing style guidelines, loosely based on the [Wikipedia Manual of Style](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style):

*   **Titles:** Use [title case](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Titles).
*   **Section Headings:** For `<h2>` and below, use sentence case. Headings should be descriptive and substantive beyond a simple noun.
