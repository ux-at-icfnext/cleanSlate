---
layout: pattern
categories: [patterns, select]
title: Select
type: [sub-nav-item]
variations: true
permalink: /patterns/select/
overview: A select component allows users to choose one option from a dropdown menu. 
description: |
    A select component allows users to choose one option from a dropdown menu.

    When to use the select box component:
        - More than 15 options. When there are more than 15 choices in a drop-down list it can be hard to navigate with scrolling only. 
        - Limited space. 
        - Use a combo box for presenting options over radio or checkboxes when screen real estate is limited.    
    
usa-link: "https://designsystem.digital.gov/components/select/"
specification: |
    - Onclick/OnTap of down arrow, system displays a list of options. 
    - OnSelect of item, the item shows in the box as the chosen option and the list is closed.
        - the selection replaces any option already in the box
#spec:
dropdown-title: Dropdown label
dropdown-default: '- Select -'
list:
 - value: Option A
 - value: Option B
 - value: Option C

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/select/select.md
csspath: patterns/select/index.scss
---