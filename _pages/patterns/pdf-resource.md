---
layout: right
title: PDF Resource
permalink: /patterns/pdf-resource
section: Patterns # initial cap required to make menu work
summary: |
  

htmlpath: patterns/pdf-resource/pdf-resource-html.md
csspath: patterns/pdf-resource/index.scss


episode_link: https://www.youtube.com/embed/ScMzIvxBSi4
episode_name: White Noise
ada_episode_link: https://www.youtube.com/embed/ScMzIvxBSi4
transcript_url: "//assets.ctfassets.net/tues7aklmpmt/2oRKyd27cdKum1UqKD7WWO/1919186a7766e7e69aeeeafb23381c40/a-pdf-placeholder.pdf"

jekyll: |
  {% include patterns/pdf-resource/pdf-resource.md content=page.pdf-resource.content settings=page.pdf-resource.settings %}

  Without settings - {% include patterns/pdf-resource/pdf-resource.md content=page.pdf-resource.content %}

---
{{ page.summary }}

## The Design
{% include patterns/pdf-resource/pdf-resource-html.md %}
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
