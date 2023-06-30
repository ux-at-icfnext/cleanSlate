---
layout: right
title: Select
permalink: /patterns/select
section: Patterns # initial cap required to make menu work
summary: |
  A select component allows users to choose one option from a temporary modal menu. Please review the <a href="https://designsystem.digital.gov/components/select/">USWDS: Select</a> for more information on how to use this component.

htmlpath: patterns/select/select-html.md
csspath: patterns/select/index.scss

dropdown-label: Label
select:
  content:
    - value: Value1
      option: Option 1
    - value: Value2
      option: Option 2
    - value: Value3
      option: Option 3

jekyll: |
  {% include patterns/select/select.md content=page.select.content settings=page.select.settings %}

  Without settings - {% include patterns/select/select.md content=page.select.content %}

---
{{ page.summary }}

## The Design
{% include patterns/select/select-html.md %}
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
