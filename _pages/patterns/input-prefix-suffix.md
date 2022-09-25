---
layout: pattern
categories: [patterns, input-prefix-suffix]
title: Input prefix or suffix
type: [sub-nav-item]
permalink: /patterns/input-prefix-suffix/
overview: Use input prefixes and suffixes to show symbols or abbreviations that help users enter the right type of information in a form’s text input.
description: |
  Use input prefixes and suffixes to show symbols or abbreviations that help users enter the right type of information in a form’s text input.
    
usa-link: "https://designsystem.digital.gov/components/input-prefix-suffix"
specification: |
  - SVG icons can be used in either the prefix or suffix space. Make sure to fit the icon to the space when choosing from the Font Awesome repository.
  - Icon fonts. Font Awesome can also be used in icon format... please see the variations below.
  - Text can also be used in the prefix or suffix space.

spec:
  - name: input prefix suffix
    class: usa-input-group
    type: icon or text
    required: true
    content: indicates the expected input for user input, which may include a simple label for the field, format requirements or additional details to prevent an error message
inputLabel: Credit card number
inputLabelType: prefix
### options:
    ### prefix
    ### suffix
inputLabelIcon: credit_card
### select icon from USWDS icon list --  https://designsystem.digital.gov/components/icon/
inputLabelText: 

yml: |
  
  inputLabel: Credit card number
  inputLabelType: prefix
  ### options
    ### prefix
    ### suffix
  inputLabelIcon: credit_card
  ### select icon from USWDS icon list --  https://designsystem.digital.gov/components/icon/
  inputLabelText:

jekyll: |

  "{% include patterns/input-prefix-suffix/input-prefix-suffix.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/input-prefix-suffix/input-prefix.md
htmlpath: patterns/input-prefix-suffix/input-prefix-suffix.md
csspath: patterns/input-prefix-suffix/index.scss
---