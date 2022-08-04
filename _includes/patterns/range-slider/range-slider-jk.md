
<form class="usa-form">
  <label class="usa-label" for="usa-range">{{page.label}}</label>
  <input
    id="usa-range"
    class="usa-range"
    type="range"
    min="{{page.min}}"
    max="{{page.max}}"
    step="{{page.step}}"
    value="{{page.value}}"
    aria-valuemin="{{page.min}}"
    aria-valuemax="{{page.max}}"
    aria-valuenow="{{page.value}}"
    role="slider"
  />
</form>