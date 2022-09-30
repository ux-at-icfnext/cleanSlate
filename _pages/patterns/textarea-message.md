---
layout: pattern
categories: [patterns, text-input]
title: Textarea with error message
type: [detail-page]
permalink: /patterns/text-input/textarea/textarea-helpful-message/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/text-input/"
specification: |
#spec:
text-label: Text label
text-type: error
### options: success (corresponding class: usa-input--success), error (corresponding class: usa-input--error), focus (corresponding class: usa-focus)
text-message: Helpful error message
## if text input with error message component (text-type = error), enter error message
class: usa-input--error
### options: usa-input--error , usa-input--success, usa-focus

yml: |
  
  text-label: Text label
  text-message: Helpful error message
  text-type: error
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

  "{% include patterns/text-input/textarea-jk.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 

htmlpath: patterns/text-input/textarea-message.md
csspath: patterns/text-input/index.scss
---