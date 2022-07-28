
<form class="usa-form">
{% assign type = page.counter.type | downcase %}
  <div class="usa-character-count">
    <div class="usa-form-group">
      <label class="usa-label" for="with-hint-{{type}}">{{page.counter.title}}</label>
      <span id="with-hint-{{type}}-hint" class="usa-hint"
        >{{page.counter.desc}}</span
      >
      {% if type == "input" %}
        <input
        class="usa-{{page.counter.type}} usa-character-count__field"
        id="with-hint-input"
        maxlength="{{page.counter.count}}"
        name="with-hint-input"
        aria-describedby="with-hint-input-info with-hint-input-hint"
      />
      {% elsif type == "textarea" %}
        <textarea
        class="usa-textarea usa-character-count__field"
        id="with-hint-textarea"
        maxlength="{{page.counter.count}}"
        name="with-hint-textarea"
        rows="5"
        aria-describedby="with-hint-textarea-info with-hint-textarea-hint"
      ></textarea>
      {% endif %}
    </div>
    <span
      id="with-hint-{{type}}-info"
      class="usa-hint usa-character-count__message"
      aria-live="polite"
      >You can enter up to {{page.counter.count}} characters</span
    >
  </div>
</form>