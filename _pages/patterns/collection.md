---
layout: pattern
categories: [patterns, collection]
title: Collection
type: [sub-nav-item]
permalink: /patterns/collection/
variations: true
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
  A collection displays a compact list of multiple related items like articles or events. The list links each item to its original source.

  The collection component offers users a way to view short descriptions of related content, providing a simple way to access the original source to learn more. 
  
  It’s useful when you want to highlight information like articles, events, or documents that appear elsewhere on your website or from other sources. Each item in the collection includes a headline that links to another page and (optionally) a small image, descriptive text, and metadata such as date, time, byline, and tags. Items in a collection should be related. This could be by publication date (for instance, all the content was posted in the last week), by content type (all articles, events, or blog posts), or by subject (all items relate to the same topic or theme). Be selective about what content you show in each collection. Except in the case of search results, consider limiting the number of items in each collection to six or fewer.
usa-link: "https://designsystem.digital.gov/components/collection/"
specification: |
  Please follow link guidance as stated on the [links](/patterns/link/) page. OnClick/OnTap of title link, system displays destination page.

  
spec:
  - name: title
    class: usa-collection__heading
    required: true
    type: customizable heading level
    content: 80 characters
    example: "Cats are really cool dudes"
  - name: body
    class: usa-collection__description
    type: text
    content: 320 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
  - name: meta-item
    class: "usa-collection_meta-item"
    content: "Note: there can be mutliples of this field."
    example: "can be used for items such as author or date or related link"
  - name: tags
    class: usa-collection__meta-item usa-tag
    example: see <a href="/patterns/tag/">Tag</a> pattern
  - name: date
    class: usa-collection__calendar-date
    content: specifies calendar month and calendar day
heading: Default Collection
collection-class: 
collection:
  - title: Event 1
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    link: /
    date: October 30, 2022
     ### date format: Month, DD, YYYY - ex. September 20, 2022
    new-tag: true
    tags: [PMA, OMB] 
  - title: Event 2
    description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
    link: /
    date: September 30, 2022
     ### date format: Month, DD, YYYY - ex. September 20, 2022
    new-tag: true
    tags: [PMA, OMB] 


### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/collection/collection.md
csspath: patterns/collection/index.scss
---