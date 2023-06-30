{% assign position = page.position | downcase | replace " " , "" %}
<div class=
"{% if page.utilityClass %}
    grid-row
{% endif %}
padding-8">
  <div class=
  "{% if page.utilityClass %}
    {{ page.utilityClass }}
  {% else %}
     margin-4
  {% endif %}">
    <button
      type="button"
      class="usa-button usa-tooltip"
      data-position="{{position}}"
      title="{{page.text}}"
      data-classes = "{{page.dataClasses}}">
        {{page.buttonText}}
    </button>
  </div>
</div>