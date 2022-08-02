
<section aria-label="Search component">
{% if page.search-type == "big" %}
  <form class="usa-search usa-search--big" role="search">
{% elsif page.search-type == "small" %}
<form class="usa-search usa-search--small" role="search">
{% else %}
<form class="usa-search" role="search">
{% endif %}
    <label class="usa-sr-only" for="search-field">{{page.search}}</label>
    <input class="usa-input" id="search-field" type="search" name="search" />
    <button class="usa-button" type="submit">
    {% if page.search-type != "small" %}
      <span class="usa-search__submit-text">{{page.search}}</span>
    {% endif %}
      <img
        src="/assets/img/usa-icons-bg/search--white.svg"
        class="usa-search__submit-icon"
        alt="Search"
      />
    </button>
  </form>
</section>