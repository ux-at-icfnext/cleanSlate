---
layout: pattern
categories: [patterns, time-picker]
title: Time picker
type: [sub-nav-item]
permalink: /patterns/time-picker/
overview: A time picker helps users select a specific time. 
description: A time picker helps users select a specific time.
    
usa-link: "https://designsystem.digital.gov/components/time-picker/"
specification: |
  The time picker allows users to schedule a time from common, consistent increments, such as planning a meeting time in 30-minute blocks.

  - Onclick/Ontap of the checron icon, the dropdown slides down to reveal the available time slots.

  - Hover over any time slots actives hover state, click to make a selection
  
  - Onclick/Ontap of the "x" icon, the selection will be cleared. 
spec: # example schema below .. repeat sets for as many fields as you have
  - fieldname: title
    class-name: usa-classname
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - fieldname: body
    class-name: usa-classname
    type: text
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"
timeLabel: Appointment time
timeDescription: hh:mm

yml: |
  
    timeLabel: Appointment time
    timeDescription: hh:mm

jekyll: |

  "{% include patterns/time-picker/time-picker-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/time-picker/time-picker.md
csspath: patterns/time-picker/index.scss
---