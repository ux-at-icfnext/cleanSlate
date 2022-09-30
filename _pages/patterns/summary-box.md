---
layout: pattern
categories: [patterns, summary-box]
title: Summary box
type: [sub-nav-item]
permalink: /patterns/summary-box/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/summary-box/"
specification: |
#spec:
summary-title: Key information
summary-list:
 - item: If you are under a winter storm warning, <a href="/" class="usa-summary-box__link">find shelter</a> right away. 
 - item: Sign up for <a href="/" class="usa-summary-box__link">your community’s warning system</a>.
 - item: Learn the signs of, and basic treatments for, <a href="/"  class="usa-summary-box__link">frostbite</a> and <a href="/" class="usa-summary-box__link">hypothermia</a>.
 - item: Gather emergency supplies for your <a href="/" class="usa-summary-box__link">home</a> and your <a href="/" class="usa-summary-box__link">car</a>.
yml: |
  
  summary-title: Key information
  summary-list:
    - item: If you are under a winter storm warning, <a href="/" class="usa-summary-box__link">find shelter</a> right away. 
    - item: Sign up for <a href="/" class="usa-summary-box__link">your community’s warning system</a>.
    - item: Learn the signs of, and basic treatments for, <a href="/"  class="usa-summary-box__link">frostbite</a> and <a href="/" class="usa-summary-box__link">hypothermia</a>.
    - item: Gather emergency supplies for your <a href="/" class="usa-summary-box__link">home</a> and your <a href="/" class="usa-summary-box__link">car</a>.

jekyll: |

  "{% include patterns/summary-box/summary-box-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/summary-box/summary-box.md
csspath: patterns/summary-box/index.scss
---