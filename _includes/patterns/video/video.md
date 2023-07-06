<div class="resource-group">
  <div class="resource-media grid-row grid-gap-lg">
    <div class="desktop:grid-col-6" style="width: 50%;">
      <iframe width="100%" height="300px" src="{{ page.resource.episode_link }}" title="{{ page.resource.episode_name}}" frameborder="no" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
    <div class="desktop:grid-col-6" style="width: 50%;">
      <iframe width="100%" height="300px" src="{{ page.resource.ada_episode_link }}" title="{{ page.resource.episode_name}}" frameborder="no" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
    </div>
  </div>
  <div class="resource-info">
    Transcript: <a href="{{ page.resource.transcript.url }}">{{ page.resource.episode_name}}</a> [PDF, 4kb] | Audio Description:  <a href="{{page.resource.transcript.url}}">{{ page.resource.episode_name}}</a> [PDF, 5kb]
  </div>
</div>