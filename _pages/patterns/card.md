---
layout: pattern
categories: [patterns, card]
title: Card
type: [sub-nav-item]
permalink: /patterns/card/
variations: true
overview: A card is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. 
description: |
  A card is often a subset or summary of a larger idea. It acts as an entry point to more detailed information. This summary can contain a variety of content types, such as text, images and multimedia, or buttons and links.
  An individual card is typically a member of a collection of similar cards, not a single card in isolation. A card is distinguished from others in its collection by its content, and cards are distinguished from the broader page context in form — usually with a border or a shadow.
  Finally, a card is modular. This means that you can vary the order of cards in a collection without destroying any individual card’s meaning.

usa-link: "https://designsystem.digital.gov/components/card/"
specification: | 
  OnClick/OnTap of card system displays destination in current window 
  OnHover display hover state 
spec: 
  - fname: title
    class: usa-card__heading
    required: true
    type: customizable heading level 
    content: 50 characters
    example: "Cats are really cool dudes"
  - name: body
    required: true
    class: usa-card__body
    type: text
    content: 120 characters  
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - name: media
    type: image 
    class: usa-card__img
  - name: link
    type: button
    required: true
    content: URL destination
  - name: layout
    type: select list
    content: default | card with media | header first | inset media | flag left | flag right
    required: uses default unless specified
cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
  - title: Card 2
    content: card 2 content
    button: Learn more about card 2
  - title: Card 3
    content: card 3 content
    button: Learn more about card 3
yml: |
  
  cards:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1

jekyll: |

  "{% include patterns/card/card.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/card/card.md
csspath: patterns/card/index.scss
---