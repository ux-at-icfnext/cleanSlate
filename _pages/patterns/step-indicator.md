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
- $step-indicator-background-color - Background color of the component and the gaps around the counters.
- $theme-step-indicator-counter-gap - Gap between the counter and the segment.
- $theme-step-indicator-counter-border-width - Size of the border around the pending steps.
- $theme-step-indicator-font-family - Font family of the labels and counter numbers.
- $theme-step-indicator-heading-font-family  - Font family of the heading.
- $theme-step-indicator-heading-color - Color of the heading.
- $theme-step-indicator-heading-font-size - Font size of the heading on screens of $theme-step-indicator-min-width and larger.
- $theme-step-indicator-heading-font-size-small - Font size of the heading on screens smaller than $theme-step-indicator-min-width.
- $theme-step-indicator-label-font-size - Font size of segment labels.
- $theme-step-indicator-min-width - Width at which the component displays large-width features.
- $theme-step-indicator-segment-color-pending - Color of pending step segments. Use a grade of 40 more than $step-indicator-background-color.
- $theme-step-indicator-segment-color-complete - Color of complete step segments. Use a grade of at least 60.
- $theme-step-indicator-segment-color-current - Color of the current step segments. Use a grade at least 20 less than $theme-step-indicator-segment-color-complete.
- $theme-step-indicator-segment-gap - Gap between step segments.
- $theme-step-indicator-segment-height - Height of the step segment. Note that the mobile segment height is always 1 unit.
- $theme-step-indicator-text-pending-color - The text color of pending steps. Use a gray grade of 60 more than the $step-indicator-background-color.

## Variations
- .usa-step-indicator--no-labels - Don’t show step labels.
- .usa-step-indicator--counters - Show step counters.
- .usa-step-indicator--counters-sm - Show small step counters
- .usa-step-indicator--center - Center counters and labels in each step.

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
