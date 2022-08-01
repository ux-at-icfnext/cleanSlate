
<div class="grid-row grid-gap">
  <div class="{{collection.class | default: 'tablet:grid-col-6'}}">
    <h3 class="site-preview-heading">{{page.heading}}</h3>
    <ul class="usa-collection">
    {% for item in page.collection %}
      <li class="usa-collection__item">
        <div class="usa-collection__calendar-date">
        {% assign month = item.month | upcase %}
        {% assign day = item.day %}
        {% assign year = item.year %}
          <time datetime="{{year}}-{{month}}-{{dayS}}T{{item.time}}">
            <span class="usa-collection__calendar-date-month">{{month}}</span>
            <span class="usa-collection__calendar-date-day">{{day}}</span>
          </time>
        </div>
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
        </div>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>