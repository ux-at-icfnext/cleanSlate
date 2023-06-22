---
layout: right
title: Step Indicator
permalink: /patterns/step-indicator
section: Patterns # initial cap required to make menu work
summary: |
  A step indicator updates users on their progress through a multi-step process. Please review the <a href="https://designsystem.digital.gov/components/step-indicator/">USWDS: Step Indicator</a> for more information on how to use this component.

htmlpath: patterns/step-indicator/step-indicator-html.md
csspath: patterns/step-indicator/index.scss

stepIndicatorCounter: default
stepIndicators:
  - label: Step 1
    status: completed
  - label: Step 2
    status: completed
  - label: Step 3
    status: current
  - label: Step 4
  - label: Step 5

jekyll: |
  {% include patterns/step-indicator/step-indicator.md content=page.stepIndicators settings=page.stepIndicators.settings %}

  Without settings - {% include patterns/step-indicator/step-indicator.md content=page.stepIndicators %}
---
{{ page.summary }}

## The Design
{% include patterns/step-indicator/step-indicator.md content=page.stepIndicators %}
---

## Theme Settings
- $theme-summary-box-background-color - Background color of the Summary box.
- $theme-summary-box-border-color - Color the border around the Summary box.
- $theme-summary-box-border-width - Width of the border around the Summary box.
- $theme-summary-box-border-radius - Border radius of the summary box.
- $theme-summary-box-font-family  - Font family of the content text.
- $theme-summary-box-link-color - Color of the links inside the content text. When set to “default”, links will get one of three values, based on contrast: $theme-link-color, $theme-link-reverse-color, or “ink”.
- $theme-summary-box-text-color - Color of the content text. When set to “default”, text will get one of two values, based on contrast: $theme-text-reverse-color or $theme-text-color.

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
