---
layout: right
title: Identifier
permalink: /patterns/identifier
section: Patterns # initial cap required to make menu work
summary: |
  The identifier communicates a site’s parent agency and displays agency links required by federal laws and policies.

htmlpath: patterns/identifier/identifier-html.md
csspath: patterns/identifier/index.scss
---
{{ page.summary }}

## The Design
{% include patterns/identifier/identifier.md %}
---

## Code Examples
{% include partials/code-accordion.md %}

## Theme Settings
- $theme-identifier-background-color - The background color of the identifier. Use a color of grade 80 or higher, darker than the section that precedes it.

- $theme-identifier-font-family - The font family of the identifier.

- $theme-identifier-identity-domain-color - The color of your domain text in the identifier masthead. This should be grade 20-30 in the same family as the $theme-identifier-background-color.

- $theme-identifier-max-width - The maximum width of the content within the identifier. Use the same max-width as your site footer.

- $theme-identifier-primary-link-color - The color of the links in the masthead section. Default uses either the standard or reverse link color set with $theme-link-color and $theme-link-reverse-color.

- $theme-identifier-secondary-link-color - The color of the links in the required links section. This should be grade 20-30 in a gray family.


## Library & Prototyping
The banner patterns shows up automatically on pages that set the `type: prototype` in the YML front matter.
- The values for the site, parent agency and logo can be changed in the `_data/settings.yml` file.
- To edit the actual links ... use the `_includes/patterns/identifier/idenitifier.md` file.