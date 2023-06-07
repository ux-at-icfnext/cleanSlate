---
layout: right
title: Buttons
permalink: /styles/button
section: Styles # initial cap required to make menu work
summary: |
  A button draws attention to important actions with a large selectable surface.

default:
  - link: "/"
    text: default
  - link: "/"
    text: hover
    class: usa-button--hover
  - link: "/"
    text: active
    class: usa-button--active
  - link: "/"
    text: focus
    class: usa-focus
  - link: "/"
    text: disabled
    class: usa-button--disabled
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

secondary:
  - link: "/"
    text: default
    class: usa-button--secondary
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--secondary
  - link: "/"
    text: active
    class: usa-button--active usa-button--secondary
  - link: "/"
    text: focus
    class: usa-focus usa-button--secondary
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--secondary
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

accent-cool:
  - link: "/"
    text: default
    class: usa-button--accent-cool
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--accent-cool
  - link: "/"
    text: active
    class: usa-button--active usa-button--accent-cool
  - link: "/"
    text: focus
    class: usa-focus usa-button--accent-cool
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--accent-cool
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

accent-warm:
  - link: "/"
    text: default
    class: usa-button--accent-warm
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--accent-warm
  - link: "/"
    text: active
    class: usa-button--active usa-button--accent-warm
  - link: "/"
    text: focus
    class: usa-focus usa-button--accent-warm
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--accent-warm
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

base:
  - link: "/"
    text: default
    class: usa-button--base
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--base
  - link: "/"
    text: active
    class: usa-button--active usa-button--base
  - link: "/"
    text: focus
    class: usa-focus usa-button--base
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--base
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

outline:
  - link: "/"
    text: default
    class: usa-button--outline
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--outline
  - link: "/"
    text: active
    class: usa-button--active usa-button--outline
  - link: "/"
    text: focus
    class: usa-focus usa-button--outline
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--outline
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled

inverse:
  - link: "/"
    text: default
    class: usa-button--outline usa-button--inverse
  - link: "/"
    text: hover
    class: usa-button--hover usa-button--outline usa-button--inverse
  - link: "/"
    text: active
    class: usa-button--active usa-button--outline usa-button--inverse
  - link: "/"
    text: focus
    class: usa-focus usa-button--outline usa-button--inverse
  - link: "/"
    text: disabled
    class: usa-button--disabled usa-button--outline usa-button--inverse
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled usa-button--outline usa-button--inverse

big:
  - link: "/"
    text: default
    class: usa-button--big
  - link: "/"
    text: disabled
    class: usa-button--big
    disabled: true
  - link: "/"
    text: unstyled
    class: usa-button--unstyled usa-button--big

btn-group:
  set:
    segment: true
  btn:
    - link: "/"
      text: don't click me
      class: usa-button--outline
    - link: "/"
      text: click me

htmlpath: patterns/button/button-html.md
csspath: patterns/button/index.scss

jekyll: "{% include patterns/button/button.md content=page.btn %}"
jekyll2: "{% include patterns/button/button.md content=page.btn-group.btn settings=page.btn-group.set %}"
---

## Button Styles
**Default**
{% include patterns/button/button.md content=page.default %}

**Secondary**
{% include patterns/button/button.md content=page.secondary %}

**Accent Cool**
{% include patterns/button/button.md content=page.accent-cool %}

**Accent Warm**
{% include patterns/button/button.md content=page.accent-warm %}

**Base**
{% include patterns/button/button.md content=page.base %}

**Outline**
{% include patterns/button/button.md content=page.outline %}

**Outline Inverse**
<div class="bg-base-darkest padding-1" style="max-width: fit-content">
{% include patterns/button/button.md content=page.inverse %}
</div>

**Big Buttons**
{% include patterns/button/button.md content=page.big %}

## Theme Settings
- $theme-button-font-family  - Font family of the button.
- $theme-button-border-radius  - Button border radius for rounded corners.
- $theme-button-small-width  - Width of small buttons. Used to define the size of the header search button and small language selector button.
- $theme-button-stroke-width  - Stroke width of **outline** button variants.

### Variations
- .usa-button--secondary - Button uses **secondary** color.
- .usa-button--accent-cool - Button uses **accent-cool** color.
- .usa-button--accent-warm - Button uses **accent-warm** color.
- .usa-button--base - Button uses **base** color.
- .usa-button--outline - Transparent button with a color stroke.
- .usa-button--inverse - Light color button for dark backgrounds.
- .usa-button--big - A bigger button.
- .usa-button--unstyled - A button that looks like a link.



## Button Group
THe button group makes it easy to put multiple buttons together. There are two options for the grouping. The default grouping creates a small margin between the buttons. The segmented button group has no space between the buttons. This is done by adding `usa-button-group--segmented` class to the `<ul>`.

**Default**
{% include patterns/button/button.md content=page.btn-group.btn %}
**Segmented**
{% include patterns/button/button.md content=page.btn-group.btn settings=page.btn-group.set %}

### Code Examples
{% include partials/code-accordion.md %}

## Library & Prototyping
In most cases, you can just add the html for a button where you need it. However, the button group pattern makes it easy to add multiple buttons and should be used with two or more buttons. **IMPORTANT** the button group pattern is using links not buttons, please keep that in mind if using with forms.

To implement a button group into the page you first need to create the content and settings. This can be done through the front matter.

### Settings
Settings are optional parameters that can be added to control styling and to set a reference. The reference is needed for using multiple groups if accordions on a page.

| setting | value |
| segment | true/false (defaults to false)|
| class | allows adding a custom class to the `ul` elements.
{: .usa-table }

### Content

| name | description | required |
| link | url link to destination | <i class="fa-solid fa-check"></i> |
| text | button label | <i class="fa-solid fa-check"></i> |
| class |  add any styling classes to your button | <i class="fa-solid fa-check"></i>  |
{: .usa-table }

### Front matter example
{% highlight yaml %}
  btn:
    - link: "/"
      text: don't click me
      class: usa-button--outline
    - link: "/"
      text: click me
{% endhighlight %}

**Using settings**
{% highlight yaml %}
  btn-group:
    set:
      segment: true
      class: my-cool-class
    btn:
      - link: "/"
        text: don't click me
        class: usa-button--outline
      - link: "/"
        text: click me
{% endhighlight %}

### Add pattern to page
{% highlight liguid %}
  {{ page.jekyll }}
{% endhighlight %}


**Using settings**
{% highlight liguid %}
  {{ page.jekyll2 }}
{% endhighlight %}