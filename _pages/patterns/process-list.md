---
layout: right
title: Process List
permalink: /patterns/process-list
section: Patterns # initial cap required to make menu work
summary: |
  Pagination is navigation for paginated content. Please review the <a href="https://designsystem.digital.gov/components/pagination/">USWDS: Pagination</a> for more information on how to use this component.

htmlpath: patterns/process-list/process-list-html.md
csspath: patterns/process-list/index.scss

process-list:
  content:
    - title: Process List Item 1
      content: |
        Process List Content
      detail-list:
        - text: Detail List Text Goes Here
        - text: Text
        - text: Text
    - title: Process List Item 2
      content: |
        Process List Content
jekyll: |
  {% include patterns/process-list/process-list.md content=page.process-list.content settings=page.process-list.settings %}

  Without settings - {% include patterns/process-list/process-list.md content=page.process-list.content %}
---
{{ page.summary }}

## The Design
{% include patterns/process-list/process-list-html.md %}
---

## Theme Settings
- $theme-process-list-counter-background-color - The background color of the counter circle.
- $theme-process-list-counter-border-color - Color of the border around the counter circle.
- $theme-process-list-counter-border-width - Size of the border around the counter circle.
- $theme-process-list-counter-font-family - Font family of the counter text.
- $theme-process-list-counter-font-size - Font size of the counter text.
- $theme-process-list-counter-gap-color - Color of gap between counter and connector. This should the the same as the background color behind the component.
- $theme-process-list-counter-gap-width - Size of gap between counter and connector.
- $theme-process-list-counter-size - Size of the counter circle.
- $theme-process-list-counter-text-color - Color of the number text inside the counter circle.
- $theme-process-list-connector-color - Color of the connector line between counter circles.
- $theme-process-list-connector-width - Width of the connector line between counter circles.
- $theme-process-list-font-family - Font family of the content text.
- $theme-process-list-font-size - Font size of the content text.
- $theme-process-list-heading-color - Color of the heading text.
- $theme-process-list-heading-font-family - Font family of the heading text.
- $theme-process-list-heading-font-size - Font size of the heading text.

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
