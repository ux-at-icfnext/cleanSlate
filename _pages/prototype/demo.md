---
layout: left-rail
categories: [prototype]
title: Demo
type: [sub-nav-item, prototype]
permalink: /prototype/demo/
description: Test implementation of design files
overview: Test implementation of design files
alert:
    title: Info message
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    type: info
    ### type options: warning, info, success, error
accordion:
  - title: Accordion item 1
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  - title: Accordion item 2
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  - title: Accordion item 3
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
cards:
- title: Card 1
  content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  button: Learn More
- title: Card 2
  content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  button: Learn More
- title: Card 3
  content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  button: Learn More
---
{% include patterns/alert/alert-jk.md %}

## Section Title
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.

### Description

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque.
<br/>
<div class="flex">
 {% include patterns/accordion/accordion-jk.md %}
</div>

### Additional Information
{% include patterns/card/card-jk.md %}

