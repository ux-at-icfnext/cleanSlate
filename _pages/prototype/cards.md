---
layout: left-rail
categories: [prototype]
title: Cards
type: [sub-nav-item, prototype]
permalink: /prototype/cards/
description: Cards
overview: Cards
card-set-1:
  - title: Card 1
    content: card 1 content
    button: Learn more about card 1
  - title: Card 2
    content: card 2 content
    button: Learn more about card 2
  - title: Card 3
    content: card 3 content
    button: Learn more about card 3

card-set-2:
  - title: Card 4
    content: card 4 content
    button: Learn more about card 4
  - title: Card 5
    content: card 5 content
    button: Learn more about card 5
  - title: Card 6
    content: card 6 content
    button: Learn more about card 6
---
<h3>Test Card Group 1</h3>
{% include patterns/card/card-jk.md content=page.card-set-1 class="tablet:grid-col-3" %}

<h3>Test Card Group 2</h3>
{% include patterns/card/card-jk.md content=page.card-set-2 %}