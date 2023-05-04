---
layout: right
title: Header
permalink: /patterns/header
section: Patterns # initial cap required to make menu work
summary: |
  A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.

alert:
  status: info
  title: Header versions
  content: There are multiple heading. Extra headings should be removed from the system, once you've chosen your version.

htmlpath: patterns/header/header.md
csspath: patterns/header/index.scss
---

{% include patterns/alert/alert-jk.md content=page.alert %}

Please not that mega menus were not added to the library. Even though this pattern exist in the USWDS, megamenus have usability and accessiblity issues. They are also becoming old fashion. See more about this from [NNGroup](https://www.nngroup.com/articles/mega-menus-work-well/). However, if the solution for you web properity needs a mega menu, the code and specifications can be found on the [header spec](https://designsystem.digital.gov/components/header/) for the USDWS.  

## Theme Settings
These aspects of the header can be set within the theme settings.
- __$theme-header-font-family__  _default: ui_
- __$theme-header-logo-text-width__ _default: 33%_  Width of the logo text area at desktop width as a percentage of the total header width.
- __$theme-header-max-width__ _default: destop_ Maximum width of the header.
- __$theme-header-min-width__ _default: desktop_ - smallest breakpoint before showing mobile menu

For this library we've set the `$theme-header-max-width` to "widescreen", to fit with our [Grid](/styles/grid) strategy.

All other aspects to brand the header will have to be overwritten using CSS.


## Library & Prototyping
The library and prototype use the same header which is set in the `_layouts/default.html` file. At default it's using the regular jekyll partial header, this can be updated to use the extended header by changing `header-jk.md` to `header-ext-jk.md`.

The navigation for the library is in `_data/lib-nav.yml` and for the prototype in `_data/nav.yml`. Settings for the logo and site name are in the `_data/settings.yml` file.

