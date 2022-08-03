
{% assign type = page.text-type | downcase %}
{% if type == "error" %}
     <label class="usa-label usa-label--error" for="input-error">
{% else %}
    <label class="usa-label usa-label--error" for="input-{{type | default: 'type-text'}}">
{% endif %}
        {{page.text-label}}
    </label>
    {% if page.text-message and type == "error" %}
        <span class="usa-error-message" id="input-error-message" role="alert">
            {{page.text-message }}
        </span>
    {% endif %}
{% if type == "error" %}
     <input
    class="usa-input usa-input--error"
    id="input-error"
    name="input-error"
    aria-describedby="input-error-message"
    />
{% elsif type == "success" or type == "focus" %}
     <input
    class="usa-input {{page.class}}"
    id="input-{{type | default: 'type-text'}}"
    name="input-{{type | default: 'type-text'}}"
    />
{% endif %}