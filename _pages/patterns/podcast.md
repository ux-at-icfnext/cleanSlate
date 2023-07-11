---
layout: right
title: Podcast
permalink: /patterns/podcast
section: Patterns # initial cap required to make menu work
summary: |
  

htmlpath: patterns/podcast/podcast-html.md
csspath: patterns/podcast/index.scss


episode_link: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/172595677&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true
episode_name: White Noise
transcript_url: //assets.ctfassets.net/tues7aklmpmt/2oRKyd27cdKum1UqKD7WWO/1919186a7766e7e69aeeeafb23381c40/a-pdf-placeholder.pdf

jekyll: |
  {% include patterns/podcast/podcast.md content=page.podcast.content settings=page.podcast.settings %}

  Without settings - {% include patterns/podcast/podcast.md content=page.podcast.content %}

---
{{ page.summary }}

## The Design
{% include patterns/podcast/podcast.md content=page.podcast.content %}
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
