
{% assign category = page.category | downcase | replace: " ", "-" %}
<label class="usa-label" for="{{category}}">{{page.label}}</label>
<div class="usa-combo-box">
  <select class="usa-select" name="{{category}}" id="{{category}}">
    <option value>{{page.label}}</option>
    {% for item in page.list %}
      {% assign value = item.value %}
      <option value="{{value | downcase}}">{{value}}</option>
    {% endfor %}
  </select>
</div>