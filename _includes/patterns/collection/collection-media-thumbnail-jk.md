
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-6">
    <h3 class="site-preview-heading tablet:margin-top-0">{{page.heading}}</h3>
    <ul class="usa-collection">
    {% for item in page.collection %}
      <li class="usa-collection__item">
        <img
        class="usa-collection__img"
        src="{{item.img}}"
        alt="{{item.alt}}"
        />
        <div class="usa-collection__body">
          <h3 class="usa-collection__heading">
            <a
            class="usa-link"
            href="{{item.link}}">
              {{item.title}}
            </a>
          </h3>
          <p class="usa-collection__description">
            {{item.description}}
          </p>
          <ul class="usa-collection__meta" aria-label="More information">
            <li class="usa-collection__meta-item">
              {{item.details}}
            </li>
            <li class="usa-collection__meta-item">
              <time datetime="2020-09-30T12:00:00+01:00">September 30, 2020</time>
            </li>
          </ul>
          <ul class="usa-collection__meta" aria-label="Topics">
          {% if item.new-tag %}
            <li class="usa-collection__meta-item usa-tag usa-tag--new">New</li>
          {% endif %}
          {% for tag in item.tags %}
            <li class="usa-collection__meta-item usa-tag">{{tag}}</li>
          {% endfor %}
          </ul>
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>