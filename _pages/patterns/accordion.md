---
layout: right
title: Accodion
permalink: /patterns/accordion
section: Patterns # initial cap required to make menu work
summary: |
  Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.

htmlpath: patterns/accordion/accordion.md
csspath: patterns/accordion/index.scss

accordion:
  content:
    - title: ‘But who is to give the prizes?’
      content: |
        First came ten soldiers carrying clubs; these were all shaped like the three gardeners, oblong and flat, with their hands and feet at the corners: next the ten courtiers; these were ornamented all over with diamonds, and walked two and two, as the soldiers did. After these came the royal children; there were ten of them, and the little dears came jumping merrily along hand in hand, in couples: they were all ornamented with hearts. Next came the guests, mostly Kings and Queens, and among them Alice recognised the White Rabbit: it was talking in a hurried nervous manner, smiling at everything that was said, and went by without noticing her. Then followed the Knave of Hearts, carrying the King’s crown on a crimson velvet cushion; and, last of all this grand procession, came THE KING AND QUEEN OF HEARTS.
    - title: of course you know what “it” means.
      content: |
        And she went on planning to herself how she would manage it. ‘They must go by the carrier,’ she thought; ‘and how funny it’ll seem, sending presents to one’s own feet! And how odd the directions will look!

---
{{ page.summary }}

## The Design
{% include patterns/accordion/accordion-jk.md content=page.accordion.content %}
---

## Theme Settings
- $theme-accordion-border-width - Border width of the bordered accordion.
- $theme-accordion-border-color - Border color of the bordered accordion.
- $theme-accordion-font-family - Font family of the accordion.

## Variations
Add class `.usa-accordion--bordered` to display a border around the content.


## Library & Prototyping
To implement accordion into the page you first need to set the variables in the YML front matter


{% highlight yaml %}
accordion:
- title: Accordion item 1
  content: accordion item 1 content
- title: Accordion item 2
  content: accordion item 2 content
- title: Accordion item 3
  content: accordion item 3 content
{% endhighlight %}