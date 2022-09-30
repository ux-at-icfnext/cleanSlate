---
layout: pattern
categories: [patterns, collection]
title: Heading only collection
type: [detail-page]
permalink: /patterns/collection/collection-heading-only/
variations: true
overview: When only a heading and link are needed, this variation of the component comes in handy for using the heading of the text as the link. 
description: |
  When only a heading and link are needed, this variation of the component comes in handy for using the heading of the text as the link. _see more details on functionality on the [default collection](/patterns/collection) page_
usa-link: "https://designsystem.digital.gov/components/collection/"
collection:
  - title: The eight principles of mobile-friendliness
    description:  Digital.gov
    link: https://digital.gov/guides/mobile-principles/?dg
    icon-url:
yml: |
  
  collection:
   - title: The eight principles of mobile-friendliness
     description: Digital.gov
     link: https://digital.gov/guides/mobile-principles/?dg
     icon-url:

jekyll: |

  "{% include patterns/collection/collection-heading-only-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/collection/collection-heading-only.md
csspath: patterns/collection/index.scss
---