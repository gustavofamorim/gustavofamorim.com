---
layout: page
title: Meus Projetos
permalink: /projetos/
---

Abaixo estão alguns projetos que já fiz! Alguns pessoais por mera diversão, outros para conseguir algum trocado.

{% for item in site.data.projects %}

<div class="card">
  <div class="card-img" onClick="location.href='{{ item.href }}';">
    <img src="{{ item.img }}"/>
  </div>
  <p>{{ item.title }}</p>
</div>

{% endfor %}
