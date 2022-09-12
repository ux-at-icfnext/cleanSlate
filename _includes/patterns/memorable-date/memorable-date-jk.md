
<fieldset class="usa-fieldset">
  <legend class="usa-legend">{{page.legend}}</legend>
  <span class="usa-hint" id="dobHint">{{page.hint}}</span>
  <div class="usa-memorable-date">
    <div class="usa-form-group usa-form-group--month">
      <label class="usa-label" for="date_of_birth_1">Month</label>
      <input
        class="usa-input"
        aria-describedby="dobHint"
        id="date_of_birth_1"
        name="date_of_birth_1"
        maxlength="2"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label class="usa-label" for="date_of_birth_2">Day</label>
      <input
        class="usa-input"
        aria-describedby="dobHint"
        id="date_of_birth_2"
        name="date_of_birth_2"
        maxlength="2"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label class="usa-label" for="date_of_birth_3">Year</label>
      <input
        class="usa-input"
        aria-describedby="dobHint"
        id="date_of_birth_3"
        name="date_of_birth_3"
        minlength="4"
        maxlength="4"
        pattern="[0-9]*"
        inputmode="numeric"
        value=""
      />
    </div>
  </div>
</fieldset>