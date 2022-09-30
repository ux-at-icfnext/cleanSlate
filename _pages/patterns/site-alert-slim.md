---
layout: pattern
categories: [patterns, site-alert]
title: Slim site alert
type: [detail-page]
permalink: /patterns/site-alert/slim-site-alert/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/site-alert/"
specification: |
#spec:
site-alert-type: slim
### options: slim, no-header, no-icon, list
site-alert-color: info
### options: emergency, info
site-alert-title: Short alert message. 
site-alert-content: Additional context and followup information including <a class="usa-link" href="/">a link</a>
yml: |
  
  site-alert-type: slim
  ### options: 
    ### slim
    ### no-header
    ### no-icon
    ### list
  site-alert-color: info
  ### options: 
    ### emergency
    ### info
  site-alert-title: Short alert message. 
  site-alert-content: Additional context and followup information including <a class="usa-link" href="/">a link</a>
  

jekyll: |

  "{% include patterns/site-alert/site-alert-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/site-alert/site-alert-slim-info.md
htmlpath: patterns/site-alert/site-alert-slim.md
csspath: patterns/site-alert/index.scss
---