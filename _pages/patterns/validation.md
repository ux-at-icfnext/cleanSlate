---
layout: pattern
categories: [patterns, validation]
title: Validation
type: [sub-nav-item]
permalink: /patterns/validation/
overview: Stating validation requirements up front, with live feedback, means users won’t be left guessing.
description: Stating validation requirements up front, with live feedback, means users won’t be left guessing.
    
usa-link: "https://designsystem.digital.gov/components/validation/"
specification: |
  The validation component is intended primarily for usability, not as a robust security solution, since all the validation logic occurs on the client-side. The validation should be “mirrored” on the server-side for security purposes.
spec: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-classname
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
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

  "{% include patterns/validation/validation-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/validation/validation.md
csspath: patterns/validation/index.scss
---