---
layout: pattern
categories: [patterns, list]
title: Ordered list
type: [detail-page]
permalink: /patterns/link/ordered-list/
overview: Use an ordered list when you need to display text in some ranking, hierarchy, or series of steps.
description: |
    Use an ordered list when you need to display text in some ranking, hierarchy, or series of steps.
    
usa-link: "https://designsystem.digital.gov/components/list/"
specification: |
    List should be constained to no more than 80ex in width for usable reading. It is also reccommended to give 20px margin on all sides.
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