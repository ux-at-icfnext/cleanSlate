---
layout: pattern
categories: [patterns, checkbox]
title: Checkbox with description
type: [detail-page]
permalink: /patterns/checkbox/checkbox-with-description/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/checkbox/"
specification: |
topic: Fruit
checkbox:
  - title: Apple
    description: Select apples
  - title: Blueberries
    description: Select blueberries
  - title: Strawberries
    description: Select strawberries
    disabled: true
yml: |
  
  topic: Select any historical figure
  checkbox:
  - title: Sojourner Truth
    description: This is optional text that can be used to describe the label in more detail
  - title: Frederick Douglass
    description: This is optional text that can be used to describe the label in more detail
  - title: Booker T. Washington
    description: This is optional text that can be used to describe the label in more detail
  - title: George Washington Carver
    description: This is optional text that can be used to describe the label in more detail
    disabled: true
    ###true -- disable checkbox

jekyll: |

  "{% include patterns/checkbox/checkbox-with-description.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/checkbox/checkbox-with-description.md
csspath: patterns/checkbox/index.scss
---