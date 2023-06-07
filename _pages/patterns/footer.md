---
layout: right
title: Footer
permalink: /patterns/footer
section: Patterns # initial cap required to make menu work
summary: |
  A footer serves site visitors who arrive at the bottom of a page without finding what they want.

alert:
  status: info
  content: There are three footers. The extra footers should be removed from the system, once you've chosen your version.
  
htmlpath: patterns/footer/footer-html.md
csspath: patterns/footer/index.scss
---

{{ page.summary }}

## The Design
{% include patterns/footer/footer.md settings="prototype" %}
---

{% include patterns/alert/alert.md content=page.alert %}

## Theme Settings
- $theme-footer-font-family - Font family of the footer.
- $theme-footer-max-width - Maximum width of footer container.

For this library we've set the `$theme-footer-max-width` to "widescreen", to fit with our [Grid](/styles/grid) strategy.

All other aspects to brand the footer will have to be overwritten using CSS.

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping
The library and prototype use the same footer which is set in the `_layouts/default.html` file. At default it's using the regular jekyll partial footer, this can be updated to use the extended header by changing `footer.md` or `footer-small` or `footer-ext.md`.

The navigation for the library is in `_data/lib-nav.yml` and for the prototype in `_data/nav.yml`. Settings for the logo and site name are in the `_data/settings.yml` file.