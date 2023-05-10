{% if page.type == "prototype" %}
  {% assign nav = site.data.nav.foot %}
  {% assign type = "prototype" %}
{% elsif include.settings == "prototype" %}
  {% assign nav = site.data.nav.foot %}
  {% assign type = "prototype" %}
{% else %}
  {% assign nav = site.data.lib-nav.foot %}
{% endif %}
<footer class="usa-footer usa-footer--big">
  <div class="grid-container usa-footer__return-to-top">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="tablet:grid-col-8">
        {% if type == "prototype" %}
          <nav class="usa-footer__nav" aria-label="Footer navigation,,">
            <div class="grid-row grid-gap-4">
            {% for item in nav %}
              <div class="mobile-lg:grid-col-6 desktop:grid-col-3">
                <section class="usa-footer__primary-content usa-footer__primary-content--collapsible">
                  <h4 class="usa-footer__primary-link">{{ item.title }}</h4>
                  <ul class="usa-list usa-list--unstyled">
                    {% for sub in item.subnav%}
                    <li class="usa-footer__secondary-link">
                      <a href="{{ sub.href }}">{{ sub.title }}</a>
                    </li>
                    {% endfor %}
                  </ul>
                </section>
              </div>
            {% endfor %}
            </div>
          </nav>
          {% else %}
          <nav class="usa-footer__nav" aria-label="Footer navigation">
            <ul class="grid-row grid-gap">
              {% for item in nav %}
                <li  class="mobile-lg:grid-col-6 desktop:grid-col-auto usa-footer__primary-content ">
                  <a class="usa-footer__primary-link" href="{{ item.href }}">{{ item.title }} </a>
                </li>
              {% endfor %}
            </ul>
          </nav>
        {% endif %}
        </div>
        <div class="tablet:grid-col-4">
          <div class="usa-sign-up">
          {% if type == "prototype" %}
            <h3 class="usa-sign-up__heading">Sign up</h3>
            <form class="usa-form">
              <label class="usa-label" for="email" id=""
                >Your email address</label
              >
              <input class="usa-input" id="email" name="email" type="email" />
              <button class="usa-button" type="submit">Sign up</button>
            </form>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
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
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/facebook.svg"
                  alt="Facebook"
              /></a>
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/twitter.svg"
                  alt="Twitter"
              /></a>
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/youtube.svg"
                  alt="YouTube"
              /></a>
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/instagram.svg"
                  alt="Instagram"
              /></a>
            </div>
            <div class="grid-col-auto">
              <a class="usa-social-link" href="javascript:void(0);"
                ><img
                  class="usa-social-link__icon"
                  src="/assets/img/usa-icons/rss_feed.svg"
                  alt="RSS"
              /></a>
            </div>
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