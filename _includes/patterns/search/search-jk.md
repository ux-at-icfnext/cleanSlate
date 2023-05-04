{% assign search = include.content %}
{% if search.small == true %}
  {% assign class = "usa-search--small" %}
{% endif %}
{% if search.big == true %}
  {% assign class = "usa-search--big" %}
{% endif %}
<section aria-label="Search component">
  <form class="usa-search {{ class }}" role="search">
    <label class="usa-sr-only" for="search-field">{{ search.label | default: "Search"  }}</label>
    <input class="usa-input" id="search-field" type="search" name="search" placeholder="{{ search.placeholder }}" />
      <button class="usa-button" type="submit">
        {% if search.small != true %}<span class="usa-search__submit-text">{{ search.label | default: "Search"  }}</span
        >{% endif %}
        <img
          src="/assets/img/usa-icons-bg/search--white.svg"
          class="usa-search__submit-icon"
          alt="Search"
        />
      </button>
  </form>
</section>