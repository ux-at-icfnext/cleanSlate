---
layout: pattern
categories: [patterns, summary-box]
title: Summary box
type: [sub-nav-item]
permalink: /patterns/summary-box/
overview: A summary box highlights key information from a longer page or displays next steps. 
description: The following component is based on the from the USWDS. The information below shows how the component was customized to match our site brand. Please review the USWDS for more information on how to use this component.
    
usa-link: "https://designsystem.digital.gov/components/summary-box/"
specification: |
  A summary box is used to call out 3-5 key details that readers shouldn't miss on a page that contains a lot of information. If the page content describes a few steps or a checklist of items to remember, collect them in a summary box. Use five bullet points or less.

  - It's recommended to use anchor link to link to further reading on the same page. To do this without confusing your readers, do your best to explain where the link will take them in the hyperlinked text and reiterate it with the subsequent heading.

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
summary-title: Key information
summary-list:
 - item: If you are under a winter storm warning, <a href="/" class="usa-summary-box__link">find shelter</a> right away. 
 - item: Sign up for <a href="/" class="usa-summary-box__link">your community’s warning system</a>.
 - item: Learn the signs of, and basic treatments for, <a href="/"  class="usa-summary-box__link">frostbite</a> and <a href="/" class="usa-summary-box__link">hypothermia</a>.
 - item: Gather emergency supplies for your <a href="/" class="usa-summary-box__link">home</a> and your <a href="/" class="usa-summary-box__link">car</a>.
yml: |
  
  summary-title: Key information
  summary-list:
    - item: If you are under a winter storm warning, <a href="/" class="usa-summary-box__link">find shelter</a> right away. 
    - item: Sign up for <a href="/" class="usa-summary-box__link">your community’s warning system</a>.
    - item: Learn the signs of, and basic treatments for, <a href="/"  class="usa-summary-box__link">frostbite</a> and <a href="/" class="usa-summary-box__link">hypothermia</a>.
    - item: Gather emergency supplies for your <a href="/" class="usa-summary-box__link">home</a> and your <a href="/" class="usa-summary-box__link">car</a>.

jekyll: |

  "{% include patterns/summary-box/summary-box-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/summary-box/summary-box.md
csspath: patterns/summary-box/index.scss
---