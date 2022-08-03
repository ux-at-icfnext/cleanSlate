---
layout: left-rail
categories: [prototype]
title: Test prototype page
type: [sub-nav-item, prototype]
permalink: /prototype/test/
description: Test implementation of design files
overview: Test implementation of design files
alert:
    title: Success message
    content: You have successfully created an account.
    link: /
    linkText: Confirm your email address.
    type: success
    ### type options: warning, info, success, error
accordion:
  - title: Accordion item 1
    content: accordion item 1 content
  - title: Accordion item 2
    content: accordion item 2 content
  - title: Accordion item 3
    content: accordion item 3 content
---
{% include patterns/alert/alert-jk.md %}
<br/>
{% include patterns/accordion/accordion-jk.md %}
