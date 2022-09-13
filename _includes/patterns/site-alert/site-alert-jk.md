
{% assign alertType =  page.siteAlertType | downcase | replace ' ' , '' %}
{% assign alertColor =  page.siteAlertColor | downcase | replace ' ' , '' %}
{% if alertType == "slim" or alertType == "no-icon" or alertType == "no-header"  %}
  <section class="usa-site-alert usa-site-alert--{{alertType}}  usa-site-alert--{{alertColor}}" aria-label="Site alert,">
{% else %}
    <section class="usa-site-alert usa-site-alert--{{alertColor}}" aria-label="Site alert,">
{% endif %}
    <div class="usa-alert">
      <div class="usa-alert__body">
      {% if alertType == "" or alertType == "list" %}
        <h3 class="usa-alert__heading">{{page.siteAlertTitle}}</h3>
      {% endif %}
      {% if alertType == "list" %}
        <ul class="usa-list">
          {% for item in page.siteAlertList %}
            <li>{{item.text}}</li>
          {% endfor %}
        </ul>
      {% else %}
        <p class="usa-alert__text">
        {% if alertType == "no-header" or alertType == "slim" or alertType == "no-icon" %}
          <span class= "bold">{{page.siteAlertTitle}}</span>
        {% endif %}
          {{page.siteAlertContent}}
        </p>
      {% endif %}
    </div>
  </div>
</section>
