
{% assign list = page.breadcrumbs %}
<nav class="usa-breadcrumb 
{% if page.breadcrumbWrapping == true %} 
  usa-breadcrumb--wrap 
{% endif %}" aria-label="Breadcrumbs,,">
  <ol class="usa-breadcrumb__list">
  {% for item in list %}
    <li class="usa-breadcrumb__list-item 
    {% if item.current %} 
      usa-current"
      aria-current="page"
    {% else %}
      "
    {% endif %}>
    {% if item.current %}
     <span>{{item.text}}</span>
    </li>
    {% else %}
    <a href="{{item.link}}" class="usa-breadcrumb__link"><span>{{item.text}}</span></a>
    {% endif %}
    </li>
    {% endfor %}
  </ol>
</nav>