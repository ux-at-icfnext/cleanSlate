---
layout: pattern
categories: [patterns, collection]
title: Media thumbnail collection
type: [detail-page]
permalink: /patterns/collection/collection-media-thumbnail/
variations: true
overview: This variation of the collection component lets you add a media element to the list.  
description: | 
  This variation of the collection component lets you add a media element to the list. _see more details on functionality on the [default collection](/patterns/collection) page_
usa-link: "https://designsystem.digital.gov/components/collection/"
heading: Media thumbnail collection
collection:
  - title: Gears of Government President’s Award winners
    description: Today, the Administration announces the winners of the Gears of
            Government President’s Award. This program recognizes the contributions
            of individuals and teams across the federal workforce who make a
            profound difference in the lives of the American people.
    link: https://trumpadministration.archives.performance.gov/presidents-winners-press-release/
    img: https://trumpadministration.archives.performance.gov/img/GoG/GoG-logo.png
    alt: Gears of Government Awards - President's Award
    details: By Sondra Ainsworth and Constance Lu
    month: 9
    day: 30
    year: 2020
    new-tag: true 
    ### true will display orange "New" tag
    tags: [PMA, OMB]
yml: |
  
  collection:
   - title: Gears of Government President’s Award winners
     description: Today, the Administration announces the winners of the Gears of
            Government President’s Award. This program recognizes the contributions
            of individuals and teams across the federal workforce who make a
            profound difference in the lives of the American people.
     link: https://trumpadministration.archives.performance.gov/presidents-winners-press-release/
     img: https://trumpadministration.archives.performance.gov/img/GoG/GoG-logo.png
     alt: Gears of Government Awards - President's Award
     details: By Sondra Ainsworth and Constance Lu
     month: 9
     day: 30
     year: 2020
     new-tag: true
      ### true will display orange "New" tag
     tags: [PMA, OMB] 

jekyll: |

  "{% include patterns/collection/collection-media-thumbnail-jk.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/collection/collection-media-thumbnail.md
csspath: patterns/collection/index.scss
---