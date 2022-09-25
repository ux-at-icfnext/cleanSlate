---
layout: pattern
categories: [patterns, modal]
title: Modal with forced action
type: [detail-page]
permalink: /patterns/modal/modal-forced-action/
overview: A forced modal required that action must be taken.
description: |
   A forced modal required that action must be taken. This is especially useful for a session ending or logout. _Read more about [modals](/patterns/modal/) by viewing the default pattern.
    
usa-link: "https://designsystem.digital.gov/components/modal/"
#specification: |
modal-class:
### additional modal component style
modal-type: 
### if large modal include class usa-modal--lg in modal-type variable
modal: Open modal with forced action
modal-title: Your session will end soon
modal-description: You’ve been inactive for too long Please choose to stay signed in or sign out. Otherwise, you’ll be signed out automatically in 5 minutes.
modal-button: Yes, stay signed in
modal-link: Sign out

yml: |
    
    modal-class:
    modal-type:
    ### options:
        ### usa-modal--lg: large modal
    modal: Open modal with forced action
    modal-title: Your session will end soon
    modal-description: You’ve been inactive for too long Please choose to stay signed in or sign out. Otherwise, you’ll be signed out automatically in 5 minutes.
    modal-button: Yes, stay signed in
    modal-link: Sign out
jekyll: |

  "{% include patterns/modal/modal-forced-action.md %}"

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/modal/modal-forced-action.md
csspath: patterns/modal/index.scss
---