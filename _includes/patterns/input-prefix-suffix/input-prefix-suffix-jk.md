
<form class="usa-form">
{% assign inputLabelType = page.inputLabelType | replace: ' ', '' | downcase %}
  <label class="usa-label" for="example-input-{{inputLabelType}}">{{page.inputLabel}}</label>
  <div class="usa-input-group">
    <div class="usa-input-{{inputLabelType}}" aria-hidden="true">
    {% if inputLabelType == "prefix" %}
      {% if page.inputLabelIcon %}
        <svg aria-hidden="true" role="img" focusable="false" class="usa-icon">
          <use xlink:href="/assets/img/sprite.svg#{{page.inputLabelIcon | replace: ' ', ''}}"></use>
        </svg>
      {% endif %}
      {% if page.inputLabelText %}
        <div class="usa-input-suffix" aria-hidden="true">{{page.inputLabelText}}</div>
      {% endif %}
    {% endif %}
    </div>
    <input
      id="example-input-{{inputLabelType}}"
      class="usa-input"
      pattern="[0-9]*"
      inputmode="numeric"
    />
      {% if inputLabelType == "suffix" %}
        {% if page.inputLabelIcon %}
          <svg aria-hidden="true" role="img" focusable="false" class="usa-icon">
            <use xlink:href="/assets/img/sprite.svg#{{page.inputLabelIcon | replace: ' ', ''}}"></use>
          </svg>
        {% endif %}
        {% if page.inputLabelText %}
          <div class="usa-input-suffix" aria-hidden="true">{{page.inputLabelText}}</div>
        {% endif %}
    {% endif %}
  </div>
</form>