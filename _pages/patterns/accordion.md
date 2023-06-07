---
layout: right
title: Accordion
permalink: /patterns/accordion
section: Patterns # initial cap required to make menu work
summary: |
  Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.

htmlpath: patterns/accordion/accordion-html.md
csspath: patterns/accordion/index.scss

accordion:
  content:
    - title: ‘But who is to give the prizes?’
      content: |
        First came ten soldiers carrying clubs; these were all shaped like the three gardeners, oblong and flat, with their hands and feet at the corners: next the ten courtiers; these were ornamented all over with diamonds, and walked two and two, as the soldiers did. After these came the royal children; there were ten of them, and the little dears came jumping merrily along hand in hand, in couples: they were all ornamented with hearts. Next came the guests, mostly Kings and Queens, and among them Alice recognised the White Rabbit: it was talking in a hurried nervous manner, smiling at everything that was said, and went by without noticing her. Then followed the Knave of Hearts, carrying the King’s crown on a crimson velvet cushion; and, last of all this grand procession, came THE KING AND QUEEN OF HEARTS.
    - title: of course you know what “it” means.
      content: |
        And she went on planning to herself how she would manage it. ‘They must go by the carrier,’ she thought; ‘and how funny it’ll seem, sending presents to one’s own feet! And how odd the directions will look!

jekyll: |
  {% include patterns/accordion/accordion.md content=page.accordion.content settings=page.accordion.settings %}

  Without settings - {% include patterns/accordion/accordion.md content=page.accordion.content %}

---
{{ page.summary }}

## The Design
{% include patterns/accordion/accordion.md content=page.accordion.content %}
---

## Code Examples
{% include partials/code-accordion.md %}

## Theme Settings
- $theme-accordion-border-width - Border width of the bordered accordion.
- $theme-accordion-border-color - Border color of the bordered accordion.
- $theme-accordion-font-family - Font family of the accordion.

## Variations
Add class `.usa-accordion--bordered` to display a border around the content.


## Library & Prototyping
To implement accordion into the page you first need to create the content and settings. This can be done through the front matter or by using data files. (*read more about using data files and [Contentful](docs/contentful)*)

### Settings
Settings are optional parameters that can be added to control styling and to set a reference. The reference is needed for using multiple groups if accordions on a page.

| setting | value |
| bordered | true/false (defaults to false)|
| multiselect | true/false (defaults to false)|
| ref | allows any letter (defaults to a)|
{: .usa-table}

### Content
For authoring environments, it recommended that this is created as a list.

| name | required |
| title | <i class="fa-solid fa-check"></i> |
| header | *optional* - displays an h2 element over the accordion body content |
| content | <i class="fa-solid fa-check"></i> |
{: .usa-table }

### Front matter example
this example uses a multi-level array for using both content and settings. For settings, only add the items you want to change.
{% highlight yaml %}
accordion:
  settings:
    bordered: true
    multiselect: true
    ref: "z"
  list:
    - title: Accordion item 1
      header: item 1 header
      content: accordion item 1 content
    - title: Accordion item 2
      content: accordion item 2 content
    - title: Accordion item 3
      content: accordion item 3 content
{% endhighlight %}

### Add pattern to page
{% highlight liguid %}
  {{ page.jekyll }}
{% endhighlight %}
