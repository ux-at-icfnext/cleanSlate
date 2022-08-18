---
layout: pattern
categories: [patterns, range-slider]
title: Range slider
type: [sub-nav-item]
permalink: /patterns/range-slider/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/range-slider/"
specification: |
#spec:
label: Range slider
min: 0
max: 100
step: 10
value: 40
yml: |
  
  label: Range slider
  min: 0
  max: 100
  step: 10
  value: 40

jekyll: |

  "{% include patterns/range-slider/range-slider.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/range-slider/range-slider.md
csspath: patterns/range-slider/index.scss
---