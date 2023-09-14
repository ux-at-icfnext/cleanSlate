---
layout: right
title: Colors
permalink: /styles/colors
section: styles 
summary: |
  A button draws attention to important actions with a large selectable surface.
---


## Theme colors
All patterns in the library make use of the theme token colors by default. There is some theming of patterns, see the pattern you are working with the apply global pattern level changes. 

### About theme color tokens
USWDS theme color tokens are divided into five high-level role-based color families: base, primary, secondary, accent-warm, and accent-cool.

**Base** is a project’s neutral color, typically some tint of gray, and usually used as the text color throughout.

_See the [USWDS](https://designsystem.digital.gov/design-tokens/color/theme-tokens/#about-theme-color-tokens) color tokens page to see the default colors_

### Customize theme palette
Set the theme palette by setting the values you want in the [theme settings file](/docs/themesettings). You can use either a [theme token](https://designsystem.digital.gov/design-tokens/color/system-tokens/#using-color-tokens-2) or a hex value.


{% include partials/colors-table.md content=site.data.color %}


## Library & Prototype use
Along with updating the [theme settings file](/docs/themesettings), please use the `site.data.colors.yml` file to update your colors. This will allow you to use color tokens in the css and also update this spec page with your chosen palatte.

Many patterns allow color application through the theme settings... and of course over all colors should be set that way. Using custom tokens or variables will help fill any gaps.

**Tokens**
Tokens are set up using this structure:
- .my-color
- .bg-my-color
- .br-my-color
- .br-block-my-color (top & bottom)
- .br-bars-my-color (left & right)
- .br-top-my-color
- .br-left-my-color
- .br-bottom-my-color
- .br-right-my-color

### Usage Example
example using variable
{% highlight css %}
  .myclass {
    background-color: $primary-dark;
  }
{% endhighlight %}

example using token
{% highlight scss %}
  .myclass {
    @extend .bg-accent-cool; 
  }
{% endhighlight %}