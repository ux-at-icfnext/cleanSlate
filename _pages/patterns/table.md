---
layout: right
title: Tables
permalink: /patterns/tables
section: Patterns # initial cap required to make menu work
summary: |
  The tab component consists of two distinct zones: selected and unselected. There are always at least two tabs and one is selected by default. Tabs are used to make it easy to explore and switch between different views.

htmlpath: patterns/table/table-html.md
csspath: patterns/table/index.scss

tables:
  content:
    - title: Bordered Table
      table_headers:
        - label: Title
        - label: Description
        - label: Year
      rows:
        - label: Row 1 Title
          desc: Row 1 Description
          year: Row 1 Year
        - label: Row 2 Title
          desc: Row 2 Description
          year: Row 2 Year
        - label: Row 3 Title
          desc: Row 3 Description
          year: Row 3 Year
    - title: Striped Table
      table_class: usa-table--striped
      table_headers:
        - label: Title
        - label: Description
        - label: Year
      rows:
        - label: Row 1 Title
          desc: Row 1 Description
          year: Row 1 Year
        - label: Row 2 Title
          desc: Row 2 Description
          year: Row 2 Year
        - label: Row 3 Title
          desc: Row 3 Description
          year: Row 3 Year
    - title: Borderless Table
      table_class: usa-table--borderless
      table_headers:
        - label: Title
        - label: Description
        - label: Year
      rows:
        - label: Row 1 Title
          desc: Row 1 Description
          year: Row 1 Year
        - label: Row 2 Title
          desc: Row 2 Description
          year: Row 2 Year
        - label: Row 3 Title
          desc: Row 3 Description
          year: Row 3 Year

jekyll: |
  {% include patterns/table/table.md content=page.tables.content settings=page.tables.settings %}

  Without settings - {% include patterns/table/table.md content=page.tables.content %}

---

{{ page.summary }}

## The Design
{% include patterns/table/table.md content=page.tables.content %}
{% include patterns/table/table-scrollable-html.md content=page.tables.content %}