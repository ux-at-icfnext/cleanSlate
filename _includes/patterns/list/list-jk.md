
{% if page.list-type == "ordered" %}
    <ol class="usa-list {{page.class}}">
        {% for content in page.list %}
            <li>{{content.item}}</li>
        {% endfor %}
    </ol>
{% else %}
    <ul class="usa-list {{page.class}}">
        {% for content in page.list %}
            <li>{{content.item}}</li>
        {% endfor %}
    </ul>
{% endif %}

