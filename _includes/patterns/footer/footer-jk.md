{% if page.type == "prototype" %}
  {% assign nav = site.data.nav.foot %}
  {% assign soc = site.data.nav.social %}
  {% assign type = "prototype" %}
{% elsif include.settings == "prototype" %}
  {% assign nav = site.data.nav.foot %}
  {% assign soc = site.data.nav.social %}
  {% assign type = "prototype" %}
{% else %}
  {% assign nav = site.data.lib-nav.foot %}
{% endif %}
<footer class="usa-footer">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <nav class="usa-footer__nav" aria-label="Footer navigation">
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
  <div class="usa-footer__secondary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div
          class="
            usa-footer__logo
            grid-row
            mobile-lg:grid-col-6 mobile-lg:grid-gap-2
          "
        >
          {% if type == "prototype" %}
          <div class="mobile-lg:grid-col-auto">
            <img class="usa-footer__logo-img" src="{{ site.data.settings.sitelogo-small }}" alt="" />
          </div>
          {% endif %}
          <div class="mobile-lg:grid-col-auto">
            <p class="usa-footer__logo-heading">{{ site.data.settings.sitename }}</p>
          </div>
        </div>
        <div class="usa-footer__contact-links mobile-lg:grid-col-6">
        {% if type != "prototype" %}<p>© 2022 ICF - All Rights Reserved</p>{% endif %}
        {% if type == "prototype" %}
          <div class="usa-footer__social-links grid-row grid-gap-1">
          {% for s in soc %}
            <div class="grid-col-auto">
              <a class="usa-social-link" href="{{ s.link }}"
                ><img
                  class="usa-social-link__icon"
                  src="{{ s.icon }}"
                  alt="{{ s.alt }}"
              /></a>
            </div>
            {% endfor %}
          </div>
          <p class="usa-footer__contact-heading">
            {{ site.data.settings.agencycontent }}
          </p>
          <address class="usa-footer__address">
            <div class="usa-footer__contact-info grid-row grid-gap">
              <div class="grid-col-auto">
                <a href="tel:{{ site.data.settings.sitephone }}">{{ site.data.settings.sitephone }}</a>
              </div>
              <div class="grid-col-auto">
                <a href="mailto:{{ site.data.settings.siteemail }}">{{ site.data.settings.siteemail }}</a>
              </div>
            </div>
          </address>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
</footer>