
{% assign breadcrumbs = page.url | split: '/' %}
<nav class="usa-breadcrumb 
{% if page.breadcrumbWrapping == true %} 
  usa-breadcrumb--wrap 
{% endif %}" 
aria-label="Breadcrumbs,,">
  <ol class="usa-breadcrumb__list">
    <li class="usa-breadcrumb__list-item"> 
      <a href="/" class="usa-breadcrumb__link">
        <span>Home</span>
      </a>
    </li>
    {% for breadcrumb in breadcrumbs offset: 1  %}
      {% if forloop.last %}
        <li class="usa-breadcrumb__list-item" aria-current="page">
          <span>
            {{ breadcrumb | replace:'-',' ' | capitalize }}
          </span>
        </li>
      {% else %}
        <li class="usa-breadcrumb__list-item">
          {% assign breadcrumb_items = forloop.index | plus: 1 %}
          <a href="{% for breadcrumb in breadcrumbs limit: breadcrumb_items %}{{ breadcrumb | append: '/' }}{% endfor %}" 
            class="usa-breadcrumb__link">
              <span>{{ breadcrumb | replace:'-',' ' | capitalize }}</span>
          </a>
        </li>
      {% endif %}
    {% endfor %}
  </ol>
</nav>