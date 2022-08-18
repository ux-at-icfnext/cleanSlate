---
layout: pattern
categories: [patterns, tag]
title: Big tag
type: [detail-page]
permalink: /patterns/tag/big-tag/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/tag/"
specification: |
#spec:
tags:
 - text: BIG
### tag text
   type: big
### options: big
### options: if blank, default size tag is applied
yml: |
  
  tags:
  - text: BIG
    type: big
      ### type options: 
        ### big

jekyll: |

  "{% include patterns/tag/tag-big.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/tag/tag-big.md
csspath: patterns/tag/index.scss
---