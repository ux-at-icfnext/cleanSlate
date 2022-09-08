---
layout: pattern
categories: [patterns, breadcrumb]
title: Breadcrumb
type: [sub-nav-item]
permalink: /patterns/breadcrumb/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
    
usa-link: "https://designsystem.digital.gov/components/breadcrumb/"
specification: |
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
breadcrumbWrapping: true
### options:
    ### true
    ### false/leave blank
breadcrumbs:
  - text: Home
    link: /
  - text: Federal Contracting
    link: /
  - text: Contracting assistance programs
    link: /
  - text: Women-owned small business federal contracting program
    link: /
    current: true
    ### current page
#spec:
yml: |
  
  breadcrumbWrapping: true
  ### options:
    ### true
    ### false/leave blank
  breadcrumbs:
    - text: Home
      link: /
    - text: Federal Contracting
      link: /
    - text: Contracting assistance programs
      link: /
    - text: Women-owned small business federal contracting program
      link: /
      current: true
      ### current page

jekyll: |

  "{% include patterns/breadcrumb/breadcrumb.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/breadcrumb/breadcrumb.md
csspath: patterns/breadcrumb/index.scss
---