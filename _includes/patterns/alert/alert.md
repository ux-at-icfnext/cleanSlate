{% assign alert = include.content %}

{% if alert.status == "info" %}
  {% assign status = "usa-alert--info" %}
{% elsif alert.status == "warning" %}
  {% assign status = "usa-alert--warning" %}
{% elsif alert.status == "error" %}
  {% assign status = "usa-alert--error" %}
{% else %}
    {% assign status = "usa-alert--success" %}
{% endif %}

{% if alert.slim %}
  {% assign slim="usa-alert--slim" %}
{% endif %}

{% if alert.noicon %}
  {% assign icon="usa-alert--no-icon" %}
{% endif %}

<div class="usa-alert {{ status }} {{ slim }} {{ icon }}">
  <div class="usa-alert__body">
    {% if alert.title %}
    <h4 class="usa-alert__heading">{{ alert.title }}</h4>
    {% endif %}
    <p class="usa-alert__text">
      {{ alert.content }}
    </p>
  </div>
</div>