---
layout: right
title: Grid System
permalink: /styles/grid
section: Styles # initial cap required to make menu work
#type: prototype
summary: |
  Use our flexible grid system to structure website content. The grid is mobile-first, powered by flexbox, and based on a 12-column system.
---
## How it works
The USWDS uses a flexible grid system which is mobile-first, powered by flexbox, and based on the 12-column grid system. Nesting grids is also a capibility. For our site, using this grid system is perfered over measuring widith via pixels. You can read more about how the grid system works on USWDS. This guide covers our layout settings.

## Global grids

- __.grid-container__ is used for controlling the width of content elements. This is controlled through `$theme-grid-container-max-width` in settings. We have left that unchanged for our design
- __.usa-banner__ is used to controll the width of the banner. This is controlled through `$theme-banner-max-width`.
- __.usa-header__ is used to controll the width of the header. This is controlled through `$theme-header-max-width`.
- __.usa-footer__ is used to controll the width of the footer. This is controlled through `$theme-footer-max-width`.
- __.usa-identifier__ is used to controll the width of the identifier. This is controlled through `$theme-identifier-max-width`.

For this design the banner, header, footer and identifier have all be set to widescreen (1400px). The grid container uses the desktop-large(1200px).


## Theme settings
Please refer to the [Theme Settings](https://designsystem.digital.gov/utilities/layout-grid/#variables-2) documentation for more information on how to work with the settings file.

To apply our grid customizations the settings file should contain:

{% highlight css%}
@use "uswds-core" with(
    $theme-show-notifications: false,
    $theme-show-compile-warnings: false,
    $theme-image-path: "../img",
    $theme-font-path: "../uswds/fonts",
    $theme-banner-max-width: "widescreen",
    $theme-header-max-width: "widescreen",
    $theme-footer-max-width: "widescreen",
    $theme-identifier-max-width: "widescreen",
    $theme-grid-container-max-width: "desktop-lg",
    $theme-utility-breakpoints: (
                'card': false,   // 160px
                'card-lg': false,   // 240px
                'mobile': false,   // 320px
                'mobile-lg': true,    // 480px
                'tablet': true,    // 640px
                'tablet-lg': true,   // 880px
                'desktop': false,    // 1024px
                'desktop-lg': true,   // 1200px
                'widescreen': true,   // 1400px
        ),
);
{% endhighlight %}


## Full bleeds

By nature, both the header and foot have fullwidth bleeds (the background color extends to both edges of the screen). To create a full bleed for the .grid-container, it should be nested inside another div.

For example:

{% highlight html %}
<div class="blue-wrapper">
  <div class="grid-container">
    (content object)
  </div>
<div>
{% endhighlight %}

with example CSS

{% highlight css %}
.blue-wrapper {
      background-color: #EEF1F9;
      padding-block: 1.25rem;
  }
{% endhighlight %}

## Responsive
Media queries: Grid breakpoints are based on minimum-width media queries, meaning they apply to that specific width and all greater widths (e.g., `tablet:col-4` applies to tablet, desktop, and widescreen devices but not at mobile-lg or any width below the tablet breakpoint). Refer to [USWDS](https://designsystem.digital.gov/utilities/layout-grid/#additional-functionality-2).

A good example for using this responsive technique is in our many card group layouts. By setting the card group class to `tablet:col-4` the cards will layout 3 cards across for tablet devices and above.

Here is an example for layout out a card group that goes 3 across from table up and also has the blue background bleed.

{% highlight html %}
<div class="blue-wrapper">
  <div class="grid-container">
    <ul class="usa-card-group">
      <li class="tablet:grid-col-4 usa-card">
        (card pattern)
      </li>
    </ul>
  </div>
</div>
{% endhighlight%}
