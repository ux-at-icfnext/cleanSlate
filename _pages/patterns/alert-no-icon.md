---
layout: pattern
categories: [patterns, alert]
title: Alert without icon
type: [detail-page]
permalink: /patterns/alert/alert-no-icon/
overview: Alert usage without icon or header
description: |
    This option uses the alert pattern with out the icon or header for the slimmest alert size. _see [Alert Pattern](/patterns/alert) for more information on how the alert component works._
    
usa-link: "https://designsystem.digital.gov/components/alert/"
specification: |
alert:
    content: Test alert content <a class="usa-link" href="/">see link</a>
    type: success
    ### type options: warning, info, success, error
yml: |
  
  alert:
    content: Test alert content <a class="usa-link" href="/">see link</a>
    type: success
    ### type options: warning, info, success, error
jekyll: |

  "{% include patterns/alert/alert-no-icon.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/alert/alert-no-icon-info.md
htmlpath: patterns/alert/alert-no-icon.md
csspath: patterns/alert/index.scss
---