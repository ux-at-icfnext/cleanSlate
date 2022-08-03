
{% for tag in page.tags %}
    {% if tag.type == "big" %}
        <span class="usa-tag usa-tag--big">{{tag.text}}</span>
    {% else %}
        <span class="usa-tag">{{tag.text}}</span>
    {% endif %}
{% endfor %}
