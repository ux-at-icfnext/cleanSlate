{% assign color = include.content %}

<style>
  .box {
    width: 20px;
    height: 20px;
  }
</style>


<table class="usa-table">
  <tr>
    <td>color</td>
    <td>theme setting</td>
    <td>token</td>
    <td>value</td>
  </tr>
  {% for c in color %}
  <tr>
    <td><div class="box" style="background-color: {{ c.value }}"></div></td>
    <td>$theme-{{ c.token }}</td>
    {% if c.short %}
      <td>{{ c.short }}</td>
    {% else %}
      <td>{{ c.token }}</td>
    {% endif %}
    <td>{{ c.value }}</td>
  </tr>
  {% endfor %}
</table>