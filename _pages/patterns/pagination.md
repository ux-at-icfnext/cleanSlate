---
layout: right
title: Pagination
permalink: /patterns/pagination
section: Patterns # initial cap required to make menu work
summary: |
  Pagination is navigation for paginated content. Please review the <a href="https://designsystem.digital.gov/components/pagination/">USWDS: Pagination</a> for more information on how to use this component.

htmlpath: patterns/pagination/pagination-html.md
csspath: patterns/pagination/index.scss
---
{{ page.summary }}

## The Design
{% include patterns/pagination/pagination-html.md %}
---

## Theme Settings
- $theme-pagination-background-color - The background color of the entire pagination component.
- $theme-pagination-breakpoint - Breakpoint at which full pagination displays.
- $theme-pagination-button-border-radius - Default pagination button border radius.
- $theme-pagination-button-border-width - Width of button border.
- $theme-pagination-font-family - Default font family for pagination.

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