{% assign section = page.title | capitalize %}


<ul class="usa-card-group">
  {% for item in site.pages | sort: "title" %}
  {% assign sec = item.section | capitalize %}
  {% if section == sec  %}
  <li class="usa-card {{ grid | default:'tablet:grid-col-4'}}">
      <div class="{{ class | default: 'usa-card__container' }}">
        <div class="usa-card__header">
          <h2 class="usa-card__heading"><a href="{{ item.url }}"> {{ item.title }} </a></h2>
        </div>
        <div class="usa-card__body">{{ item.summary | strip_html }}</div>
      </div> 
  </li>
  {% endif %}
  {% endfor %}
</ul>

