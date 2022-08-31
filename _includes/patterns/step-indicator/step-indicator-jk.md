
{% assign counterType = page.stepIndicatorCounter | downcase | replace " ", "" %}
<div class="usa-step-indicator
{% if page.stepIndicatorCenter %}
usa-step-indicator--center
{% endif %}
{% if counterType == 'small' %}
usa-step-indicator--counters-sm
{% elsif counterType == 'default' %}
usa-step-indicator--counters
{% endif %}" aria-label="progress">
  <ol class="usa-step-indicator__segments">
   {% for item in page.stepIndicators %}
    <li class="usa-step-indicator__segment
     {% if item.status == 'completed' %} 
        usa-step-indicator__segment--complete
      {% elsif item.status == 'current'%}
        usa-step-indicator__segment--current
      {% endif %}">
      <span class="usa-step-indicator__segment-label">
        {{item.label}}
        {% if item.status == 'completed' %} 
             <span class="usa-sr-only">completed</span>
      {% elsif !item.status  %}
         <span class="usa-sr-only">not completed</span>
      {% endif %}
      </span>
    </li>
    {% endfor %}
  </ol>
  <div class="usa-step-indicator__header">
    <h4 class="usa-step-indicator__heading">
      <span class="usa-step-indicator__heading-counter">
        <span class="usa-sr-only">Step</span>
        <span class="usa-step-indicator__current-step">{{page.stepIndicatorCurrentStep}}</span>
        <span class="usa-step-indicator__total-steps">of {{page.stepIndicatorTotalSteps}}</span> 
        </span>
        <span class="usa-step-indicator__heading-text">
          {{page.stepIndicatorTitle}}
        </span>
    </h4>
  </div>
</div>