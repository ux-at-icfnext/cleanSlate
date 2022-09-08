
<div class="usa-form-group">
  <label class="usa-label" id="appointment-time-label" for="appointment-time">
    {{page.timeLabel}}
  </label>
  <div class="usa-hint" id="appointment-time-hint">
    {{page.timeDescription}}
  </div>
  <div class="usa-time-picker">
    <input
      class="usa-input"
      id="appointment-time"
      name="appointment-time"
      aria-describedby="appointment-time-label appointment-time-hint"
    />
  </div>
</div>