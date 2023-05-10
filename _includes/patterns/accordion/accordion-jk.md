
{% assign items=include.content %}
{% assign set=include.settings %}
{% if set.bordered %}
    {% assign border="usa-accordion--bordered" %}
{% endif %}
{% if set.multiselect %}
    {% assign select="usa-accordion--multiselectable" %}
    {% assign selected="data-allow-multiple" %}
{% endif %}
<div class="usa-accordion {{border}} {{select}}" {{ selected }}>
    {% for item in items %}
        <span class="usa-accordion__heading">
            <button
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="{{ set.ref | default: 'a' }}{{forloop.index}}"
            >
                {{ item.title }}
            </button>
        </span>
        <div id="{{ set.ref | default: 'a' }}{{forloop.index}}" class="usa-accordion__content usa-prose">
            {% if item.header %} 
            <h2> {{ item.header }}</h2>
            {% endif %}
            <p>
                {{ item.content | markdownify }}
            </p>
        </div>
    {% endfor %}
</div>