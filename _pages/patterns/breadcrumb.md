---
layout: right
title: Breadcrumb
permalink: /patterns/breadcrumb
section: Patterns # initial cap required to make menu work
summary: |
  Breadcrumbs provide secondary navigation to help users understand where they are in a website.

htmlpath: patterns/breadcrumb/breadcrumb-html.md
csspath: patterns/breadcrumb/index.scss
---

{{ page.summary }}

## The Design
{% include patterns/breadcrumb/breadcrumb.md %}
---

## Theme Settings
- $theme-breadcrumb-background-color - The background color of the complete breadcrumb bar. Default uses body background color set in $theme-body-background-color.
- $theme-breadcrumb-font-family - The family of the breadcrumb text.
- $theme-breadcrumb-font-size - The size of the breadcrumb text.
- $theme-breadcrumb-link-color - The color of breadcrumb link. Add the link color and the system will generate the hover state. Default uses the default link settings calculated from your background color.
- $theme-breadcrumb-min-width - The width at which the breadcrumb displays the full breadcrumb list.
- $theme-breadcrumb-padding-bottom - Padding below the breadcrumb.
- $theme-breadcrumb-padding-top - Padding above the breadcrumb.
- $theme-breadcrumb-padding-x - Padding to the right and left of the breadcrumb.
- $theme-breadcrumb-separator-color - Color of the breadcrumb separator. This value needs AA contrast against the background.

All other aspects of breadcrumb can be controlled through CSS overrides.

## Variations
Add class `.usa-breadcrumb--wrap` to wrap the breadcrumb bar instead of truncating.

## Library & Prototyping
All pages in the library and prototype will have breadcrumbs automatically. Add `breadcrumb: "off"` to YML frontmatter to turn off. 
- In most cases, breadcrumbs should be hidden on home page and some lading pages -- otherwise they should be on.
- Add `breadwrap: true` to YML front matter to to on wrapping. (alternatively, this should be a global change... the `_includes/patterns/breadcrumb/breadcrumb.md` can be updated.)
- If needed, a class can be assigned to the breadcrumb using `page.breadclass: MyClass` in the YML frontmatter. This allows for changing the styling, for example, on an image or backgroud color.