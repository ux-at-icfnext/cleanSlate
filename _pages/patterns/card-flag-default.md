---
layout: pattern
categories: [patterns, card]
title: Default flag card
type: [detail-page]
permalink: /patterns/card/card-flag-default/
description: |
  This "flag" card has the image positioned on the left . The example in the html below shows how to apply. To see an example with the image with padding, see the [right flag](/patterns/card/card-flag-media-right-inset/). _see more details on functionality on the [default card](/patterns/card) page_
overview: This "flag" card has the image positioned on the left with the image at full height.

usa-link: "https://designsystem.digital.gov/components/card/"
cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
yml: |
  
  cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image

jekyll: |

  "{% include patterns/card/card-flag-default.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/card/card-flag-default.md
csspath: patterns/card/index.scss
---