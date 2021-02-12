{% assign CTs = site.data.data.teaching %}
{% if CTs %}
<section class="resume-section" id="teaching">
<h2 style="text-align: center; margin-bottom:20px;">Teaching</h2>
  <div class="container">
    <div class="row" > 
        {% for CT in CTs %}    
          <!---------------------------------------------------------------------------------->
          <div class="col-md-6 col-sm-6">
            <div class="serviceBox">
                <h3 class="title">{{CT.degree}}</h3>
                <a href="#" class="read-more  date" style="float:left">{{CT.start}}</a><a href="#"  class="read-more  date" style="float:right">{{CT.end}}</a>
                </br></br></br>
                {% for l in CT.courses %}
                    <p style="text-align:left; color:gray">{{l}}</p>
                {% endfor %}
                <h3 class="title"></h3>              
            </div>
          </div>
          <!---------------------------------------------------------------------------------->
        {% endfor %}
    </div>
  </div>
</section>
{% endif %}





