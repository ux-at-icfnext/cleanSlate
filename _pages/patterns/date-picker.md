---
layout: pattern
categories: [patterns, date-picker]
title: Date picker
type: [sub-nav-item]
variations: true
permalink: /patterns/date-picker/
overview:  A date picker helps users select a single date.
description: |
    A date picker helps users select a single date.
    When to use the date picker component:
    Scheduling. When users need to schedule or record an event and benefit from the context of a calendar.
    When the day of the week is important. When knowing the day of the week helps users choose a specific date.
usa-link: "https://designsystem.digital.gov/components/date-picker"
specification: |
  User can enter the date manually by typing into the input box or they can use the calander to choose the date.
    **Calendar** - The functionality for the calendar is run through the USWDS javascript and works as described.
    - OnClick/Tap/Focus of the calendar icon, the calendar is displayed. 
    - The double arrows are used to navigate between years
    - The single arrows are used to navigate between months
    - OnClick/Tap/Focus of a day, that date is entered into the input field.
    **Date** - The date format is in MM/DD/YYYY
#spec:
label: Appointment date
dateDescription: mm/dd/yyyy

yml: |
  
    label: Appointment date
    dateDescription: mm/dd/yyyy

jekyll: |

  "{% include patterns/date-picker/date-picker.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/date-picker/date-picker.md
csspath: patterns/date-picker/index.scss
---