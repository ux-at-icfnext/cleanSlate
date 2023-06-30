{% assign items=include.content %}
{% assign set=include.settings %}

<div class="usa-accordion usa-tabs">
    {% for item in page.tabs.content %}
        <span class="usa-accordion__heading">
            <button
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="a{{forloop.index}}"
            >
                {{ item.title }}
            </button>
        </span>
        <div id="a{{forloop.index}}" class="usa-accordion__content usa-prose">
            {% if item.header %}
            <span>{{ item.header }}</span>
            {% endif %}
            <p>
                {{ item.tabContent }}
            </p>
        </div>
    {% endfor %}
</div>