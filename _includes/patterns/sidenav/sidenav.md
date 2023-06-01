<ul class="usa-sidenav">
  <li class="usa-sidenav__item">
    <a href="/{{ page.section }}">{{ page.section }}</a>
    {% for item in site.pages | sort: "title" %}
    {% if page.section == item.section %}
      <ul class="usa-sidenav__sublist">
          <li class="usa-sidenav__item class">
          {% if item.url == page.url %} 
            <a href="{{ item.permalink }}" class="usa-current">
          {% else %}
            <a href="{{ item.permalink }}">
          {% endif %}
              {{ item.title}}</a>
          </li>
        </ul>
      {% endif %}
    {% endfor %}
    </li>
  </li>
</ul>