---
layout: right
title: Video
permalink: /patterns/video
section: Patterns # initial cap required to make menu work
summary: |
  

htmlpath: patterns/video/video-html.md
csspath: patterns/video/index.scss


episode_link: https://www.youtube.com/embed/ScMzIvxBSi4
episode_name: White Noise
ada_episode_link: https://www.youtube.com/embed/ScMzIvxBSi4
transcript_url: "//assets.ctfassets.net/tues7aklmpmt/2oRKyd27cdKum1UqKD7WWO/1919186a7766e7e69aeeeafb23381c40/a-pdf-placeholder.pdf"

jekyll: |
  {% include patterns/video/video.md content=page.video.content settings=page.video.settings %}

  Without settings - {% include patterns/video/video.md content=page.video.content %}

---
{{ page.summary }}

## The Design
{% include patterns/video/video.md %}
---

## Theme Settings
- $theme-modal-border-radius - The border radius of the modal window.
- $theme-modal-default-max-width - Maximum width of default modal window.
- $theme-modal-lg-max-width - Maximum width of large modal window.
- $theme-modal-lg-content-max-width - Maximum width of content area within large modal window.

## Variations
- .usa-modal--lg - Add .usa-modal--lg to .usa-modal for a larger window and larger heading size on wider screens.

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
