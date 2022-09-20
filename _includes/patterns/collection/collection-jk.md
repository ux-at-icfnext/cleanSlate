
<div class="grid-row grid-gap">
  <div class="tablet:grid-col-6">
    <ul class="usa-collection">
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
                <p class="usa-collection__description">
                    {{item.description}}
                </p>
                <ul class="usa-collection__meta" aria-label="More information">
                    <li class="usa-collection__meta-item">
                        {{item.details}}
                    </li>
                    <li class="usa-collection__meta-item">
                        <time datetime="{{item.year}}-{{item-month}}-{{item.day}}T12:00:00+01:00">  
                        {% case item.month %}
                        {% when 1 %}
                            January
                        {% when 2 %}
                            February
                        {% when 3 %}
                            March
                        {% when 4 %}
                            April
                        {% when 5 %}
                            May
                        {% when 6 %}
                            June
                        {% when 7 %}
                            July
                        {% when 8 %}
                            August
                        {% when 9 %}
                            September
                        {% when 10 %}
                            October
                        {% when 11 %}
                            November
                        {% when 12 %}
                            December
                        {% endcase %} {{item.day}}, {{item.year}}</time>
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