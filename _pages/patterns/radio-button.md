---
layout: pattern
categories: [patterns, radio-button]
title: Radio button
type: [sub-nav-item]
permalink: /patterns/radio-button/
variations: true
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/radio-button/"
specification: |
#spec:
topic: Historical figure
radio:
  - title: Sojourner Truth
  - title: Frederick Douglass
  - title: Booker T. Washington
    disabled: true
yml: |
  
  topic: Historical figure
  radio:
   - title: Sojourner Truth
   - title: Frederick Douglass
   - title: Booker T. Washington
   - title: George Washington Carver
     disabled: true
      ###true -- disable checkbox

jekyll: |

  "{% include patterns/radio-button/radio-button.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/radio-button/radio-button.md
csspath: patterns/radio-button/index.scss
---