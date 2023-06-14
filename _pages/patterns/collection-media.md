---
layout: right
title: Collection with Media
permalink: /patterns/collection-media
section: Patterns # initial cap required to make menu work
summary: |
  The following component is based on the from the USWDS. The information below shows how the component was customized to match our site brand. Please review the <a href="https://designsystem.digital.gov/components/collection/">USWDS: Collection</a> for more information on how to use this component.

htmlpath: patterns/collection/collection-media-html.md
csspath: patterns/collection/index.scss

collection:
  content:
    - title: ‘Collection Title’
      media:
      alt:
      description: |
        First came ten soldiers carrying clubs; these were all shaped like the three gardeners, oblong and flat, with their hands and feet at the corners: next the ten courtiers; these were ornamented all over with diamonds, and walked two and two, as the soldiers did. After these came the royal children; there were ten of them, and the little dears came jumping merrily along hand in hand, in couples: they were all ornamented with hearts. Next came the guests, mostly Kings and Queens, and among them Alice recognised the White Rabbit: it was talking in a hurried nervous manner, smiling at everything that was said, and went by without noticing her. Then followed the Knave of Hearts, carrying the King’s crown on a crimson velvet cushion; and, last of all this grand procession, came THE KING AND QUEEN OF HEARTS.
      author: Author
      date: Month Day, Year
    - title: Collection Title
      media:
      alt:
      description: |
        And she went on planning to herself how she would manage it. ‘They must go by the carrier,’ she thought; ‘and how funny it’ll seem, sending presents to one’s own feet! And how odd the directions will look!
      author: Author
      date: Month Day, Year
jekyll: |
  {% include patterns/collection/collection-media.md content=page.collection.content settings=page.collection.settings %}

  Without settings - {% include patterns/collection/collection-media.md content=page.collection.content %}
---
{{ page.summary }}

## The Design
{% include patterns/collection/collection-media-html.md%}
---

## Theme Settings
- $theme-collection-font-family - Font family of the collection.
- $theme-collection-header-typeset - Header typeset of the collection.

## Variations
Add class `.usa-collection--condensed` for a more condensed item presentation with less space between items.

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping
To implement collection into the page you first need to create the content and settings. This can be done through the front matter or by using data files. (*read more about using data files and [Contentful](docs/contentful)*)

### Settings
Settings are optional parameters that can be added to control styling and to set a reference. The reference is needed for using multiple groups if accordions on a page.

| setting | value |
| bordered | true/false (defaults to false)|
| multiselect | true/false (defaults to false)|
| ref | allows any letter (defaults to a)|
{: .usa-table}

### Content
For authoring environments, it recommended that this is created as a list.

| title | <i class="fa-solid fa-check"></i> required |
| description | <i class="fa-solid fa-check"></i> required |
| author | <i class="fa-solid fa-check"></i> required |
| date | <i class="fa-solid fa-check"></i> required |
| tags | <i class="fa-solid fa-check"></i> required |
{: .usa-table }

### Front matter example
this example uses a multi-level array for using both content and settings. For settings, only add the items you want to change.
{% highlight yaml %}
collection:
  settings:
    bordered: true
    multiselect: true
    ref: "z"
  list:
    - title: Collection item 1
      description: item 1 description
      date: collection item 1 date
      author: collection item 1 author
      tags: collection item 1 tags
    - title: Collection item 2
      description: item 2 description
      date: collection item 2 date
      author: collection item 2 author
      tags: collection item 2 tags
    - title: Collection item 3
      description: item 3 description
      date: collection item 3 date
      author: collection item 3 author
      tags: collection item 3 tags
{% endhighlight %}

### Add pattern to page
{% highlight liguid %}
  {{ page.jekyll }}
{% endhighlight %}