{% if page.type == "prototype" %}
  {% assign nav = site.data.nav.nav %}
{% elsif include.settings == "prototype" %}
  {% assign nav = site.data.nav.nav %}
{% else %}
  {% assign nav = site.data.lib-nav.nav %}
{% endif %}

<header class="usa-header usa-header--basic">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo" id="-logo">
        <em class="usa-logo__text"><a href="/" title="Home">
        {% if site.data.settings.sitelogo %}
        <img src="{{site.data.settings.sitelogo}}" />
        {% else %}
        {{ site.data.settings.sitename }}
        {% endif %} </a></em>
      </div>
      <button type="button" class="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav">
      <button type="button" class="usa-nav__close">
        <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
      </button>
      <ul class="usa-nav__primary usa-accordion">
      {% for item in nav %}
        <li class="usa-nav__primary-item">
        {% if item.subnav %}
          {% if page.section == item.title or page.title == item.title %}
          <button
            type="button"
            class="usa-accordion__button usa-nav__link usa-current"
            aria-expanded="false"
            aria-controls="basic-nav-section-one"
            onclick="window.location.href='{{ item.href }}';"
          >
          {% else %}
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-one"
            onclick="window.location.href='{{ item.href }}';"
          >
          {% endif %}
            <a href="{{ item.href }}"><span>{{ item.title }}</span></a>
          </button>
          <ul id="basic-nav-section-one" class="usa-nav__submenu">
            {% for sub in item.subnav %}
            <li class="usa-nav__submenu-item">
              <a href="{{ sub.href }}"><span>{{ sub.title }}</span></a>
            </li>
            {% endfor %}
          </ul>
          {% else %}
            {% if page.section == item.title or page.title == item.title %}
            <a href="{{ item.href}}" class="usa-current">{{ item.title }}</a>
            {% else %}
            <a href="{{ item.href}}">{{ item.title }}</a>
            {% endif %}
          {% endif %}
        </li>
        {% endfor %}
      </ul>
      {% include patterns/search/search.md %}
    </nav>
  </div>
</header>