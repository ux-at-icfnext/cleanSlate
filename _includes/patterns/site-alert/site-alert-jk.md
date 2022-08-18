
{% if page.alert-type == "slim" or page.alert-type == "no-icon" or page.alert-type == "no-header"  %}
  <section class="usa-site-alert usa-site-alert--{{page.alert-type}}  usa-site-alert--{{page.alert-color | downcase}}" aria-label="Site alert,">
{% else %}
    <section class="usa-site-alert usa-site-alert--{{page.alert-color | downcase}}" aria-label="Site alert,">
{% endif %}
    <div class="usa-alert">
      <div class="usa-alert__body">
      {% if page.alert-type == "" or page.alert-type == "list" %}
        <h3 class="usa-alert__heading">{{page.alert-title}}</h3>
      {% endif %}
      {% if page.alert-type == "list" %}
        <ul class="usa-list">
          {% for item in page.alert-list %}
            <li>{{item.text}} <a class="usa-link" href="{{item.link}}">{{item.linkText}}</a></li>
          {% endfor %}
        </ul>
      {% else %}
        <p class="usa-alert__text">
        {% if page.alert-type == "no-header" or page.alert-type == "slim" or page.alert-type == "no-icon" %}
          <span class= "bold">{{page.alert-title}}</span>
        {% endif %}
          {{page.alert-content}}
          <a class="usa-link" href="{{page.alert-link}}">{{page.alert-linkText}}</a>.
        </p>
      {% endif %}
    </div>
  </div>
</section>
