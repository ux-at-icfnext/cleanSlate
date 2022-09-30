---
layout: pattern
categories: [patterns, breadcrumb]
title: Breadcrumb
type: [sub-nav-item]
permalink: /patterns/breadcrumb/
overview: A breadcrumb bar shows the location of the current page in the site structure.. 
description: |
   A breadcrumb bar shows the location of the current page in the site structure. It's a path from the current page back to the home page, showing each level of organization in-between. Breadcrumbs allow a user to navigate “up” to a parent section instead of “Back” to the previous page. Use breadcrumbs to help users navigate and understand the organization of your site 
    
usa-link: "https://designsystem.digital.gov/components/breadcrumb/"
specification: |
   Use the default responsive breadcrumb. 
    - The current page of the breadcrumb is not clickable
    - Parent/Grandparent OnClick, system displays target page in current window. 
breadcrumbWrapping: 
### options:
    ### true
    ### false/leave blank
#spec:
yml: |
  
  breadcrumbWrapping: true
  ### options:
    ### true
    ### false/leave blank

jekyll: |

  "{% include patterns/breadcrumb/breadcrumb-jk.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/breadcrumb/breadcrumb.md
csspath: patterns/breadcrumb/index.scss
---