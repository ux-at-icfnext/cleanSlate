---
layout: pattern
categories: [patterns, radio-button]
title: Radio button with description
type: [detail-page]
permalink: /patterns/radio-button/radio-button-with-description/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/radio-button/"
specification: |
#spec:
topic: Historical figure
radio:
  - title: Sojourner Truth
    description: This is optional text that can be used to describe the label in more detail
  - title: Frederick Douglass
    description: This is optional text that can be used to describe the label in more detail
  - title: Booker T. Washington
    description: This is optional text that can be used to describe the label in more detail
    disabled: true
yml: |
  
  topic: Historical figure
  radio:
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

  "{% include patterns/radio-button/radio-button-with-description.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/radio-button/radio-button-with-description.md
csspath: patterns/radio-button/index.scss
---