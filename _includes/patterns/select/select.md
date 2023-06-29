{% assign items=include.content %}
{% assign set=include.settings %}

<form class="usa-form">
  <label class="usa-label" for="options">{{page.dropdown-label}}</label>
  <select class="usa-select" name="options" id="options">
  {% for item in items %}
    <option value="{{item.value}}">{{item.option}}</option>
  {% endfor %}
  </select>
</form>