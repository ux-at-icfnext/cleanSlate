{% assign items=include.content %}
{% assign set=include.settings %}

{% if set.grid_class %}
    {% assign grid=set.grid_class %}
{% endif %}
{% if set.group_class %}
    {% assign class=set.group_class %}
{% endif %}

<ul class="usa-card-group"> 
  {% for card in items %}
    <li class="usa-card {{ grid | default:'tablet:grid-col-4'}}">
      <div class="{{ class | default: 'usa-card__container' }}">
        {% if card.title %}
        <div class="usa-card__header">
          <h2 class="usa-card__heading">{{card.title}}</h2>
        </div>
        {% endif %}
        {% if card.media %}
            <div class="usa-card__media">
                <div class="usa-card__img">
                <img
                    src="{{card.media}}"
                />
                </div>
            </div>
        {% endif %}
        {% if card.content %}
          <div class="usa-card__body">
            <p>
              {{ card.content }}
            </p>
          </div>
        {% endif %}
        {% if card.btn %}
          <div class="usa-card__footer">
            {% include patterns/button/button.md content=card.btn%}
          </div>
        {% endif %}
    </div>
  </li>
  {% endfor %}
</ul>