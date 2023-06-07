---
layout: right
title: Alert
permalink: /patterns/alert
section: Patterns # initial cap required to make menu work
summary: |
  An alert keeps users informed of important and sometimes time-sensitive changes.

htmlpath: patterns/alert/alert-html.md
csspath: patterns/alert/index.scss
jekyll: |
  {% include patterns/alert/alert.md content=page.alert %}

alert:
  title: This is an info alert
  content: Used as an example for giving information
  status: info
alert-warn:
  title: This is an warning alert
  content: Used as an example for giving warning
  status: warning
alert-error:
  title: This is an error alert
  content: Used as an example for showing an error
  status: error
alert-success:
  title: This is an success alert
  content: Used as an example for showing success
alert-slim:
  content: A slim alert doesn't use a title and has tighter padding.
  status: info
  slim: true
alert-noicon:
  content: We can also hide the icon in both slim and regular
  status: info
  slim: true
  noicon: true
---

{{ page.summary }}

## The Design
{% include patterns/alert/alert.md content=page.alert %}
{% include patterns/alert/alert.md content=page.alert-warn %}
{% include patterns/alert/alert.md content=page.alert-error %}
{% include patterns/alert/alert.md content=page.alert-success %}
---

### Variations
{% include patterns/alert/alert.md content=page.alert-slim %}
{% include patterns/alert/alert.md content=page.alert-noicon %}


## Theme Settings
- $theme-alert-bar-width - Width of the colored bar to the left of the alert.
- $theme-alert-font-family - Font family of the alert.
- $theme-alert-icon-size - Size of the alert icon.
- $theme-alert-padding-x - Padding on the left and right of the alert.
- $theme-alert-padding-y - Padding on the top and bottom of the alert.
- $theme-alert-text-color - Text color on light backgrounds. Default uses text color set in `$theme-text-color`.
- $theme-alert-link-color - Link color on light backgrounds. Default uses text color set in `$theme-text-color`.
- $theme-alert-text-reverse-color - Text color on dark backgrounds. Default uses reverse text color set in `$theme-text-reverse-color`.
- $theme-alert-link-reverse-color  - Link color on dark backgrounds. Default uses reverse link color set in `$theme-link-reverse-color`.
  
## Variations
- .usa-alert--info - Display an informational status alert.
- .usa-alert--warning - Display an warning status alert.
- .usa-alert--error - Display an error status alert.
- .usa-alert--success - Display an success status alert.
- .usa-alert--slim - Display a slimmer version of the alert.
- .usa-alert--no-icon - Display an alert without an icon.

## Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping

### Front matter example
{% highlight yml %}
alert-noicon:
  title: This is an info alert
  content: We can also hide the icon in both slim and regular
  status: info
  slim: false // just leave this line out if false
  noicon: true
{% endhighlight %}

### Add pattern to page
{% include patterns/alert/alert.md content=page.alert %}