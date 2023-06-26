---
layout: right
title: Tooltip
permalink: /patterns/tooltip
section: Patterns # initial cap required to make menu work
summary: |
  A tooltip is a short descriptive message that appears when a user hovers or focuses on an element. Please review the <a href="https://designsystem.digital.gov/components/tooltip/">USWDS: Tool Tip</a> for more information on how to use this component.

htmlpath: patterns/tooltip/tooltip-html.md
csspath: patterns/tooltip/index.scss

position: right
buttonText: Tool Tip Button
text: right
jekyll: |
  {% include patterns/tooltip/tooltip.md %}
---
{{ page.summary }}

## The Design
{% include patterns/tooltip/tooltip-html.md %}
---

## Theme Settings
- $theme-tooltip-background-color - Background color of tooltip.
- $theme-tooltip-font-color - Text color of tooltip.
- $theme-tooltip-font-size - Font size of tooltip.

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
