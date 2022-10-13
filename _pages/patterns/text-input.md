---
layout: pattern
categories: [patterns, text-input]
title: Text input
type: [sub-nav-item]
permalink: /patterns/text-input/
variations: true
overview: A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines. 
description: A text input allows users to enter any combination of letters, numbers, or symbols. Text input boxes can span single or multiple lines.
    
usa-link: "https://designsystem.digital.gov/components/text-input/"
specification: |
  Use the text input component for unpredictable or freeform responses and allow users to paste in a response. 
  
  -The length of the text input provides a hint to users as to how much text to write. Do not require users to write paragraphs of text into a single-line input box; use a text area instead.

  - Only show error validation messages or stylings after a user has interacted with a particular field.

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
text-label: Text label
text-type: success 
### options: success (corresponding class: usa-input--success), error (corresponding class: usa-input--error), focus (corresponding class: usa-focus)
class: usa-input--success
### options: usa-input--error , usa-input--success, usa-focus

yml: |
  
  text-label: Text label
  text-type: success 
  ### text-type options: 
    ### success (corresponding class: usa-input--success)
    ### error (corresponding class: usa-input--error)
    ### focus (corresponding class: usa-focus)
  class: usa-input--success
  ### class options: 
    ### usa-input--error
    ### usa-input--success 
    ### usa-focus

jekyll: |

  "{% include patterns/text-input/text-input-jk.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/text-input/text-input-focus.md
htmlpath: patterns/text-input/text-input.md
csspath: patterns/text-input/index.scss
---