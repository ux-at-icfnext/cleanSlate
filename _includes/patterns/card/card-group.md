{% assign headings=include.headings %}
{% assign set=include.settings %}
{% assign items=include.content %}

{% if set.grid_class %}
    {% assign grid=set.grid_class %}
{% endif %}
{% if set.group_class %}
    {% assign class=set.group_class %}
{% endif %}
{% if set.grid_special %}
    {% assign grid-special=set.grid_special %}
{% endif %}
{% if set.class_special %}
    {% assign class-special=set.class_special %}
{% endif %}

<div class="grid-container">
  {% if headings.title %}
  <div class="card-group_header"> 
    <h2>{{ headings.title }}</h2>
    {% if headings.link %}
      <div class="card-group_link">
        <a href="{{ headings.link }}">{{ headings.link_text }}</a>
      </div>
    {% endif %}
  </div>
  {% endif %}
  
  <ul class="usa-card-group"> 

    {% if set.special %}
      <!-- show the first item with a different look -->
      {% for card in items limit: 1 %}
        <li class="usa-card {{ grid-special | default:'tablet:grid-col-4'}}">
          <div class="{{ class-special | default: 'usa-card__container' }}">
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
              <ul class="usa-button-group">
                {% for btn in card.btn %}
                <li class="usa-button-group__item">
                  <a href="{{ btn.link }}" class="usa-button {{ btn.class }}"
                    >{{ btn.text }}</a
                  >
                </li>
                {% endfor %}
              </ul>
            </div>
            {% endif %}
        </div>
      </li>
      {% endfor %}
      
      <!-- then show the others -->
      {% for card in items offset: 1 %}
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

    {% else %}
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
          {% if card.link %}
          <!-- need to update with button group -->
            <div class="usa-card__footer">
              <a href="{{ card.link }}" class="usa-button">{{ card.link_text }}</a>
            </div>
          {% endif %}
      </div>
    </li>
    {% endfor %}
    {% endif %}
  </ul>

</div>