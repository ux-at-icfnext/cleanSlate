---
layout: right
title: Search
permalink: /patterns/search
section: Patterns # initial cap required to make menu work
summary: |
  Search allows users an alternate pathway to content than through main navigation. This search widget is often used on header elements, or in page, to start the search journey. _See the [Search Results Template](/templates/search) - for more information on how search functions._

htmlpath: patterns/header/header.md
csspath: patterns/header/index.scss

jekyll: |
  {% include patterns/search/search-jk.md %}
jekyll2: |
  {% include patterns/search/search-jk.md content=myvariable %}
---

{{ page.summary | markdownify }}

## The Design
default:
{% include patterns/search/search-jk.md %}
small:
{% include patterns/search/search-jk.md content=page.searchsm %}
large:
{% include patterns/search/search-jk.md content=page.search %}
---

## Theme Settings
These aspects of the search can be set within the theme settings.

- $theme-search-font-family - _default: ui_
- $theme-search-min-width - _27ch_


All other aspects of the search will have to be overwritten by the CSS. For instance color:
- The color of the button is using the 'primary' color as is set up [buttons](/styles/buttons).
- The easiest way to change the button is to add the button class for the additional button styles. So `class="usa-button"` becomes `class="usa-button usa-button--secondary"`

## Library & Prototyping

To add search use the jekyll partial 
{% highlight liquid %}
  {{ page.jekyll }}
{% endhighlight %}

### Search options:
- To change options for search, place the array in the YML front matter and pass the options into the search with
{% highlight liquid %}
  {{ page.jekyll2 }}
{% endhighlight %}

- For the search in the header, place the array in the `_layouts/default.hml` and then update the `_includes/patterns/header/header-jk.md` file to pass the varibles into the search.

### Variable options:
Add only items you want to change.
{% highlight yml%}
myvariable:
  - small: true 
  - big: true
  - label: text for label on button
  - placeholder: text for inside the input
  - btn-class: use a button class (for example `usa-button--secondary` to change the color of the button).
{% endhighlight %}