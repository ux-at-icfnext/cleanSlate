---
layout: pattern
categories: [patterns, modal]
title: Modal
type: [sub-nav-item]
permalink: /patterns/modal/
variations: true
overview: A modal disables page content and focuses the user’s attention on a single task or message.
description: |
  A modal prevents interaction with page content until the user completes an action or dismisses the modal. This intentionally interrupts the user’s workflow. Use modals sparingly to minimize unnecessary disruptions.

  Modals should have a simple headline that explains its purpose. Use enough descriptive text to be clear what the user needs to do and why. Avoid using modals to display complex forms or large amounts of information.
    
usa-link: "https://designsystem.digital.gov/components/modal/"
specification: |
  - OnClick/OnTap modal opens over window. 
  - Modal should be no more than 95% of the screen width, making sure that the close button is in view
  - On smaller devices modal needs to scroll if it falls below the screen fold. ** NOTE ** This behavior does not come with the default USWDS! 
  - OnClick/OnTap of close button or outside of the modal window, modal closes.
  - Items in the background must be disabled.
  - Modal must contain a background area that allows modal content to be read.
modal-class: 
### additional modal component style
modal-type: 
### if large modal include class usa-modal--lg in modal-type variable
modal: Open default modal
modal-title: Are you sure you want to continue?
modal-description: You have unsaved changes that will be lost.
modal-button: Continue without saving
modal-link: Go back

yml: |
  
  modal-class: 
  ### additional modal component style
  modal-type: 
  ### options:
    ### usa-modal--lg: large modal
  modal: Open default modal
  modal-title: Are you sure you want to continue?
  modal-description: You have unsaved changes that will be lost.
  modal-button: Continue without saving
  modal-link: Go back
jekyll: |

  "{% include patterns/modal/modal-jk.md %}"

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/modal/modal.md
csspath: patterns/modal/index.scss
---