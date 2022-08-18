---
layout: pattern
categories: [patterns, list]
title: Ordered list
type: [detail-page]
permalink: /patterns/link/ordered-list/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/list/"
specification: |
list-type: ordered
### options: ordered, unordered
class: 
### option: include class: usa-list--unstyled to remove component style
list:
- item: Ordered list item
- item: Ordered list item
- item: Ordered list item
- item: Ordered list item
- item: Ordered list item
### list content 
yml: |
  
    list-type: ordered
    ### options: 
        ### ordered
        ### unordered
    class: 
    ### option:
        ### usa-list--unstyled: remove component style
    list:
     - item: Ordered list item
     - item: Ordered list item
     - item: Ordered list item
     - item: Ordered list item
    ### list content 

jekyll: |

  "{% include patterns/list/list-ordered.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/list/list-ordered.md
csspath: patterns/list/index.scss
---