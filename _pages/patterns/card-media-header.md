---
layout: pattern
categories: [patterns, card]
title: Card media with header
type: [detail-page]
permalink: /patterns/card/card-media-with-header
description: |
  This layout allows for a full-width image with a title at the top. For this layout use the ```.usa-card--header-first``` class and place  ```usa-card__media--exdent```  on the media class. The example in the html below shows how to apply. _see more details on functionality on the [default card](/patterns/card) page_
overview: This layout allows for a full-width image with a title at the top. 
usa-link: "https://designsystem.digital.gov/components/card/"

cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: usa-card--header-first tablet:grid-col-4
    media-class: usa-card__media--exdent
  - title: Card 2
    content: card 2 content
    button: Learn more about card 2
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: usa-card--header-first tablet:grid-col-4
    media-class: usa-card__media--exdent
  - title: Card 3
    content: card 3 content
    button: Learn more about card 3
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: usa-card--header-first tablet:grid-col-4
    media-class: usa-card__media--exdent
yml: |
  
  cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: usa-card--header-first tablet:grid-col-4
    media-class: usa-card__media--exdent

jekyll: |

  "{% include patterns/card/card-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/card/card-media-header.md
csspath: patterns/card/index.scss
---