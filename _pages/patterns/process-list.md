---
layout: pattern
categories: [patterns, process-list]
title: Process list
type: [sub-nav-item]
permalink: /patterns/process-list/
overview: A process list displays the steps or stages of important instructions or processes.
description: |
  A process list displays the steps or stages of important instructions or processes. Use process lists to create a clear hierarchy and help users easily differentiate between individual steps or stages in a process.
    
usa-link: "https://designsystem.digital.gov/components/process-list/"
specification: |
  A process list should include between three and ten steps to prevent it from getting too unwieldy or confusing. 

  The body of each list item can be used to display additional rich text content including HTML, images, and other components like buttons, images, simple lists, links, and tables.
spec:
  - name: title
    class: usa-process-list
    required: true
    type: h3
    content: 80 characters
    example: "Cats are really cool dudes"
  - name: body
    class: usa-classname
    type: text
    required: true
    character: 140 characters
    example: "Run off table persian cat jump eat fish hack. Paw at beetle and eat it before it gets away demand"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

paragraph-class:
### additional style for paragraph element
li-class:
### additional style for process list item 
h4-class:
### additional style for h4 element
list:
 - title: Start a process
   content: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque.
   detail-list:
    - text: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
    - text: Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.
    - text: Aliquam erat volutpat. Sed quis velit.
 - title: Proceed to the second step
   content: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
 - title: Complete the step-by-step process
   content: Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
yml: |
  
  paragraph-class:
  ### additional style for paragraph element
  li-class:
  ### additional style for process list item 
  h4-class:
  ### additional style for h4 element
  list:
  - title: Start a process
    content: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque.
    detail-list:
      - text: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
      - text: Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.
      - text: Aliquam erat volutpat. Sed quis velit.
  - title: Proceed to the second step
    content: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
  - title: Complete the step-by-step process
    content: Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
  
jekyll: |

  "{% include patterns/process-list/process-list-jk.md %}"
htmlpath: patterns/process-list/process-list.md
csspath: patterns/process-list/index.scss
---