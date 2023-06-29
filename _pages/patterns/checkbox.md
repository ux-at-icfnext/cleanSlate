---
layout: right
title: Checkbox
permalink: /patterns/checkbox
section: Patterns # initial cap required to make menu work
summary: |
  Checkboxes allow users to select one or more options from a list. Please review the <a href="https://designsystem.digital.gov/components/checkbox/">USWDS: Checkbox</a> for more information on how to use this component.

htmlpath: patterns/checkbox/checkbox-html.md
csspath: patterns/checkbox/index.scss

topic: Topic
label: Label
checkbox:
  content:
    - title: Apple
      description: Fruit
    - title: Carrot
      description: Vegetable
    - title: Water
      disabled: disabled

jekyll: |
  {% include patterns/checkbox/checkbox.md content=page.checkbox.content settings=page.checkbox.settings %}

  Without settings - {% include patterns/checkbox/checkbox.md content=page.checkbox.content %}

---
{{ page.summary }}

## The Design
{% include patterns/checkbox/checkbox-html.md %}
---

## Theme Settings
- $theme-checkbox-border-radius - Checkbox border radius for rounded corners.
- $theme-input-background-color - Background color for radio and checkbox inputs.
- $theme-input-tile-border-radius - Tile border radius for rounded corners.
- $theme-input-tile-border-width - Tile border thickness

## Variations
N/A