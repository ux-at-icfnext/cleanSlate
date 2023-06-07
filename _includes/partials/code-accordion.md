
<div class="usa-accordion">
    <span class="usa-accordion__heading">
        <button
        class="usa-accordion__button"
        aria-expanded="false"
        aria-controls="z99"
        >
            HTML
        </button>
    </span>
    <div id="z99" class="usa-accordion__content usa-prose">
        {% highlight html %}
         
         {% include {{ page.htmlpath | liquify }} %}
        {% endhighlight %}
    </div>
    <span class="usa-accordion__heading">
        <button
        class="usa-accordion__button"
        aria-expanded="false"
        aria-controls="z98"
        >
            CSS
        </button>
    </span>
    <div id="z98" class="usa-accordion__content usa-prose">
        {% highlight css %}
         {% include {{ page.csspath | liquify }} %}
        {% endhighlight %}
    </div>
</div>
