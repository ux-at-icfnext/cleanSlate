---
layout: pattern
categories: [patterns, step-indicator]
title: Step indicator with counters
type: [detail-page]
permalink: /patterns/step-indicator/step-indicator-counters/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/step-indicator/"
specification: |
#spec:
stepIndicatorTitle: Supporting Documents
stepIndicatorCounter:   
### options: small, leave blank (default)
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

### options: if blank, default size tag is applied
yml: |

  stepIndicatorCounter: default
  ### options: 
    ### small
    ### leave blank (default)
  stepIndicatorTitle: Supporting Documents
  stepIndicatorCenter: 
  ### options:
    ### true 
    ### false/leave blank
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

  "{% include patterns/step-indicator/step-indicator-counters.md %}"
### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/step-indicator/step-indicator-counter-default.md
htmlpath: patterns/step-indicator/step-indicator-counters.md
csspath: patterns/step-indicator/index.scss
---