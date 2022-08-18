---
layout: pattern
categories: [patterns, site-alert]
title: Site alert with list
type: [detail-page]
permalink: /patterns/site-alert/site-alert-list/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/site-alert/"
specification: |
#spec:
alert-type: list
### options: slim, no-header, no-icon, list
alert-color: emergency
### options: emergency, info
alert-title: Alert message with list
alert-list:
  - text: Alert message, and 
    linkText: a link.
    link: /
  - text: Alert message, and 
    linkText: another link.
    link: / 
yml: |
  
  alert-type: list
  ### options: 
    ### slim
    ### no-header
    ### no-icon
    ### list
  alert-color: emergency
  ### options: 
    ### emergency
    ### info
  alert-title: Alert message with list
  alert-list:
  - text: Alert message, and
    linkText: a link. 
    link: /
  - text: Alert message, and 
    linkText: another link.
    link: /
    

jekyll: |

  "{% include patterns/site-alert/site-alert-no-header.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/site-alert/site-alert-list-info.md
htmlpath: patterns/site-alert/site-alert-list.md
csspath: patterns/site-alert/index.scss
---