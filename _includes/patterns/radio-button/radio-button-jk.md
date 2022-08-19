
<form class="usa-form">
    <fieldset class="usa-fieldset">
    <legend class="usa-legend">Select any {{page.topic | downcase}}</legend>
    {% assign category = page.topic | downcase | replace: ' ', '-' %}
    {% for item in page.radio %}
    {% assign value = item.title | downcase | replace: ' ', '-' %}
    <div class="usa-radio">
        <input
         {% if item.description %}
            class="usa-radio__input usa-radio__input--tile"
        {% else %}
            class="usa-radio__input"
        {% endif %}
        id="radio-{{value}}"
        type="radio"
        name="{{category}}"
        value="{{value}}"
        {% if item.disabled %}
            disabled="disabled"
        {% endif %}
        />
        <label class="usa-radio__label" for="radio-{{value}}">
            {{item.title}}
            {% if item.description %}
                <span class="usa-checkbox__label-description">
                    {{item.description}}
                </span>
            {% endif %}
        </label>
    </div>
    {% endfor %}
    </fieldset>
</form>
