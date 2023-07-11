---
layout: right
title: PDF Resource
permalink: /patterns/pdf-resource
section: Patterns # initial cap required to make menu work
summary: |
  

htmlpath: patterns/pdf-resource/pdf-resource-html.md
csspath: patterns/pdf-resource/index.scss


series_title: Prioritizing Youth Voice
author: Child Welfare Information Gateway
year_published: 2021
thumbnail_url: "https://placehold.co/200x400"
thumbnail_description: "600x400 placeholder image"
download_language: True
pdf-resource:
  content:
    - btn: Download
      text: Download

jekyll: |
  {% include patterns/pdf-resource/pdf-resource.md content=page.pdf-resource.content settings=page.pdf-resource.settings %}

  Without settings - {% include patterns/pdf-resource/pdf-resource.md content=page.pdf-resource.content %}

---
{{ page.summary }}

## The Design
{% include patterns/pdf-resource/pdf-resource.md content=page.pdf-resource.content %}
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
