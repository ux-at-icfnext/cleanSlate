---
layout: pattern
categories: [patterns, checkbox]
title: Checkbox
type: [sub-nav-item]
variations: true
permalink: /patterns/checkbox/
overview: Checkboxes allow users to select one or more options from a list.
description: |
  Checkboxes allow users to select one or more options from a list. Checkboxes are an easily understandable way to indicate that users can select one or more answers to a question or items from a list. They’re always followed by a label or instructions that clearly indicate what checking the box represents.”
    
usa-link: "https://designsystem.digital.gov/components/checkbox/"
specification: |
  The default state should have nothing selected. OnClick/OnTap, checkbox goes between selected and unselected state.

topic: Fruit
checkbox:
  - title: Apple
  - title: Blueberries
  - title: Strawberries
    disabled: true
yml: |
  
  topic: Select any historical figure
  checkbox:
   - title: Sojourner Truth
   - title: Frederick Douglass
   - title: Booker T. Washington
   - title: George Washington Carver
     disabled: true
      ###true -- disable checkbox

jekyll: |

  "{% include patterns/checkbox/checkbox.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/checkbox/checkbox.md
csspath: patterns/checkbox/index.scss
---