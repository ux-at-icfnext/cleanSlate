
<div class="usa-date-range-picker">
  <div class="usa-form-group">
    <label class="usa-label" id="event-date-start-label" for="event-date-start"
      >{{page.startLabel}}</label
    >
    <div class="usa-hint" id="event-date-start-hint">{{page.startDateDescription}}</div>
    <div class="usa-date-picker">
      <input
        class="usa-input"
        id="event-date-start"
        name="event-date-start"
        aria-labelledby="event-date-start-label"
        aria-describedby="event-date-start-hint"
      />
    </div>
  </div>
  <div class="usa-form-group">
    <label class="usa-label" id="event-date-end-label" for="event-date-end"
      >{{page.endLabel}}</label
    >
    <div class="usa-hint" id="event-date-end-hint">{{page.endDateDescription}}</div>
    <div class="usa-date-picker">
      <input
        class="usa-input"
        id="event-date-end"
        name="event-date-end"
        aria-labelledby="event-date-end-label"
        aria-describedby="event-date-end-hint"
      />
    </div>
  </div>
</div>