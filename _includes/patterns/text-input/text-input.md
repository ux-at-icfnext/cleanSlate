{% assign items=include.content %}
{% assign set=include.settings %}

<label class="usa-label" for="input-type-text">{{page.input-label}}</label>
<input class="usa-input" id="input-type-text" name="input-type-text" />
<label class="usa-label" for="input-type-textarea">{{page.area-label}}</label>
<textarea
  class="usa-textarea"
  id="input-type-textarea"
  name="input-type-textarea"
></textarea>