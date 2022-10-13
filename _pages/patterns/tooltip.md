---
layout: pattern
categories: [patterns, tooltip]
title: Tooltip
type: [sub-nav-item]
permalink: /patterns/tooltip/
overview: A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.
description: A tooltip is a short descriptive message that appears when a user hovers, focuses, or taps on an element.
    
usa-link: "https://designsystem.digital.gov/components/tooltip/"
specification: |
  Tooltips are generally used to strengthen an existing message or increase certainty about an interaction. Tooltips are useful as a last resort for space-constrained UI. Explore other options for keeping content visible without a tooltip.

  - Tooltips perform best with succinct helper text.

  - Use tooltips only on elements that appear interactive, like buttons or links.
  
  - If using tooltips in one context, use in all similar contexts.

  _When developing, be sure that tooltips can be accessed by keyboard, by tap on touch screens, and by screen readers_
  
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
position: top
    ### options:
        ### top
        ### bottom
        ### left
        ### right
text: Top
buttonText: Show on top
utilityClass: tablet:grid-col-3 margin-top-2 text-center
### style tooltip with utility classes
dataClasses: width-full tablet:width-auto
### style tooltip with utility classes
yml: |
  
    position: top
    ### options:
        ### top
        ### bottom
        ### left
        ### right
    text: Top
    buttonText: Show on top
    utilityClass: tablet:grid-col-3 margin-top-2 text-center
    ### style tooltip with utility classes
    ### leave blank for default tooltip style
    dataClasses: width-full tablet:width-auto
    ### style tooltip with utility classes
    ### leave blank for default tooltip style
jekyll: |

  "{% include patterns/tooltip/tooltip-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlexcerpt: patterns/tooltip/tooltip-default.md
htmlpath: patterns/tooltip/tooltip.md
csspath: patterns/tooltip/index.scss
---