
<form class="usa-form">
  <label class="usa-label" for="options">{{page.dropdown-title}}</label>
  <select class="usa-select" name="options" id="options">
    <option value>{{page.dropdown-default}}</option>
    {% for item in page.list %}
      {% assign value = item.value %}
        <option value="{{value | downcase | replace: ' ', '-' }}">{{value}}</option>
    {% endfor %}
  </select>
</form>