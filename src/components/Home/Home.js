import { Link } from "react-router-dom"

export const Home = ()=>{
    return (
        <div className="wrapper row2">
  <div id="container" className="clear">
 
    <section id="slider"><Link to="/"><img src="images/demo/960x360.gif" alt=""/></Link></section>
    
      <section id="intro" className="last clear">
        <article>
          <figure><img src="images/demo/450x250.gif" width="450" height="250" alt=""/>
            <figcaption>
              <h2>Top Rated Drawing</h2>
              <p>This is a W3C compliant free website template from <a href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a>. For full terms of use of this template please read our <a href="https://www.os-templates.com/template-terms">website template licence</a>.</p>
              <p>You can use and modify the template for both personal and commercial use. You must keep all copyright information and credit links in the template and associated files. For more HTML5 templates visit <a href="https://www.os-templates.com/">free website templates</a>.</p>
              <footer className="more"><a href="/">Read More &raquo;</a></footer>
            </figcaption>
          </figure>
        </article>
      </section>
      
    </div>
    </div>
    )
}