---
layout: pattern
categories: [patterns, file-input]
title: File input
type: [sub-nav-item]
permalink: /patterns/file-input/
overview: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. 
description: |
    
usa-link: "https://designsystem.digital.gov/components/file-input/"
specification: |
files:
 - error: true
    ### true -- display error message style; blank -- default file upload style
   error-message: Display a helpful error message
   ### display file upload error message
   label: Input accepts a single file
   desc: Select any valid file
   type: image/*
   ### .pdf,.txt, image/* (images wildcard -- accept all img file types)
   disabled: 
   ### true -- disable file upload functionality
   upload: multi
   ### options: single, multi
   id: file-input-field
   ### id value for input field
yml: |
  
  files:
   - error: true
   ### options:
      ### true -- display error message style
   error-message: Display a helpful error message
   ### display file upload error message
   label: Input accepts a single file
   desc: Select any valid file
   type: image/*
   ### options:
      ### .pdf
      ### .txt
      ### image/* (images wildcard -- accept all img file types)
   disabled: 
   ### options:
      ### true -- disable file upload functionality
   upload: multi
   ### options: 
      ### single
      ### multi
   id: file-input-field
   ### id value for input field

jekyll: |

  "{% include patterns/file-input/file-input.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/file-input/file-input-variation.md
htmlpath: patterns/file-input/file-input.md
csspath: patterns/file-input/index.scss
---

