
<ul class="usa-card-group">
  {% for card in page.cards %}
    <li class="usa-card tablet:grid-col-4">
      <div class="usa-card__container">
        <div class="usa-card__header">
          <h2 class="usa-card__heading">{{card.title}}</h2>
        </div>
        <div class="usa-card__media usa-card__media--inset">
          <div class="usa-card__img">
            <img
              src="{{card.img}}"
              alt="{{card.alt}}"
            />
          </div>
        </div>
        <div class="usa-card__body">
          <p>
            {{card.content}}
          </p>
        </div>
        <div class="usa-card__footer">
          <button class="usa-button">{{card.button}}</button>
        </div>
    </div>
  </li>
{% endfor %}
</ul>