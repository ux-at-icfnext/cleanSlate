---
layout: pattern
categories: [patterns, validation]
title: Validation
type: [sub-nav-item]
permalink: /patterns/validation/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/validation/"
specification: |
#spec:
legend: Enter a code
validationTitle: Code requirements
validationFieldText: Code
buttonText: Submit code
checklist:
 - text: Use at least one uppercase character
   checked: 
   ### options:
        ### true
        ### false/leave blank
   validator: uppercase
 - text: Use at least one number
   checked: 
   validator: numerical

yml: |
  
   legend: Enter a code
   validationTitle: Code requirements
   validationFieldText: Code
   buttonText: Submit code
   checklist:
    - text: Use at least one uppercase character
      checked: 
    ### options:
        ### true
        ### false/leave blank
      validator: uppercase
    - text: Use at least one number
      checked: 
      validator: numerical
jekyll: |

  "{% include patterns/validation/validation.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/validation/validation.md
csspath: patterns/validation/index.scss
---