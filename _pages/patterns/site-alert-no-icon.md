---
layout: pattern
categories: [patterns, site-alert]
title: Site alert with no icon
type: [detail-page]
permalink: /patterns/site-alert/site-alert-no-icon/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/site-alert/"
specification: |
#spec:
siteAlertType: no-icon
### options: slim, no-header, no-icon, list
siteAlertColor: info
### options: emergency, info
siteAlertTitle: Short alert message. 
siteAlertContent: Additional context and followup information including  <a class="usa-link" href="/">a link</a>
yml: |
  
  siteAlertType: no-icon
  ### options: 
    ### slim
    ### no-header
    ### no-icon
    ### list
  siteAlertColor: info
  ### options: 
    ### emergency
    ### info
  siteAlertTitle: Short alert message. 
  siteAlertContent: Additional context and followup information including  <a class="usa-link" href="/">a link</a>

jekyll: |

  "{% include patterns/site-alert/site-alert-no-icon.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/site-alert/site-alert-no-icon-info.md
htmlpath: patterns/site-alert/site-alert.md
csspath: patterns/site-alert/index.scss
---