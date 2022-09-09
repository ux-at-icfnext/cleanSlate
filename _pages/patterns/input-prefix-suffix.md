---
layout: pattern
categories: [patterns, input-prefix-suffix]
title: Input prefix or suffix
type: [sub-nav-item]
permalink: /patterns/input-prefix-suffix/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/input-prefix-suffix"
specification: |

#spec:
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