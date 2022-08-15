---
layout: pattern
categories: [patterns, collection]
title: Collection
type: [sub-nav-item]
permalink: /patterns/collection/
variations: true
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
usa-link: "https://designsystem.digital.gov/components/collection/"
specification: 
spec:
heading: Default Collection
collection:
  - title: Event 1
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    link: /
    date: October 30, 2022
     ### date format: Month, DD, YYYY - ex. September 20, 2022
    new-tag: true
    tags: [PMA, OMB] 
  - title: Event 2
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    link: /
    date: September 30, 2022
     ### date format: Month, DD, YYYY - ex. September 20, 2022
    new-tag: true
    tags: [PMA, OMB] 
yml: |
  
  heading: Default Collection
  collection:
   - title: Event 1
     description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
     link: /
     date: October 30, 2022
     ### date format: Month, DD, YYYY - ex. September 20, 2022
     new-tag: true
     tags: [PMA, OMB] 

jekyll: |

  "{% include patterns/collection/collection.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/collection/collection.md
csspath: patterns/collection/index.scss
---