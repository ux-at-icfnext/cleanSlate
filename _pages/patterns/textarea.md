---
layout: pattern
categories: [patterns, text-input]
title: Textarea
type: [detail-page]
permalink: /patterns/text-input/textarea/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/text-input/"
specification: |
#spec:
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

  "{% include patterns/text-input/textarea.md %}"

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/text-input/textarea-focus.md
htmlpath: patterns/text-input/textarea.md
csspath: patterns/text-input/index.scss
---