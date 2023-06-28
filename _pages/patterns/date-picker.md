---
layout: right
title: Date Picker
permalink: /patterns/date-picker
section: Patterns # initial cap required to make menu work
summary: |
  A date picker helps users select a single date. Please review the <a href="https://designsystem.digital.gov/components/date-picker/">USWDS: Date Picker</a> for more information on how to use this component.

htmlpath: patterns/date-picker/date-picker-html.md
csspath: patterns/date-picker/index.scss

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
