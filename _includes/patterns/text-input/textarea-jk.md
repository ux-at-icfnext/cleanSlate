
{% assign type = page.text-type | downcase %}
{% if type == "error" %}
   <label class="usa-label usa-label--error" for="input-error">
{% else %}
    <label class="usa-label" for="input-{{type | default: 'type-textarea'}}">
{% endif %}
        {{page.text-label}}
    </label>
    {% if page.text-message and type == "error" %}
        <span class="usa-error-message" id="textarea-error-message" role="alert">
            {{page.text-message }}
        </span>
    {% endif %}
    {% if type == "error" %}
         <textarea
        class="usa-textarea usa-input--error"
        id="input-error"
        name="input-error">
        </textarea>
    {% elsif type == "success" or type == "focus" %}
         <textarea
        class="usa-textarea {{page.class}}"
        id="input-{{type | default: 'type-textarea'}}"
        name="input-{{type | default: 'type-textarea'}}">
        </textarea>
    {% endif %}
   