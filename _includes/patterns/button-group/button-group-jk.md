
{% if page.inverse %}
    <div class="bg-base-darkest padding-1" style="max-width: fit-content">
        <ul class="usa-button-group {% if page.segmented %}usa-button-group--segmented {% endif %}">
        {% for button in page.buttons %}
            {% if button.style == "inverse" %}
            <li class="usa-button-group__item">
                <a href="{{button.url}}"><button
                type="button"
                class="usa-button usa-button--outline usa-button--inverse">
                    {{button.text}}
                </button></a>
            </li>
            {% endif %}
        {% endfor %}
        </ul>
    </div>
{% else %}
<ul class="usa-button-group {% if page.segmented %} usa-button-group--segmented {% endif %}">
    {% for button in page.buttons %}
        <li class="usa-button-group__item">
        {% if button.style == "base" %}
            <a href="{{button.url}}"><button type="button" class="usa-button">{{button.text}}</button></a>
        {% elsif button.style == "accent-cool" %}
            <a href="{{button.url}}"><button type="button" class="usa-button usa-button--accent-cool">{{button.text}}</button></a>
        {% elsif button.style == "accent-warm" %}
            <a href="{{button.url}}"><button type="button" class="usa-button usa-button--accent-warm">{{button.text}}</button></a>
        {% elsif button.style == "gray" %}
            <a href="{{button.url}}"><button type="button" class="usa-button usa-button--base">{{button.text}}</button></a>
        {% elsif button.style == "big" %}
            <a href="{{button.url}}"><button type="button" class="usa-button usa-button--big">{{button.text}}</button></a>
        {% elsif button.style == "outline" %}
            <a href="{{button.url}}"><button type="button" class="usa-button usa-button--outline">{{button.text}}</button></a>
        {% elsif button.style == "secondary" %}
            <a href="{{button.url}}"><button type="button" class="usa-button usa-button--secondary">{{button.text}}</button></a>
        {% endif %}
        </li>
    {% endfor %}
</ul>
{% endif %}


