{% if page.type == "prototype" %}
  {% assign nav = site.data.nav.foot %}
  {% assign type = "prototype" %}
{% elsif include.settings == "prototype" %}
  {% assign nav = site.data.nav.foot %}
  {% assign type = "prototype" %}
{% else %}
  {% assign nav = site.data.lib-nav.foot %}
{% endif %}

<footer class="usa-footer usa-footer--slim">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <div class="usa-footer__primary-container grid-row">
      <div class="mobile-lg:grid-col-8">
        <nav class="usa-footer__nav" aria-label="Footer navigation,">
          <ul class="grid-row grid-gap">
            {% for item in nav %}
            <li
              class="
                mobile-lg:grid-col-6
                desktop:grid-col-auto
                usa-footer__primary-content
              "
            >
              <a class="usa-footer__primary-link" href="{{ item.href }}"
                >{{ item.title }} </a
              >
            </li>
            {% endfor %}
          </ul>
        </nav>
      </div>
      <div class="mobile-lg:grid-col-4">
        <address class="usa-footer__address">
          <div class="grid-row grid-gap">
            <div
              class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto"
            >
            {% if type == "prototype" %}
              <div class="usa-footer__contact-info">
                <a href="tel:{{ site.data.settings.sitephone }}">{{ site.data.settings.sitephone }}</a>
              </div>
            {% endif %}
            </div>
            <div
              class="grid-col-auto mobile-lg:grid-col-12 desktop:grid-col-auto"
            >
            {% if type == "prototype" %}
              <div class="usa-footer__contact-info">
                <a href="mailto:{{ site.data.settings.siteemail }}">{{ site.data.settings.siteemail }}</a>
              </div>
            {% endif %}
            </div>
          </div>
        </address>
      </div>
    </div>
  </div>
  <div class="usa-footer__secondary-section">
    <div class="grid-container">
      <div class="usa-footer__logo grid-row grid-gap-2">
      {% if type == "prototype" %}
        <div class="grid-col-auto">
          <img class="usa-footer__logo-img" src="{{ site.data.settings.sitelogo-small }}" alt="" />
        </div>
        {% endif %}
        <div class="grid-col-auto">
          <p class="usa-footer__logo-heading">{{ site.data.settings.sitename }}</p>
        </div>
      </div>
    </div>
  </div>
</footer>