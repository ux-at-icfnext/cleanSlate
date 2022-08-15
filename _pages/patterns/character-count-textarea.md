---
layout: pattern
categories: [patterns, text-input]
title: Textarea character count
type: [detail-page]
permalink: /patterns/character-count/textarea-character-count/
overview: Character count helps users know how much text they can enter when there is a limit on the number of characters.
description: |
    Character count helps users know how much text they can enter when there is a limit on the number of characters. This functions just like the [text input](/patterns/character-count/) put works on text area fields.
    
usa-link: "https://designsystem.digital.gov/components/character-count/"

counter:
    title: Sample text input
    desc: Description of text input field
    count: 50
    type: textarea
    ### type options: textarea, input
yml: |
  
  counter:
    title: Sample text input
    desc: Description of text input field
    count: 50
    ### character count limit
    type: textarea
    ### type options: textarea, input

jekyll: |

  "{% include patterns/character-count/character-count-textarea.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/character-count/character-count-textarea.md
csspath: patterns/character-count/index.scss
---