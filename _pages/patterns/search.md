---
layout: right
title: Search
permalink: /patterns/search
section: Patterns # initial cap required to make menu work
summary: |
  Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation.

htmlpath: patterns/header/header.md
csspath: patterns/header/index.scss

search:
  big: true
  placeholder: go get it
  label: now
---

{% include patterns/search/search-jk.md content=page.search %}