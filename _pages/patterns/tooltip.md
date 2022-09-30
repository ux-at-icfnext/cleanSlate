---
layout: pattern
categories: [patterns, tooltip]
title: Tooltip
type: [sub-nav-item]
permalink: /patterns/tooltip/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/tooltip/"
specification: |
#spec:
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