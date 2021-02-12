{% assign Educations = site.data.data.education %}
{% if Educations %}
<section class="resume-section" id="education" >
    <h2 style="text-align: center;">Education</h2>
    <div class="container">
        <div class="row ">
            <ul class="edu_timeline">
                {% for edu in Educations %}
                <li class="timeline-item bg-white rounded ml-3 p-4 shadow">
                    <div class="timeline-arrow"></div>
                    <span class=" text-gray" style="float:right;"><i class="fas fa-calendar" style="margin-right:1.5em"></i>   {{ edu.start }}-{{ edu.end }}</span>
                    <div class="subheading mb-3"></div>
                    <h3 class="h3 mb-0" ><i class="fas fa-user-graduate" style="margin-right:0.5em"></i>{{edu.degree}}</h3>
                    {% if edu.loc %}
                    <h2 class="h5 mb-0" style="margin-top:1em;  color:black"><i class="fas fa-map-marker-alt" style="margin-right:1.2em"></i>{{edu.loc}}</h2>           
                    {% endif %}
                    <p class="text-small mt-2 font-weight-light"><i class="fas fa-book-open" style="margin-right:1em"></i> {{edu.Thesis}}</p>
                    {% if edu.Mentors %}
                    <div style="color: cadetblue;"><i class="fas fa-glasses" style="margin-right:1.4em"></i>{{edu.Mentors}}</div>
                    {% endif %}
                    {% if edu.GPA %}
                     <p>GPA:  <button style="color:white; background: rgb(136, 3, 30); border: none;  border-radius: 10px; margin-top: 10px;"> {{edu.GPA}}</button></p>
                    {% endif %}
                    <div style="margin-top:10px;">Concentrations:</div><p>{{edu.Concentrations}}</p>
                </li>
                {% endfor %}     
            </ul><!-- End -->    
        </div>
    </div>
</section>
{% endif %}




