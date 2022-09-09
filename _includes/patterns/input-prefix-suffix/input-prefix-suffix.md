
<form class="usa-form">
  <label class="usa-label" for="example-input-prefix">Credit card number</label>
  <div class="usa-input-group">
    <div class="usa-input-prefix" aria-hidden="true">
      <svg aria-hidden="true" role="img" focusable="false" class="usa-icon">
        <use xlink:href="/assets/img/sprite.svg#credit_card"></use>
      </svg>
    </div>
    <input
      id="example-input-prefix"
      class="usa-input"
      pattern="[0-9]*"
      inputmode="numeric"
    />
  </div>
   <label class="usa-label" for="example-input-suffix">Weight, in pounds</label>
  <div class="usa-input-group usa-input-group--sm">
    <input
      id="example-input-suffix"
      class="usa-input"
      pattern="[0-9]*"
      inputmode="numeric"
    />
    <div class="usa-input-suffix" aria-hidden="true">lbs.</div>
  </div>
</form>