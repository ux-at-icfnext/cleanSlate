---
layout: right
title: Radio Button
permalink: /patterns/radio-button
section: Patterns # initial cap required to make menu work
summary: |
  Radio buttons allow users to select exactly one choice from a group. Please review the <a href="https://designsystem.digital.gov/components/radio-buttons/">USWDS: Radio Button</a> for more information on how to use this component.

htmlpath: patterns/radio-buttons/radio-buttons-html.md
csspath: patterns/radio-buttons/index.scss

legend: Legend Label
radio-buttons:
  content:
    - name: jekyll
      id: jekyll-one
      value: One
    - name: jekyll
      id: jekyll-two
      value: Two
    - name: jekyll
      id: jekyll-three
      value: Three
    - name: jekyll
      id: jekyll-four
      value: Four

jekyll: |
  {% include patterns/radio-buttons/radio-buttons.md content=page.radio-buttons.content settings=page.radio-buttons.settings %}

  Without settings - {% include patterns/radio-buttons/radio-buttons.md content=page.radio-buttons.content %}

---
{{ page.summary }}

## The Design
{% include patterns/radio-buttons/radio-buttons-html.md %}
---

## Theme Settings
- $theme-input-background-color - Background color for radio and checkbox inputs.
- $theme-input-tile-border-radius - Tile border radius for rounded corners.
- $theme-input-tile-border-width - Tile border thickness.

## Variations
- .usa-radio__input--tile - Input tiles provide a larger interaction area and neatly group the label with the form control for readability. They’re useful in application forms and questionnaires, but may not be recommended when they create clutter on the page.

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
