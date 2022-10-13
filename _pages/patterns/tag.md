---
layout: pattern
categories: [patterns, tag]
title: Tag
type: [sub-nav-item]
permalink: /patterns/tag/
variations: true
overview: A tag draws attention to new or categorized content elements.
description: A tag draws attention to new or categorized content elements.
    
usa-link: "https://designsystem.digital.gov/components/tag/"
specification: |
  - Text on the tag should be short. 

  - If the tags aren’t interactive, disable hover, focus, and active styles.

  - Avoid tags if they might appear in the same area of the page as buttons.
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
tags:
 - text: DEFAULT
   type: 
### options: if blank, default size tag is applied
yml: |
  
  tags:
  - text: DEFAULT
    type: 
      ### type options: 
        ### big

jekyll: |

  "{% include patterns/tag/tag-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/tag/tag.md
csspath: patterns/tag/index.scss
---