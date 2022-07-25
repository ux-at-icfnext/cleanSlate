
<div class="usa-overlay"></div>
<header class="usa-header usa-header--basic">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo" id="-logo">
        <em class="usa-logo__text"><a href="/" title="Home">{{site.data.config.sitetitle}}</a></em>
      </div>
      <button class="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav">
      <button class="usa-nav__close">
        <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
      </button>
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <button
            class="usa-accordion__button usa-nav__link usa-current"
            aria-expanded="false"
            aria-controls="basic-nav-section-one"
          >
            <span>&lt;Current section&gt;</span>
          </button>
          <ul id="basic-nav-section-one" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href="{{page.url}}"><span>{{page.title}}</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{page.url}}"><span>{{page.title}}</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{page.url}}"><span>{{page.title}}</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{page.url}}"><span>{{page.title}}</span></a>
            </li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <button
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-nav-section-two"
          >
            <span>&lt;Section&gt;</span>
          </button>
          <ul id="basic-nav-section-two" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item">
              <a href="{{page.url}}"><span>{{page.title}}</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{page.url}}"><span>{{page.title}}</span></a>
            </li>
            <li class="usa-nav__submenu-item">
              <a href="{{page.url}}"><span>{{page.title}}</span></a>
            </li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <a href="{{page.url}}" class="usa-nav-link"><span>{{page.title}}</span></a>
        </li>
      </ul>
      <section aria-label="Search component">
        <form class="usa-search usa-search--small" role="search">
          <label class="usa-sr-only" for="search-field">Search</label>
          <input
            class="usa-input"
            id="search-field"
            type="search"
            name="search"
          />
          <button class="usa-button" type="submit">
            <img
              src="/assets/img/usa-icons-bg/search--white.svg"
              class="usa-search__submit-icon"
              alt="Search"
            />
          </button>
        </form>
      </section>
    </nav>
  </div>
</header>