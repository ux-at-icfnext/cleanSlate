---
layout: pattern
categories: [patterns, pagination]
title: Unbounded pagination 
type: [detail-page]
permalink: /patterns/pagination/unbounded-pagination/
overview: In this variation, the last page is not shown.
description: |
  In this variation, the last page is not shown. _Read mores about the [pagination](/patterns/pagination/) pattern for how the component works.
    
usa-link: "https://designsystem.digital.gov/components/pagination/"
#specification: |
pagination-current: 10
pagination-pages: 24
bounded: 
### options:
  ### true
  ### false/leave blank

yml: |
  
  pagination-current: 10
  pagination-pages: 24
  bounded: 
  ### options:
    ### true
    ### false/leave blank
jekyll: |

  "{% include patterns/pagination/pagination-jk.md %}"

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/pagination/pagination-unbounded.md
csspath: patterns/pagination/index.scss
---