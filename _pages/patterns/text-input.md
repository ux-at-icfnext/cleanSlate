---
layout: right
title: Text Input
permalink: /patterns/text-input
section: Patterns # initial cap required to make menu work
summary: |
  A summary box highlights key information from a longer page or displays next steps. Please review the <a href="https://designsystem.digital.gov/components/summary-box/">USWDS: Summary Box</a> for more information on how to use this component.

htmlpath: patterns/text-input/text-input-html.md
csspath: patterns/text-input/index.scss

summary-box:
  content:
    - title: Summary Box Title
      list:
        - item: Detail List Text Goes Here
        - item: Text
        - item: Text
jekyll: |
  {% include patterns/text-input/text-input.md content=page.text-input.content settings=page.text-input.settings %}

  Without settings - {% include patterns/text-input/text-input.md content=page.text-input.content %}
---
{{ page.summary }}

## The Design
{% include patterns/text-input/text-input-html.md %}
---

## Theme Settings
- $theme-summary-box-background-color - Background color of the Summary box.
- $theme-summary-box-border-color - Color the border around the Summary box.
- $theme-summary-box-border-width - Width of the border around the Summary box.
- $theme-summary-box-border-radius - Border radius of the summary box.
- $theme-summary-box-font-family  - Font family of the content text.
- $theme-summary-box-link-color - Color of the links inside the content text. When set to “default”, links will get one of three values, based on contrast: $theme-link-color, $theme-link-reverse-color, or “ink”.
- $theme-summary-box-text-color - Color of the content text. When set to “default”, text will get one of two values, based on contrast: $theme-text-reverse-color or $theme-text-color.

## Variations
None

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
=======
---
