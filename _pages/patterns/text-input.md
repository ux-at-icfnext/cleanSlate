---
layout: right
title: Text Input
permalink: /patterns/text-input
section: Patterns # initial cap required to make menu work
summary: |
  A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines. Please review the <a href="https://designsystem.digital.gov/components/text-input/">USWDS: Text Input</a> for more information on how to use this component.

htmlpath: patterns/text-input/text-input-html.md
csspath: patterns/text-input/index.scss

input-label: Input Label
area-label: Textarea Label

jekyll: |
  {% include patterns/text-input/text-input.md %}
---
{{ page.summary }}

## The Design
{% include patterns/text-input/text-input-html.md %}
---

## Theme Settings
N/A

## Variations
- usa-input--error - The error state of the text input.
- usa-input--success - The success state of the text input.
- usa-input--[width] - Displays an input at a specific width. Accepts 2xs (4ex), xs (7ex), sm or small (10ex), md or medium (20ex), lg (30ex), xl (40ex), and 2xl (50ex).

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
