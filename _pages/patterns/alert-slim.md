---
layout: pattern
categories: [patterns, alert]
title: Slim alert
type: [detail-page]
permalink: /patterns/alert/alert-slim/
overview: Use this version of the alert with out a header
description: |
    This version of the alert does not use a header and so is ideal for using in small spaces, like on an error on a form. _see [Alert Pattern](/patterns/alert) for more information on how the alert component works._
    
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

  "{% include patterns/alert/alert-slim.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/alert/alert-slim-info.md
htmlpath: patterns/alert/alert-slim.md
csspath: patterns/alert/index.scss
---