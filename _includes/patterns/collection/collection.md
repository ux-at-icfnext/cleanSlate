{% assign items=include.content %}
{% assign set=include.settings %}

<ul class="usa-collection">
    {% for item in items %}
        <li class="usa-collection__item">
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
            <ul class="usa-collection__meta" aria-label="More information">
                <li class="usa-collection__meta-item">
                {{item.author}}
                </li>
                <li class="usa-collection__meta-item">
                <time datetime="2020-09-30T12:00:00+01:00">{{item.date}}</time>
                </li>
            </ul>
            <ul class="usa-collection__meta" aria-label="Topics">
                <li class="usa-collection__meta-item usa-tag usa-tag--new">New</li>
                <li class="usa-collection__meta-item usa-tag">PMA</li>
                <li class="usa-collection__meta-item usa-tag">OMB</li>
            </ul>
            </div>
        </li>
    {%endfor%}
</ul>