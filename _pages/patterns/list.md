---
layout: pattern
categories: [patterns, list]
title: List
type: [sub-nav-item]
permalink: /patterns/list/
overview: Unordered list help users to browse through content.
variations: true
description: |
    Unordered list help users to browse through content.
    
usa-link: "https://designsystem.digital.gov/components/list/"
specification: |
    List should be constained to no more than 80ex in width for usable reading. It is also reccommended to give 20px margin on all sides.
list-type: unordered
### options: ordered, unordered
class: 
### option: include class: usa-list--unstyled to remove component style
list:
 - item: Unordered list item
 - item: Unordered list item
 - item: Unordered list item
 - item: Unordered list item
### list content 
yml: |
  
    list-type: unordered
    ### options: 
        ### ordered
        ### unordered
    class: 
    ### option:
        ### usa-list--unstyled: remove component style
    list:
     - item: Unordered list item
     - item: Unordered list item
     - item: Unordered list item
     - item: Unordered list item
    ### list content 

jekyll: |

  "{% include patterns/list/list.md %}"

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/list/list.md
csspath: patterns/list/index.scss
---