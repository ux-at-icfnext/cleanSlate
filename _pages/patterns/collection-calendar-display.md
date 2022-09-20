---
layout: pattern
categories: [patterns, collection]
title: Calendar display collection
type: [detail-page]
permalink: /patterns/collection/collection-calendar-display/
variations: true
overview: For items tied to a date, use the Calendar Display. 
description: |
  For items tied to a date, use the Calendar Display. This variation adds a calendar thumbnail to track the date. Perfect for event based designs. _see more details on functionality on the [default collection](/patterns/collection) page_
usa-link: "https://designsystem.digital.gov/components/collection/"
collection:
  - title: Gears of Government President’s Award winners
    description: Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.
    month: 9
    day: 30
    year: 2020
    link: https://trumpadministration.archives.performance.gov/presidents-winners-press-release/
yml: |
  
  collection:
   - title: Gears of Government President’s Award winners
     description: Today, the Administration announces the winners of the Gears of Government President’s Award. This program recognizes the contributions of individuals and teams across the federal workforce who make a profound difference in the lives of the American people.
     link: https://trumpadministration.archives.performance.gov/sba-wosb-dashboard/
     month: 9
     day: 30
     year: 2020
     link: https://trumpadministration.archives.performance.gov/presidents-winners-press-release/

jekyll: |

  "{% include patterns/collection/collection-calendar-display.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/collection/collection-calendar-display.md
csspath: patterns/collection/index.scss
---