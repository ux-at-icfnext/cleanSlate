---
layout: right
title: Date Range Picker
permalink: /patterns/date-range-picker
section: Patterns # initial cap required to make menu work
summary: |
  A date range picker helps users select a range between two dates. Please review the <a href="https://designsystem.digital.gov/components/date-range-picker/">USWDS: Date Range Picker</a> for more information on how to use this component.

htmlpath: patterns/date-range-picker/date-range-picker-html.md
csspath: patterns/date-picker/index.scss


label: Label

jekyll: |
  {% include patterns/date-range-picker/date-range-picker.md content=page.date-range-picker.content settings=page.date-range-picker.settings %}

  Without settings - {% include patterns/date-range-picker/date-range-picker.md content=page.date-range-picker.content %}

---
{{ page.summary }}

## The Design
{% include patterns/date-range-picker/date-range-picker-html.md %}
---

## Theme Settings
N/A

## Variations
N/A

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
