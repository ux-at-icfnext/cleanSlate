{% assign items=include.content %}
{% assign set=include.settings %}

<fieldset class="usa-fieldset">
  <legend class="usa-legend usa-legend">{{page.legend}}</legend>
  {% for item in items %}
    <div class="usa-radio">
        <input
        class="usa-radio__input"
        id="{{item.id}}"
        type="radio"
        name="{{item.name}}"
        value="{{item.value}}"
        checked="checked"
        />
        <label class="usa-radio__label" for="{{item.id}}"
        >{{item.value}}</label
        >
    </div>
  {% endfor %}
</fieldset>