---
layout: page
title: publications
permalink: "/publications"
clr_accepted: 1127f5
---

{% assign papers = site.data.publications.publications %}
{% if papers %}

<div class="row" >
<div class="col-md-2" style = "text-align:center">            
        <a href="https://scholar.google.com/citations?hl=en&user=L2z7NuwAAAAJ"><i class="ai ai-google-scholar-square ai-3x"></i></a>    
    </div>
    <div class="col-md-4" >            
        <span class="legend" id = "article">Journal paper</span> 
    </div>     
    <div class="col-md-4">            
        <span class="legend" id = "inproceedings" >Conference paper</span> 
    </div>        
</div>
      
<div class="main-timeline">
     {% for p in papers %}
    <div class="timeline">
        <a href="{{p.link}}" class="timeline-content">
            <span class="year" id = "{{p.type}}">{{p.year}}</span>
            <h3 class="title">{{p.title}}</h3>
            <p class = "status">{{p.statuse}}</p>
            <p class="author">{{p.author}}</p>
            <i class="booktitle">{{p.booktitle}}{{p.journal}}</i>
            
            
        </a>           
    </div>
    {% endfor %}    
</div>

{% endif %}



  

