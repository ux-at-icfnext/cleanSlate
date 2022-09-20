
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-6">
    <ul class="usa-collection usa-collection--condensed">
    {% for item in page.collection %}
      <li class="usa-collection__item">
        <div class="usa-collection__body">
          <h3 class="usa-collection__heading">
            <a
            class="usa-link"
            href="{{item.link}}">
              {{item.title}}
            </a>
          </h3>
          <ul class="usa-collection__meta" aria-label="More information">
            <li class="usa-collection__meta-item position-relative">
              <svg
              class="usa-icon position-relative bottom-neg-2px"
              aria-hidden="true"
              role="img">
                <use xlink:href="{{item.icon-url | default: '/assets/img/sprite.svg#public' }}"></use>
              </svg>
              {{item.description}}
            </li>
          </ul>
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>