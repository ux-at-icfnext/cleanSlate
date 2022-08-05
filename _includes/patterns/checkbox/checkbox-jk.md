
<form class="usa-form">
<fieldset class="usa-fieldset">
    <legend class="usa-legend">Select any {{page.topic | downcase}}</legend>
    {% assign category = page.topic | downcase | replace: ' ', '-' %}
    {% for item in page.checkbox %}
    {% assign value = item.title | downcase | replace: ' ', '-' %}
    <div class="usa-checkbox">
        <input
        class="usa-checkbox__input"
        id="check-{{value}}"
        type="checkbox"
        name="{{category}}"
        value="{{value}}"
        {% if item.disabled %}
            disabled="disabled"
        {% endif %}
        />
        <label class="usa-checkbox__label" for="check-{{value}}">
            {{item.title}}
        </label>
    </div>
    {% endfor %}
</fieldset>
</form>
