{% assign items=include.content %}
{% assign set=include.settings %}

<ul class="usa-collection">
    {%for item in items%}
        <li class="usa-collection__item">
            <div class="usa-collection__calendar-date">
            <time datetime="{{item.datetime}}"
                ><span class="usa-collection__calendar-date-month">{{item.calendar_month}}</span>
                <span class="usa-collection__calendar-date-day">{{item.calendar_day}}</span></time
            >
            </div>
            <div class="usa-collection__body">
            <h3 class="usa-collection__heading">
                <a
                class="usa-link"
                href="https://trumpadministration.archives.performance.gov/presidents-winners-press-release/"
                >{{item.title}}</a
                >
            </h3>
            <p class="usa-collection__description">
                {{item.description}}
            </p>
            </div>
        </li>
    {%endfor%}
</ul>