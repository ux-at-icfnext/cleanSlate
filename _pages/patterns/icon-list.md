---
layout: pattern
categories: [patterns, icon-list]
title: Icon list
type: [sub-nav-item]
permalink: /patterns/icon-list/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/icon-list/"
specification: |
sectionTitle: Content title
sectionDescription: Content description
iconListSize: large
### options: small, medium, large
iconList:
 - iconType: green-circle-check
 ### options: green-circle-check, red-circle-cancel, thumbs-up, circle-check, money, help
   title: Icon title
   content: Wash your hands for 20 seconds with soap
   bold: true
 - iconType: circle-check
   content: Wash your hands for 20 seconds with soap
   bold: true
yml: |
  
  sectionTitle: Simple content
  sectionDescription: Benefits of joining Global Entry program:
  iconListSize: 
  ### icon size options:
    ### small
    ### medium
    ### large
  iconList: 
   - iconType:
    ### icon type options: 
      ### green-circle-check
      ### red-circle-cancel
      ### thumbs-up
      ### circle-check
      ### money
      ### help
     title: No processing lines
     ### if no title, include all text in content field for simple content layout
     content: 
     bold:
     ### options: true or false 
jekyll: |

  "{% include patterns/icon-list/icon-list.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/icon-list/icon-list-default.md
htmlpath: patterns/icon-list/icon-list.md
csspath: patterns/icon-list/index.scss
---