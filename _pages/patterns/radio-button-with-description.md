---
layout: pattern
categories: [patterns, radio-button]
title: Radio button with description
type: [detail-page]
permalink: /patterns/radio-button/radio-button-with-description/
overview: This variation of the radio button allows the addition of descriptive text along with the label and button. 
description: |
  This variation of the radio button allows the addition of descriptive text along with the label and button. _Read more about [radio buttons](/patterns/radio-button/).
    
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
  - name: description
    class: usa-checkbox__label-description
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"

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