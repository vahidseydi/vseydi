---
layout: page
title: Students
permalink: "/students"
---
{% assign STUs = site.data.student %}
{% if STUs %}
<section class="resume-section" id="students">
    <div class="container">
        <div class="row" >
            <div class="col-sm-10">               
                <h2 style="text-align: center; margin-bottom:20px;">PhD Alumni</h2>
                <div id="testimonial-slider2" class="owl-carousel phD" >
                <!------------------------------------------------------------->                
                    {% for a in STUs.Phd %}                     
                    <div class="testimonial">
                        <div class="pic PhD">
                            <img src="/assets/img/student/{{a.pic}}" alt="">
                        </div>
                        <div class="testimonial-prof">
                            <p class="title">{{a.name}}</p>
                            <p class="date">{{a.date}}</p>
                        </div>
                        <p class="description">
                            {{a.Thesis}}
                        </p>                    
                    </div>
                    {% endfor %} 
                <!------------------------------------------------------------->
                </div>
                <div class="line" style="color:#ffffff;"></div>
                <h2 style="text-align: center; margin-bottom:20px;">M.Sc. Alumni</h2>
                <div id="testimonial-slider1" class=" owl-carousel Ms" >
                <!------------------------------------------------------------->                
                    {% for stu in STUs.Master %}    
                    <div class="testimonial">
                        <div class="pic Ms">
                            <img src="/assets/img/student/{{stu.pic}}" alt="">
                        </div>
                        <div class="testimonial-prof">
                            <p class="title">{{stu.name}}</p>
                            <p class="date">{{stu.date}}</p>
                        </div>
                        <p class="description">
                            {{stu.Thesis}}
                        </p>                    
                    </div>
                    {% endfor %} 
                <!------------------------------------------------------------->
                </div>
            </div>
        </div>
    </div>
</section>
{% endif %} 