
{% for file in page.files %}
{% assign id = file.id | downcase | replace: " ", "-" %}
  <div class="usa-form-group 
    {% if file.error %}
      usa-form-group--error 
    {% endif %}">
    <label class="usa-label 
      {% if file.error %} 
        usa-label--error 
      {% endif %}" 
      for="{{id}}">
        {{file.label}}
    </label>
    {% if file.desc %}
      <span class="usa-hint" id="{{id}}">{{file.desc}}</span>
    {% endif %}
    {% if file.error %}
      <span class="usa-error-message" id="{{id}}">{{file.error-message}}</span>
    {% endif %}
    <input
    id="{{id}}"
    class="usa-file-input"
    type="file"
    name="{{id}}"
    {% if file.upload == "multi" %}
      multiple="multiple"
    {% endif %}
    {% if file.disabled %}
      disabled="disabled"
    {% endif %}
    {% if file.type %}
      accept="{{file.type}}"
    {% endif %}
    />
  </div>
{% endfor %}