
{% assign title = page.summary-title %}
{% assign list = page.summary-list %}
<div
  class="usa-summary-box"
  role="region"
  aria-labelledby="summary-box-key-information"
>
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="summary-box-key-information">
      {{title}}
    </h3>
    <div class="usa-summary-box__text">
      <ul class="usa-list">
      {% for item in list %}
        <li>
          {{item.text}}
          <a class="usa-summary-box__link" href="{{item.link}}">{{item.linkText}}</a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>