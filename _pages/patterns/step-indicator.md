---
layout: pattern
categories: [patterns, step-indicator]
title: Step indicator
type: [sub-nav-item]
permalink: /patterns/step-indicator/
variations: true
overview: A step indicator updates users on their progress through a multi-step process.
description: A step indicator updates users on their progress through a multi-step process.
    
usa-link: "https://designsystem.digital.gov/components/step-indicator/"
specification: |
  Use the step indicator when the user is working through a form or process that will span several different pages that can be organized into three or more high-level steps or chapters. This helps users understand the progression of long forms and reduces uncertainty as they complete each screen.The step indicator is designed to complement standard back/next navigation in a linear sequence, not to be navigation of its own.

  - Use a color and text treatment for the current step segment that is distinct from both the completed and pending step segments. The current segment should be the most visually prominent segment in the step indicator. Pending segments should be the least visually prominent of the segments, but should still maintain accessible contrast and not appear disabled.

  - If labelling the step indicators, stick to very short words.

  - Use navigation like a [button-group](/button-group) to step forward and backward through a form. 

  - Each step needs an explicit heading. The step indicator segments (even with labels and counters) are not sufficient as a heading for a page or screen.

  - Using text like “[step] of [total]” next to the heading reinforces the number of total steps and helps users keep track of their location in the overall process.
  

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

stepIndicatorTitle: Supporting Documents
stepIndicatorCenter: 
### options: true, false/leave blank
stepIndicatorCurrentStep: 3
### current step number
stepIndicatorTotalSteps: 5
### total number of steps
stepIndicators:
 - status: completed
  ### options: completed, current
   label: Personal information
 - status: completed
  ### options: completed, current
   label: Household status
 - status: current
  ### options: completed, current
   label: Supporting documents
 - status: 
  ### options: completed, current
   label: Signature
 - status: 
  ### options: completed, current
   label: Review and submit

yml: |
  
  stepIndicatorTitle: Supporting Documents
  stepIndicatorCenter: true
  ### options: true, false/leave blank
  stepIndicatorCurrentStep: 3
    ### current step number
  stepIndicatorTotalSteps: 5
    ### total number of steps
  stepIndicators:
    - status: completed
      ### options: 
        ### completed
        ### current
        ### leave blank (not started)
      label: Personal information

jekyll: |

  "{% include patterns/step-indicator/step-indicator-jk.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/step-indicator/step-indicator-default.md
htmlpath: patterns/step-indicator/step-indicator.md
csspath: patterns/step-indicator/index.scss
---