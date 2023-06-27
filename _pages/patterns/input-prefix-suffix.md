---
layout: right
title: Input Prefix or Suffix
permalink: /patterns/input-prefix-suffix
section: Patterns # initial cap required to make menu work
summary: |
  Use input prefixes and suffixes to show symbols or abbreviations that help users enter the right type of information in a form’s text input. Please review the <a href="https://designsystem.digital.gov/components/input-prefix-suffix/">USWDS: Input Prefix or Suffix</a> for more information on how to use this component.

htmlpath: patterns/input-prefix-suffix/input-prefix-suffix-html.md
csspath: patterns/input-prefix-suffix/index.scss

icon: /assets/img/sprite.svg#credit_card
label: Label

jekyll: |
  {% include patterns/input-prefix-suffix/input-prefix-suffix.md content=page.input-prefix-suffix.content settings=page.input-prefix-suffix.settings %}

  Without settings - {% include patterns/input-prefix-suffix/input-prefix-suffix.md content=page.input-prefix-suffix.content %}

---
{{ page.summary }}

## The Design
{% include patterns/input-prefix-suffix/input-prefix-suffix-html.md %}
---

## Theme Settings
N/A

## Variations
- usa-input-group--error - Displays an input group error state.
- usa-input-group--[width] - Displays an input group at a specific width. Accepts 2xs (5ex), xs (9ex), sm or small (13ex), md or medium (20ex), lg (30ex), xl (40ex), and 2xl (50ex).

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping


### Settings


### Content


### Front matter example


### Add pattern to page
{% highlight liguid %}
  {{ page.jekyll }}
{% endhighlight %}
---
