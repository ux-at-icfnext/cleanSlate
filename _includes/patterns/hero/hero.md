
<section class="usa-hero"{% if page.hero.image %} style="background-image: url({{ page.hero.image }})"{% endif %} aria-label="Introduction">
  <div class="grid-container">
    <div class="usa-hero__callout">
      {% if page.hero.callout %}
      <h1 class="usa-hero__heading">
        {% if page.hero.callout.alt %}
        <span class="usa-hero__heading--alt">{{ page.hero.callout.alt }}</span>
        {% endif %}
        {{ page.hero.callout.text | default: page.hero.callout }}
      </h1>
      {% endif %}

      {{ page.hero.content | markdownify }}

      {% if page.hero.button %}
      <a class="usa-button"
        href="{{ page.hero.button.href | relative_url }}">
        {{ page.hero.button.text }}
      </a>
      {% endif %}
    </div>
  </div>
</section>
