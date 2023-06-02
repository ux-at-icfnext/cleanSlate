---
layout: default
breadcrumb: "off"

card:
  headings:
    title: My Card Group
    link: "/"
    link_text: view more
  settings:
    grid_class: tablet:grid-col-3
    special: true
    grid_special: tablet:grid-col-12
    class_special: usa-card--flag
  list: 
    - title: My cool card 1
      media: "http://placekitten.com/200/200"
      content: Lorem stuff that takes up a bunch of space that might be a few lines
      link: "/"
      link_text: Click Me
    - title: My cool card 2
      media: "http://placekitten.com/200/200"
      content: Lorem stuff that takes up a bunch of space that might be a few lines
      link: "/"
      link_text: Click Me
    - title: My cool card 3
      media: "http://placekitten.com/200/200"
      content: Lorem stuff that takes up a bunch of space that might be a few lines
      link: "/"
      link_text: Click Me
    - title: My cool card 4
      media: "http://placekitten.com/200/200"
      content: Lorem stuff that takes up a bunch of space that might be a few lines
      link: "/"
      link_text: Click Me
---
<h1>Hello World</h1>

{% include patterns/card/card-group.md headings=page.card.headings content=page.card.list settings=page.card.settings %}
