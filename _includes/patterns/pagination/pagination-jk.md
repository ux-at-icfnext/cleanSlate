
{% assign url = page.url %}
{% assign currentPage = page.pagination-current %}
{% assign previousPage = page.pagination-current | minus: 1 %}
{% assign nextPage = page.pagination-current | plus: 1 %}
{% assign lastPage = page.pagination-pages %}
<nav aria-label="Pagination" class="usa-pagination">
  <ul class="usa-pagination__list">
  {% if currentPage != 1 %}
    <li class="usa-pagination__item usa-pagination__arrow">
      <a
        href="{{url}}{{previousPage}}"
        class="usa-pagination__link usa-pagination__previous-page"
        aria-label="Previous page"
        ><svg class="usa-icon" aria-hidden="true" role="img">
          <use xlink:href="/assets/img/sprite.svg#navigate_before"></use>
        </svg>
        <span class="usa-pagination__link-text">Previous</span></a
      >
    </li>
    {% endif %}
    {% if currentPage != 1 %}
    <li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="{{url}}"
        class="usa-pagination__button"
        aria-label="Page 1"
        >1</a
      >
    </li>
    {% endif %}
     {% if currentPage != 1 %}
    <li
      class="usa-pagination__item usa-pagination__overflow"
      role="presentation"
    >
      <span>…</span>
    </li>
    {% endif %}
    {% if currentPage != 1 %}
    <li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="{{url}}{{previousPage}}"
        class="usa-pagination__button"
        aria-label="Page {{previousPage}}"
        >{{previousPage}}</a
      >
    </li>
    {% endif %}
    <li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="{{url}}{{currentPage}}"
        class="usa-pagination__button usa-current"
        aria-label="Page {{currentPage}}"
        aria-current="page"
        >{{currentPage}}</a
      >
    </li>
     {% if currentPage != lastPage %}
    <li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="{{url}}{{nextPage}}"
        class="usa-pagination__button"
        aria-label="Page {{nextPage}}"
        >{{nextPage}}</a
      >
    </li>
    <li
      class="usa-pagination__item usa-pagination__overflow"
      role="presentation"
    >
      <span>…</span>
    </li>
    {% endif %}
    {% if page.bounded %}
     {% if currentPage != lastPage %}
    <li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="{{url}}{{lastPage}}"
        class="usa-pagination__button"
        aria-label="Last page, page {{lastPage}}"
        >{{lastPage}}</a
      >
    </li>
        {% endif %}
    {% endif %}
    {% if currentPage != lastPage %}
    <li class="usa-pagination__item usa-pagination__arrow">
      <a
        href="{{url}}{{nextPage}}"
        class="usa-pagination__link usa-pagination__next-page"
        aria-label="Next page"
        ><span class="usa-pagination__link-text">Next </span
        ><svg class="usa-icon" aria-hidden="true" role="img">
          <use xlink:href="/assets/img/sprite.svg#navigate_next"></use></svg
      ></a>
    </li>
    {% endif %}
  </ul>
</nav>