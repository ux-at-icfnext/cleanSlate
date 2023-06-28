---
layout: right
title: Date Picker
permalink: /patterns/date-picker
section: Patterns # initial cap required to make menu work
summary: |
  A date picker helps users select a single date. Please review the <a href="https://designsystem.digital.gov/components/date-picker/">USWDS: Date Picker</a> for more information on how to use this component.

htmlpath: patterns/date-picker/date-picker-html.md
csspath: patterns/date-picker/index.scss

icon: /assets/img/sprite.svg#credit_card
label: Label

jekyll: |
  {% include patterns/date-picker/date-picker.md content=page.date-picker.content settings=page.date-picker.settings %}

  Without settings - {% include patterns/date-picker/date-picker.md content=page.date-picker.content %}

---
{{ page.summary }}

## The Design
{% include patterns/date-picker/date-picker-html.md %}
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
