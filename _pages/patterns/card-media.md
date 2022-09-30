---
layout: pattern
categories: [patterns, card]
title: Card with media
type: [detail-page]
permalink: /patterns/card/card-with-media/
description: |
  This layout allows for a full-width image at the top. For this layout use the ```.usa-card__media``` class. The example in the html below shows how to apply. _see more details on functionality on the [default card](/patterns/card) page_
overview: This layout allows for a full-width image at the top. 

usa-link: "https://designsystem.digital.gov/components/card/"
cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: tablet:grid-col-4
  - title: Card 2
    content: card 2 content
    button: Learn more about card 2
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: tablet:grid-col-4
  - title: Card 3
    content: card 3 content
    button: Learn more about card 3
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: tablet:grid-col-4
yml: |
  
  cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
    img: https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg
    alt: placeholder image
    class: tablet:grid-col-4

jekyll: |

  "{% include patterns/card/card-jk.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/card/card-media.md
csspath: patterns/card/index.scss
---