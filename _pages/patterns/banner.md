---
layout: right
title: Banner
permalink: /patterns/banner
section: Patterns # initial cap required to make menu work
summary: |
  Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.

htmlpath: patterns/banner/banner.md
csspath: patterns/banner/index.scss
---
{{ page.summary }}

## The Design
{% include patterns/banner/banner.md %}
---

## Theme Settings
- $theme-banner-background-color - Background color of the banner and its content.
- $theme-banner-font-family - The font family of the banner.
- $theme-banner-link-color - The color of banner link. Add the link color and the system will generate the hover state. Default uses the default link settings calculated from your background color.
- $theme-banner-max-width  - Maximum width of the banner content.

For this library we've set the `$theme-banner-max-width` to "widescreen", to fit with our [Grid](/styles/grid) strategy.

Note: there is not need to change the html/content of the banner - just change to look & feel through Theme Settings and CSS to match the site brand.

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping
The banner patterns shows up automatically on pages that set the `type: prototype` in the YML front matter.