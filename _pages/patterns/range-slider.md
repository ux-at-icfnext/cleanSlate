---
layout: pattern
categories: [patterns, range-slider]
title: Range slider
type: [sub-nav-item]
permalink: /patterns/range-slider/
overview: A range slider allows users to choose an approximate number from a range. 
description: |
  A range slider allows users to choose an approximate number from a range.
    
usa-link: "https://designsystem.digital.gov/components/range-slider/"
specification: |
  Use the range slider component when the range is more important than precision or when a relative value is more important than an exact value. For instance, it could be more important for a target price selector to communicate where the target price falls within a certain range than the precise dollar amount selected.
  
  The slider control should change color to indicate it is active when a user selects it. Users should be able to drag the slider control or select somewhere along the slider itself to change the value. When appropriate, label the ends of the slider with the limits of the range (for example: “0/100”, “small/large” or “less expensive/more expensive”).

  Use [text-input](/text-input) if a user needs to enter a precise number. 
spec:
  - name: title
    class: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - name: body
    class: usa-classname
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"


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

  "{% include patterns/range-slider/range-slider-jk.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/range-slider/range-slider.md
csspath: patterns/range-slider/index.scss
---