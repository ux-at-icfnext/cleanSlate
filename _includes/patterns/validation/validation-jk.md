
<form class="usa-form">
  <fieldset class="usa-fieldset">
    <legend class="usa-legend usa-legend--large">{{page.legend}}</legend>
    <div class="usa-alert usa-alert--info usa-alert--validation">
      <div class="usa-alert__body">
        <h3 class="usa-alert__heading">{{page.validationTitle}}</h3>
        <ul class="usa-checklist" id="validate-code">
        {% for data in page.checklist %}
          <li
            class="usa-checklist__item 
            {% if data.checked == true %}
              usa-checklist__item--checked
            {% endif %}"
            data-validator="{{data.validator | downcase | replace: ' ', '' }}"
          >
            {{data.text}}
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <label class="usa-label" for="code">{{page.validationFieldText}}</label>
    <input
      class="usa-input"
      id="code"
      name="code"
      aria-describedby="validate-code"
      data-validate-uppercase="[A-Z]"
      data-validate-numerical="\d"
      data-validation-element="#validate-code"
    />
    <input class="usa-button" type="submit" value="{{page.buttonText}}" />
  </fieldset>
</form>