---
layout: pattern
categories: [patterns, header]
title: Header
type: [sub-nav-item]
permalink: /patterns/header/
variations: true
overview:  A header helps users identify where they are and provide a quick, organized way to reach the main sections of a website.
description: |
     A header helps users identify where they are and provide a quick, organized way to reach the main sections of a website. At a minimum, it should include Site Logo & Title, main menu, and search (if site search exist).
    
usa-link: "https://designsystem.digital.gov/components/header/"
specification: |
    *Site Title & Logo* 
    - OnClick/OnTap of link, returns to the home page

    *Menu*
    - On smaller devices, the menu should be within the hamburger menu.
        - Hamburger menus house all levels of the site.
        - The menu should reflect the current page the user is on.
    - On larger devices, the menu is shown as a row of links right of the logo. 
        - Optional dropdown menu shows a list of secondary links. (Links below this level are shown with in the [side navigation](/patterns/side-navigation))
        - The menu should reflect the current section the user is on.
    - OnClick/OnTap of links, page opens in the same window

    *Search*
    _See the [Search patter](/patterns/search) for more information_

#spec:

### Paths to view design and code... 
## designimg: can be used to show an image of the design until a coded version can be created. The htmlpath & csspath should be located in the pattens folder. Read more about creating coded components in /docs/creating-patterns 
# designimg: 
htmlpath: patterns/header/header-basic.md
csspath: patterns/header/index.scss
---

