---
layout: pattern
categories: [patterns, button-group]
title: Segmented button group
type: [detail-page]
permalink: /patterns/button-group/segmented-button-group/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/button-group/"
specification: |
buttons:
  - text: Back
    url: /
    style: inverse
    ## basic, outline, accent-col, accent-warm, base, inverse, secondary
    ### button outline style
  - text: Next
    url: /
    style: inverse
    ## basic, outline, accent-col, accent-warm, gray, inverse, secondary
inverse: true
### implement inverse style button group
segmented: true
### implement segmented button group

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/button-group/button-group-segmented-variation.md
htmlpath: patterns/button-group/button-group-segmented.md
csspath: patterns/button-group/index.scss
---