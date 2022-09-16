---
layout: pattern
categories: [patterns, pagination]
title: Unbounded pagination 
type: [detail-page]
permalink: /patterns/pagination/unbounded-pagination/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/pagination/"
specification: |
pagination-current: 3
pagination-pages: 5
bounded: 
### options:
  ### true
  ### false/leave blank

yml: |
  
  pagination-current: 3
  pagination-pages: 5
  bounded: 
  ### options:
    ### true
    ### false/leave blank
jekyll: |

  "{% include patterns/pagination/pagination-unbounded.md %}"

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/pagination/pagination-unbounded.md
csspath: patterns/pagination/index.scss
---