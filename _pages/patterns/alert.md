---
layout: pattern
categories: [patterns, alert]
title: Alert
type: [sub-nav-item]
permalink: /patterns/alert/
variations: true
overview: "An alert keeps users informed of important and sometimes time-sensitive changes." 
description: |
    An alert keeps users informed of important and sometimes time-sensitive changes.
    
usa-link: "https://designsystem.digital.gov/components/alert/"
specification: | 
    - Note that alert content should be text only, but may contain a link.
    - For authoring. There should be an option to apply to multiple pages or sections.
    - **If** the alert is a **site wide** communication, consider using the [Site Alert](/patterns/site-alert) instead.
alert:
    title: Test alert
    content: Test alert content <a class="usa-link" href="/">see link</a>
    type: success
    ### type options: warning, info, success, error
spec:
    - name: heading
      class: usa-alert__heading
      type: h3
      required: on standard type only
      content: 60` characters
      example: "Watch out for Cat Zombies"
    - name: body
      class: usa-alert__text
      type: text
      required: true
      character: 140 characters
      example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
    - name: alert type
      type: selection
      class: usa-alert--info | usa-alert--warning | usa-alert--error | usa-alert--success
      required: true
      content: "Options: Information, Warning, Error, Success"
    - name: alert style
      class: usa-alert--slim | usa-alert--no-icon
      type: selection
      required: applies standard if not added
      content: "Options: Standard, Slim, No Icon"
    - name: icon
      type: icon
      class: (icons are set in the base uswds-styles )
      required: true
      content: (icons live in the uswds images folder)
yml: |
  
  alert:
    title: Test alert
    content: Test alert content <a class="usa-link" href="/">see link</a>
    type: success
    ### type options: warning, info, success, error
jekyll: |

  "{% include patterns/alert/alert.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/alert/alert-info.md
htmlpath: patterns/alert/alert.md
csspath: patterns/alert/index.scss
---