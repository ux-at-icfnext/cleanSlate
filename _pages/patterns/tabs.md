---
layout: right
title: Tabs
permalink: /patterns/tabs
section: Patterns # initial cap required to make menu work
summary: |
  The tab component consists of two distinct zones: selected and unselected. There are always at least two tabs and one is selected by default. Tabs are used to make it easy to explore and switch between different views.

htmlpath: patterns/tabs/tabs-html.md
csspath: patterns/tabs/index.scss

tabs:
  content:
    - title: Tab 1
      header: Header 1
      tabContent: Tab 1 Content
    - title: Tab 2
      header: Header 2
      tabContent: Tab 2 Content

jekyll: |
  {% include patterns/tabs/tabs.md content=page.tabs.content settings=page.tabs.settings %}

  Without settings - {% include patterns/tabs/tabs.md content=page.tabs.content %}

---

{{ page.summary }}

## The Design
{% include patterns/tabs/tabs.md content=page.tabs.content %}