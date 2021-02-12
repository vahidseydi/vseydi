{% assign Awards = site.data.data.awards %}
{% if Awards %}
<section class="resume-section" id="awards">
  <h2 style="text-align: center;">Awards</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="skill-timeline">
        {% for aw in Awards %}
          <div class="timeline">
            <a  class="timeline-content">
              <div class="timeline-icon">                              
                  <i class="fa fa-trophy"></i>
              </div>
              <span class="timeline-year">{{ aw.date }}</span>
              <h3 class="title">{{ aw.award }}</h3>
              <h3 class="loc"><i>{{ aw.loc }}</i></h3>
              <p class="description">{{ aw.desc }}</p>
            </a>
          </div>
        {% endfor %}                  
        </div>
      </div>
    </div>
  </div>    
</section>
{% endif %}




