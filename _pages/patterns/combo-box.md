---
layout: pattern
categories: [patterns, select]
title: Combo box
type: [detail-page]
permalink: /patterns/combo-box/
overview: This variation of the select box gives people the option to remove the object selected.
description: |
    This variation of the [select](/patterns/select/) box gives people the option to remove the object selected -- as an alternative to choose the default.

    When to use the combo box component:
        - It could be used in instances where clearing the information from the box is important to the experience.
        - More than 15 options. When there are more than 15 choices in a drop-down list it can be hard to navigate with scrolling only. 
        - Limited space. 
        - Use a combo box for presenting options over radio or checkboxes when screen real estate is limited.
    
usa-link: "https://designsystem.digital.gov/components/combo-box/"
specification: |
    - Onclick/OnTap of down arrow, system displays a list of options. 
    - OnSelect of item, the item shows in the box as the chosen option, a "x" button appears in the box, and the list is closed.
        - the selection replaces any option already in the box
    - OnClick/OnTap of "x" button, the box is cleared.
spec: 
  - name: dropdown
    class: usa-select
    type: multi-select
    required: true
    content: alphanumeric order
    example: Option A, Option B, Option C, etc.

label: Select a season
category: Season
list:
    - value: Winter
    - value: Spring
    - value: Summer
    - value: Fall
    - value: Winter
    - value: Spring
    - value: Summer
    - value: Fall
    - value: Winter
    - value: Spring
    - value: Summer
    - value: Fall
    - value: Winter
    - value: Spring
    - value: Summer
    - value: Fall

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/combo-box/combo-box.md
csspath: patterns/combo-box/index.scss
---