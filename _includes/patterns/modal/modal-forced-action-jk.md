
  <div class="{{page.modal-class | default:'margin-y-3'}}">
  <a
    href="#example-modal"
    class="usa-button"
    aria-controls="example-modal"
    data-open-modal>
    {{page.modal}}
    </a>
  <div
    class="usa-modal {{page.modal-type}}"
    id="example-modal"
    aria-labelledby="modal-heading"
    aria-describedby="modal-description"
    data-force-action>
    <div class="usa-modal__content">
      <div class="usa-modal__main">
        <h2 class="usa-modal__heading" id="modal-heading">
          {{page.modal-title}}
        </h2>
        <div class="usa-prose">
          <p id="modal-description">
            {{page.modal-description}}
          </p>
        </div>
        <div class="usa-modal__footer">
          <ul class="usa-button-group">
            <li class="usa-button-group__item">
              <button type="button" class="usa-button" data-close-modal>
                {{page.modal-button}}
              </button>
            </li>
            <li class="usa-button-group__item">
              <button
                type="button"
                class="usa-button usa-button--unstyled padding-105 text-center"
                data-close-modal>
                    {{page.modal-link}}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>