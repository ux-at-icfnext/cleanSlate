---
layout: pattern
categories: [patterns, radio-button]
title: Radio button
type: [sub-nav-item]
permalink: /patterns/radio-button/
variations: true
overview: The radio button component is an input type that allows the user to choose/ select one of many choices.
description: |
  The radio button component is an input type that allows the user to choose/ select one of many choices.
    
usa-link: "https://designsystem.digital.gov/components/radio-button/"
specification: |
  Since only one radio button can be selected at a time (within the same group), each available choice must be its own item and label. Once a user selects one of the radio buttons in a group, the group can’t be easily reset to displaying no radio buttons selected. One possible solution would be to add a “none of the above” option to a radio button group, which would allow users to effectively unselect the other radio buttons in that group.
spec:
  - name: title
    class: usa-radio
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - name: body
    class: usa-radio__label
    type: text
    required: true
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack."
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

  "{% include patterns/radio-button/radio-button-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/radio-button/radio-button.md
csspath: patterns/radio-button/index.scss
---