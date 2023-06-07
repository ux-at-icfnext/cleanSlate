{% assign items=include.content %}
{% assign set=include.settings %}
{% if set.class %}
  {% assign class = set.class %}
{% endif %}
{% if set.segment %}
  {% assign seg = "usa-button-group--segmented" %}
{% endif %}
<ul class="usa-button-group {{ class }} {{ seg }}">
  {% for btn in items %}
  <li class="usa-button-group__item">
    <a href="{{ btn.link }}" class="usa-button {{ btn.class }}"
      {% if btn.disabled %} disabled="disabled" {% endif %}
      >{{ btn.text }}</a
    >
  </li>
  {% endfor %}
</ul>