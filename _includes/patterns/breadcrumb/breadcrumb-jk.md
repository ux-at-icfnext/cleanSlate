
{% assign crumbs = page.url | remove:'/index.html' | split: '/' %}
<nav class="usa-breadcrumb 
{% if page.breadcrumbWrapping == true %} 
  usa-breadcrumb--wrap 
{% endif %}" aria-label="Breadcrumbs,,">
  <ol class="usa-breadcrumb__list">
    <li class="usa-breadcrumb__list-item"> <a href="/"  class="usa-breadcrumb__link">Home</a></li>
    {% for crumb in crumbs offset: 1 %}
      {% if forloop.last %}
        <li class="usa-breadcrumb__list-item" aria-current="page"><span>{{ crumb | replace:'-',' ' | remove:'.html' | capitalize }}</span></li>
      {% else %}
        <li class="usa-breadcrumb__list-item"><a href="{% assign crumb_limit = forloop.index | plus: 1 %}{% for crumb in crumbs limit: crumb_limit %}{{ crumb | append: '/' }}{% endfor %}" class="usa-breadcrumb__link">{{ crumb | replace:'-',' ' | remove:'.html' | capitalize }} </a></li>
      {% endif %}
    {% endfor %}
  </ol>
</nav>