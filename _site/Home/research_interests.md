{% assign interests = site.data.data.research_interests %}
{% if interests %}
<section class="resume-section" id="research_interests">
<h2 style="text-align: center; margin-bottom:20px;">Research Interests</h2>
  <div class="container">
    <div class="row">      
      {% for interest in interests %}
        <div class="col-md-3 col-sm-6">
          <div class="serviceBox">
            <img src="/assets/img/{{interest.image}}" alt="">
            <h3 class="title"></h3>
            <a href="#" class="read-more Model">Model</a><a href="#" class="read-more Application">Application</a>
            <h3 class="title"></h3>
            {% for model in interest.models %}
              <a href="#" class="read-more Model">{{model}}</a>   
            {% endfor %}
            <h3 class="title"></h3>
            {% for app in interest.applications %}
              <a href="#" class="read-more Application">{{app}}</a>    
            {% endfor %}               
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
  {% endif %}

