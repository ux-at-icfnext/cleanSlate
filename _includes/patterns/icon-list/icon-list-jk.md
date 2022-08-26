
{% assign size = page.iconListSize | downcase | replace: " ", "" %}
<div class="grid-row grid-gap">
  <div class="tablet:grid-col">
    <h3 class="site-preview-heading border-top-1px border-base-light padding-top-1 margin-top-0">{{page.sectionTitle}}</h3>
    <p>{{page.sectionDescription}}</p>
    <ul class="usa-icon-list
    {% if size == 'small' %}
    usa-icon-list--size-sm
    {% elsif size == 'medium' %}
    usa-icon-list--size-md
    {% elsif size == 'large' %}
    usa-icon-list--size-lg
    {% endif %}">
    {% for item in page.iconList%}
    {% assign type = item.iconType | downcase | replace: " ", "" %}
      <li class="usa-icon-list__item">
      {% if type == "green-circle-check" %}
        <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
          </svg>
        </div>
        {% elsif type == "red-circle-cancel"%}
        <div class="usa-icon-list__icon text-red">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/img/sprite.svg#cancel"></use>
          </svg>
        </div>
        {% elsif type == "thumbs-up"%}
          <div class="usa-icon-list__icon">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="/assets/img/sprite.svg#thumb_up_alt"></use>
            </svg>
          </div>
        {% elsif type == "circle-check" %}
          <div class="usa-icon-list__icon text-ink">
            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="/assets/img/sprite.svg#check_circle"></use>
            </svg>
          </div>
        {% elsif type == "money" %}
         <div class="usa-icon-list__icon text-green">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/img/sprite.svg#attach_money"></use>
          </svg>
        </div>
        {% elsif type == "help" %}
         <div class="usa-icon-list__icon text-blue">
          <svg class="usa-icon" aria-hidden="true" role="img">
            <use xlink:href="/assets/img/sprite.svg#help"></use>
          </svg>
        </div>
        {% endif %}
        <div class="usa-icon-list__content">
        {% if item.title && item.content %}
          <h3 class="usa-icon-list__title">{{item.title}}</h3>
           <p class="{% if item.bold %}
           text-bold
           {% endif %}">{{item.content}}</p>
          {% else %}
          {{item.content}}
          {% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
  