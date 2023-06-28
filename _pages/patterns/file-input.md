---
layout: right
title: File Input
permalink: /patterns/ifile-input
section: Patterns # initial cap required to make menu work
summary: |
  File input allows users to attach one or multiple filesPlease review the <a href="https://designsystem.digital.gov/components/file-input/">USWDS: File Input</a> for more information on how to use this component.

htmlpath: patterns/file-input/file-input-html.md
csspath: patterns/file-input/index.scss

label: Label

jekyll: |
  {% include patterns/file-input/file-input.md content=page.file-input.content settings=page.file-input.settings %}

  Without settings - {% include patterns/file-input/file-input.md content=page.file-input.content %}

---
{{ page.summary }}

## The Design
{% include patterns/file-input/file-input-html.md %}
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
