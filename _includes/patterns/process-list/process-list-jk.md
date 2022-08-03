
<ol class="usa-process-list">
    {% for item in page.list %}
        <li class="{{page.li-class | default: 'usa-process-list__item'}}">
            <h4 class="{{page.h4-class | default: 'usa-process-list__heading'}}">{{item.title}}</h4>
            {% if item.content %}
                <p class="{{page.paragraph-class | default: 'margin-top-05'}}">
                    {{item.content}}
                </p>
            {% endif %}
            {% if item.detail-list %}
                <ul>
                    {% for li in item.detail-list %}
                        <li>
                            {{li.text}}
                        </li>
                    {% endfor %}
                </ul>
            {% endif %}
        </li>
  {% endfor %}
</ol>
