---
layout: pattern
categories: [patterns, checkbox]
title: Checkbox
type: [sub-nav-item]
variations: true
permalink: /patterns/checkbox/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/checkbox/"
specification: |

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