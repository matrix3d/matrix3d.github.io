---
layout: page
title: Hello World!
tagline: Supporting tagline
arr: [a, b]
---
{% include JB/setup %}


"posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% for a in arr %}
	a
{% endfor %}



