---
layout: pattern
categories: [patterns, button-group]
title: Button group
type: [sub-nav-item]
permalink: /patterns/button-group/
overview: A button group collects similar or related actions.
variations: true
description: |
  A button group collects similar or related actions.
  The default button group arranges each button as a separate element with a gap between them. On mobile devices, the buttons are arranged vertically. 
    
usa-link: "https://designsystem.digital.gov/components/button-group/"
specification: |
  Button group contains multiple buttons.  In most cases only one should be primary. 
  For more information about how individual buttons function - please see [buttons](/styles/buttons/)
buttons:
  - text: Back
    url: /
    style: secondary
    ## basic, outline, accent-col, accent-warm, base, inverse, secondary
    ### button outline style
  - text: Next
    url: /
    style: accent-warm
    ## basic, outline, accent-col, accent-warm, gray, inverse, secondary
inverse: 
### true -- implement inverse style button group; blank -- default button group style
segmented: 
### true -- implement segmented button group; blank -- implement default button group

spec: 
  - name: button-label
    class: usa-button
    required: true
    type: text
    content: 80 characters
    example: "Continue"
  - name: link
    required: true
    class: 
    type: button action
yml: |
  
    buttons:
    - text: Back
      url: /
      style: secondary
      ## style options: 
        ### basic
        ### outline
        ### accent-col
        ### accent-warm
        ### base
        ### inverse
        ### secondary
    - text: Next
      url: /
      style: accent-warm
    inverse:
    ### options: 
      ### true -- implement inverse style button group
    segmented: false
    ### options: 
      ### true -- implement segmented button group

jekyll: |

  "{% include patterns/button-group/button-group.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/button-group/button-group.md
csspath: patterns/button-group/index.scss
---