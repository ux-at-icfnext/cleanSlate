
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-6">
    <ul class="usa-collection">
    {% for item in page.collection %}
      <li class="usa-collection__item">
        <div class="usa-collection__calendar-date">
          <time datetime="{{item.year}}-{{item.month}}-{{item.day}}T12:00:00+01:00">
            <span class="usa-collection__calendar-date-month">   
            {% case item.month %}
              {% when 1 %}
              Jan
            {% when 2 %}
              Feb
            {% when 3 %}
              Mar
            {% when 4 %}
              Apr
            {% when 5 %}
              May
            {% when 6 %}
              June
            {% when 7 %}
              July
            {% when 8 %}
              Aug
            {% when 9 %}
              Sept
            {% when 10 %}
              Oct
            {% when 11 %}
              Nov
            {% when 12 %}
              Dec
            {% endcase %}</span>
            <span class="usa-collection__calendar-date-day">{{item.day}}</span>
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