---
layout: pattern
categories: [patterns, checkbox]
title: Checkbox with description
type: [detail-page]
permalink: /patterns/checkbox/checkbox-with-description/
overview: Add descriptive text beneath the checkbox label.
description: |  
  This varation allows adding descriptive text beneath the checkbox label. Object can be mixed with the default [checkbox pattern](/patterns/checkbox/).
    
usa-link: "https://designsystem.digital.gov/components/checkbox/"

topic: Historical figure
checkbox:
  - title: Sojourner Truth
    description: This is optional text that can be used to describe the label in more detail
  - title: Frederick Douglass
    description: This is optional text that can be used to describe the label in more detail
  - title: Booker T. Washington
    description: This is optional text that can be used to describe the label in more detail
    disabled: true
yml: |
  
  topic: Historical figure
  checkbox:
  - title: Sojourner Truth
    description: This is optional text that can be used to describe the label in more detail
  - title: Frederick Douglass
    description: This is optional text that can be used to describe the label in more detail
  - title: Booker T. Washington
    description: This is optional text that can be used to describe the label in more detail
  - title: George Washington Carver
    description: This is optional text that can be used to describe the label in more detail
    disabled: true
    ###true -- disable checkbox

jekyll: |

  "{% include patterns/checkbox/checkbox-jk.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/checkbox/checkbox-with-description.md
csspath: patterns/checkbox/index.scss
---