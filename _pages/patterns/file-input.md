---
layout: pattern
categories: [patterns, file-input]
title: File input
type: [sub-nav-item]
permalink: /patterns/file-input/
overview: File input allows users to attach one or multiple files.
description: |
   File input allows users to attach one or multiple files.
   
   When to use the file input component:
   Documents are required. Ask users to provide files when it’s necessary." 
    
usa-link: "https://designsystem.digital.gov/components/file-input/"
specification: |
   The file input box can be set to allow the following inputs:
   - Single file upload
   - multiple file upload
   - Text or PDF only
   - Image only

   **Functionality**
   - OnClick/OnTap of input, system displays file upload. User is able to navigate their system to select a file. 
   - OR on drag and drop, the user is able to drop their file onto the input.
   - On choosing file, system then displays the chosen file amd holds it in memory. The option to "change the file" appears
   - If the user selects "change the file", the system unloads the file from memory and opens the system to navigate to a new file.
   - On submission of form, the system saves the file to the chosen location.

   NOTE: you can use the design above to try out this fuctionality

   **Error State** is a user uploads a file that does not fit the established parameters... the system displays the error state and the form is not submitted.
 

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

  "{% include patterns/file-input/file-input-jk.md %}"
#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlexcerpt: patterns/file-input/file-input-variation.md
htmlpath: patterns/file-input/file-input.md
csspath: patterns/file-input/index.scss
---

