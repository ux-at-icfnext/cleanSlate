---
layout: pattern
categories: [patterns, pagination]
title: Pagination
type: [sub-nav-item]
permalink: /patterns/pagination/
variations: true
overview: Paginated content is any content split into multiple pages determined only by a specific amount of content per page
description: |
  Paginated content is any content split into multiple pages determined only by a specific amount of content per page, not split by any meaningful attribute, like feature or subject or step. Search results and article collections are often paginated. Readers use the pagination component to move from page to page in paginated content, or directly to the first or last page of the paginated set.
    
usa-link: "https://designsystem.digital.gov/components/pagination/"
specification: |
  - The objects in the pagination componet are refered to as "slots" by the USWDS. 
  - On the first page, the "Previous" link is hidden
  - On the last page, or if the paging "slots" is less than 4, the Next link is hidden
  - OnClick/OnTap button system displays target page
pagination-current: 10
pagination-pages: 24
bounded: true
### options:
  ### true
  ### false/leave blank

yml: |
  
  pagination-current: 10
  pagination-pages: 24
  bounded: true
  ### options:
    ### true
    ### false/leave blank

jekyll: |

  "{% include patterns/pagination/pagination-jk.md %}"

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/pagination/pagination.md
csspath: patterns/pagination/index.scss
---