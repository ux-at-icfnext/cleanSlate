
<div class="usa-accordion usa-accordion--multiselectable" data-allow-multiple>
{% for item in page.accordion %}
    <h4 class="usa-accordion__heading">
        <button
            class="usa-accordion__button"
            aria-expanded="false"
            aria-controls="m-a{{forloop.index}}"
            >
            {{item.title}}
        </button>
    </h4>
    <div id="m-a{{forloop.index}}" class="usa-accordion__content usa-prose">
        <p>
            {{item.content}}
        </p>
    </div>
  {% endfor %}
</div>