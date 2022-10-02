---
layout: pattern
categories: [patterns, search]
title: Search
type: [sub-nav-item]
permalink: /patterns/search/
variations: true
overview: Search allows users to search for specific content.
description: |
  Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation.
    
usa-link: "https://designsystem.digital.gov/components/search/"
specification: |
search: Search
### search button text
search-type: 
### search bar type options: big, small
yml: |
  
  search: Search
  ### search button text
  search-type: 
    ### search bar type options: 
        ### big
        ### small
jekyll: |

  "{% include patterns/search/search-jk.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/search/search.md
csspath: patterns/search/index.scss
---