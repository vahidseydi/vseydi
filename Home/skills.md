{% assign skills = site.data.data.skills %}
{% if skills %}
<section class="resume-section" id="skills">
<h2 style="text-align: center; margin-bottom:20px;">Skills</h2>
  <div class="container">
    <div class="row">      
          <!---------------------------------------------------------------------------------->
          <div class="col-md-4 col-sm-3">
            <div class="serviceBox">
              <img src="/assets/img/Programing.PNG" alt="">
              <h3 class="title"></h3>            
              {% for l in skills.Programming_Languages %}
                <a href="#" class="read-more  sub_skill" >{{l}}</a>   
              {% endfor %}
              <p class = "description">{{skills.Python_Stack}}</p>
              <h3 class="title"></h3>              
            </div>
          </div>
          <!---------------------------------------------------------------------------------->   
          <div class="col-md-4 col-sm-3">       
            <div class="serviceBox">
              <img src="/assets/img/others.PNG" alt="">
              <h3 class="title"></h3>
              {% for l in skills.Others %}
                <a href="#" class="read-more  sub_skill">{{l}}</a>   
              {% endfor %}
              <p class = "description">&shy</p>
              <h3 class="title"></h3>                         
            </div>
          </div>
          <!---------------------------------------------------------------------------------->
          <div class="col-md-4 col-sm-3">
            <div class="serviceBox">
              <img src="/assets/img/Writing.PNG" alt="">
              <h3 class="title"></h3>
              {% for l in skills.Writing %}
                <a href="#" class="read-more  sub_skill">{{l}}</a>   
              {% endfor %}
              <p class = "description">&shy</p>
              <p class = "description">&shy</p>
              <h3 class="title"></h3>                      
            </div>
          </div>
          <!---------------------------------------------------------------------------------->
    </div>
  </div>
</section>
{% endif %}

