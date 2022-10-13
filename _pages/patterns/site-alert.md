---
layout: pattern
categories: [patterns, site-alert]
title: Site alert
type: [sub-nav-item]
permalink: /patterns/site-alert/
variations: true
overview: A site alert communicates urgent sitewide information. 
description: A site alert prominently displays critical, time-sensitive warnings or directions across every page so that users see it whenever they visit the site. Using the same site alert treatment across agencies helps create a consistent and predictable way for users to find urgent information across all government websites.
    
usa-link: "https://designsystem.digital.gov/components/site-alert/"
specification: |
  We will be using the default search component. 
spec: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-classname
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
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

  "{% include patterns/site-alert/site-alert-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/site-alert/site-alert-info.md
htmlpath: patterns/site-alert/site-alert.md
csspath: patterns/site-alert/index.scss
---