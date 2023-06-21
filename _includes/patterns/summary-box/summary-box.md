{% assign items=include.content %}
{% assign set=include.settings %}

{% for item in items %}
<div
  class="usa-summary-box"
  role="region"
  aria-labelledby="summary-box-key-information"
>
  <div class="usa-summary-box__body">
    <h3 class="usa-summary-box__heading" id="summary-box-key-information">
      {{item.title}}
    </h3>
    <div class="usa-summary-box__text">
      <ul class="usa-list">
      {% for item in item.list %}
        <li>
          {{item.item}}
        </li>
      {% endfor %}
      </ul>
    </div>
  </div>
</div>
{% endfor %}