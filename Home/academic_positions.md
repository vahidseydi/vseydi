{% assign experiences = site.data.data.academic_positions %}
{% if experiences %}
<section class="resume-section" id="academic_positions">
<h2 style="text-align: center;">Academic Positions</h2>
<div class="container">
  <div class="row ">
    <ul class="edu_timeline">
      {% for experience in experiences %}
        <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
            <div class="timeline-arrow"></div>
            <span class=" text-gray" style="float:right;"><i class="fas fa-calendar" style="margin-right:1.5em"></i>   {{ experience.start }}-{{ experience.end }}</span>
            <h3 class="h3 mb-0" >{{ experience.job }}</h3>
            <h2 class="h5 mb-0" style="margin-top:1em;  color:black"><i class="fas fa-map-marker-alt" style="margin-right:1em"></i>{{ experience.loc }}</h2>           
            <p class="text-small mt-2 font-weight-light" > {{ experience.desc }}</p>
        </li>
      {% endfor %}     
    </ul><!-- End -->    
  </div>
</div>
</section>
{% endif %}

