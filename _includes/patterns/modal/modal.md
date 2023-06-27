<div class="margin-y-3">
  <a
    href="#example-modal-1"
    class="usa-button"
    aria-controls="example-modal-1"
    data-open-modal
    >{{page.modal-button}}</a
  >
  <div
    class="usa-modal"
    id="example-modal-1"
    aria-labelledby="modal-1-heading"
    aria-describedby="modal-1-description"
  >
    <div class="usa-modal__content">
      <div class="usa-modal__main">
        <h2 class="usa-modal__heading" id="modal-1-heading">
          {{page.modal-heading}}
        </h2>
        <div class="usa-prose">
          <p id="modal-1-description">
            {{page.modal-desc}}
          </p>
        </div>
        <div class="usa-modal__footer">
          <ul class="usa-button-group">
            <li class="usa-button-group__item">
              <button type="button" class="usa-button" data-close-modal>
                {{page.modal-primary-button}}
              </button>
            </li>
            <li class="usa-button-group__item">
              <button
                type="button"
                class="usa-button usa-button--unstyled padding-105 text-center"
                data-close-modal
              >
                {{page.modal-secondary-button}}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        class="usa-button usa-modal__close"
        aria-label="Close this window"
        data-close-modal
      >
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
          <use xlink:href="/assets/img/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
  </div>
</div>