---
layout: right
title: Collection
permalink: /patterns/collection
section: Patterns # initial cap required to make menu work
summary: |
  Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.

htmlpath: patterns/collection/collection-html.md
csspath: patterns/collection/index.scss

collection:
  content:
    - title: ‘Collection Title’
      description: |
        First came ten soldiers carrying clubs; these were all shaped like the three gardeners, oblong and flat, with their hands and feet at the corners: next the ten courtiers; these were ornamented all over with diamonds, and walked two and two, as the soldiers did. After these came the royal children; there were ten of them, and the little dears came jumping merrily along hand in hand, in couples: they were all ornamented with hearts. Next came the guests, mostly Kings and Queens, and among them Alice recognised the White Rabbit: it was talking in a hurried nervous manner, smiling at everything that was said, and went by without noticing her. Then followed the Knave of Hearts, carrying the King’s crown on a crimson velvet cushion; and, last of all this grand procession, came THE KING AND QUEEN OF HEARTS.
      author: Author
      date: Month Day, Year
    - title: Collection Title
      description: |
        And she went on planning to herself how she would manage it. ‘They must go by the carrier,’ she thought; ‘and how funny it’ll seem, sending presents to one’s own feet! And how odd the directions will look!
      author: Author
      date: Month Day, Year
jekyll: |
  {% include patterns/collection/collection.md content=page.collection.content settings=page.collection.settings %}

  Without settings - {% include patterns/collection/collection.md content=page.collection.content %}
---
{{ page.summary }}

## The Design
{% include patterns/collection/collection-html.md%}
---