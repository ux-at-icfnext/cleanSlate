<div class="resource-group">
    <div class="publication-info grid-row grid-gap-lg">
      <div class="desktop:grid-col-4"> <img src="{{ page.thumbnail_url }}" alt="{{ page.thumbnail_description }}" /></div>
      <div class="resources-body desktop:grid-col-8">
          <p style="margin-bottom: 0.5rem;"><span class="pub-details">Series Title:</span> {{ page.series_title }}</p>
          <p><span class="pub-details">Author(s):</span> {{ page.author }}</p>
          <p><span class="pub-details">Year Published</span> {{ page.year_published }}</p>
          {% if page.download_file_size %}
            <span class="download">{%include patterns/button/button.md%}</span>
          {% else page.download_language %}
            <span class="download">{%include patterns/button/button.md%}</span>
          {% endif %}
          {% if page.order_online %}
            <span class="download">{%include patterns/button/button.md%}</span>
          {% endif %}
      </div>
    </div>
    <div class="body-content">
      <p>{{page.body | markdownify}}</p>
    </div>
</div>