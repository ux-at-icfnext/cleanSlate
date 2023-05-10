---
layout: right
title: Footer
permalink: /patterns/footer
section: Patterns # initial cap required to make menu work
summary: |
  A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.

alert:
  status: info
  content: There are three footers. The extra footers should be removed from the system, once you've chosen your version.

htmlpath: patterns/footer/footer.md
csspath: patterns/footer/index.scss
---

{{ page.summary }}

## The Design
{% include patterns/footer/footer-jk.md settings="prototype" %}
---

{% include patterns/alert/alert-jk.md content=page.alert %}

## Theme Settings
- $theme-footer-font-family - Font family of the footer.
- $theme-footer-max-width - Maximum width of footer container.

For this library we've set the `$theme-footer-max-width` to "widescreen", to fit with our [Grid](/styles/grid) strategy.

All other aspects to brand the footer will have to be overwritten using CSS.

## Library & Prototyping
The library and prototype use the same footer which is set in the `_layouts/default.html` file. At default it's using the regular jekyll partial footer, this can be updated to use the extended header by changing `footer-jk.md` or `footer-small-jk` or `footer-ext-jk.md`.

The navigation for the library is in `_data/lib-nav.yml` and for the prototype in `_data/nav.yml`. Settings for the logo and site name are in the `_data/settings.yml` file.