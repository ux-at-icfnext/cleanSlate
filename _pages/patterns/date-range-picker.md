---
layout: pattern
categories: [patterns, date-picker]
title: Date range picker
type: [detail-page]
permalink: /patterns/date-range-picker/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/date-range-picker"
specification: |
#spec:
startLabel: Event start date
startDateDescription: mm/dd/yyyy
endLabel: Event end date
endDateDescription: mm/dd/yyyy

yml: |
  
    startLabel: Event start date
    startDateDescription: mm/dd/yyyy
    endLabel: Event end date
    endDateDescription: mm/dd/yyyy

jekyll: |

  "{% include patterns/date-picker/date-range-picker.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/date-picker/date-range-picker.md
csspath: patterns/date-picker/index.scss
---