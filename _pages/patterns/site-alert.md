---
layout: pattern
categories: [patterns, site-alert]
title: Site alert
type: [sub-nav-item]
permalink: /patterns/site-alert/
variations: true
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/site-alert/"
specification: |
#spec:
site-alert-type: 
### options: slim, no-header, no-icon, list
site-alert-color: info
### options: emergency, info
site-alert-title: Short alert message
site-alert-content: Additional context and followup information including <a class="usa-link" href="/">a link</a>
yml: |
  
  site-alert-type: 
  ### options: 
    ### slim
    ### no-header
    ### no-icon
    ### list
  site-alert-color: info
  ### options: 
    ### emergency
    ### info
  site-alert-title: Short alert message
  site-alert-content: Additional context and followup information including <a class="usa-link" href="/">a link</a>

jekyll: |

  "{% include patterns/site-alert/site-alert.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/site-alert/site-alert-info.md
htmlpath: patterns/site-alert/site-alert.md
csspath: patterns/site-alert/index.scss
---