---
layout: right
title: Modal
permalink: /patterns/modal
section: Patterns # initial cap required to make menu work
summary: |
  A modal disables page content and focuses the user’s attention on a single task or message. Please review the <a href="https://designsystem.digital.gov/components/modal/">USWDS: Modal</a> for more information on how to use this component.

htmlpath: patterns/modal/modal-html.md
csspath: patterns/modal/index.scss

modal-button: Modal Button
modal-heading: Modal Heading
modal-desc: Modal Description
modal-primary-button: Primary Button
modal-secondary-button: Secondary Button

jekyll: |
  {% include patterns/modal/modal.md content=page.modal.content settings=page.modal.settings %}

  Without settings - {% include patterns/modal/modal.md content=page.modal.content %}

---
{{ page.summary }}

## The Design
{% include patterns/modal/modal-html.md %}
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
