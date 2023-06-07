{% assign items=include.content %}

<ul class="usa-button-group">
  {% for btn in items %}
  <li class="usa-button-group__item">
    <a href="{{ btn.link }}" class="usa-button {{ btn.class }}"
      >{{ btn.text }}</a
    >
  </li>
  {% endfor %}
</ul>