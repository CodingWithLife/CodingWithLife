import React from 'react';
import './Home.css'

const Home = () => {
return (
  <div class="page">
    <div class="body">
      <div id="featured">
         <center><h3>Stranger Friend</h3></center>
         <center>
           <h2>This site will allow stranges to become friends</h2>
          </center>
          <center>
            <h2>This will be based on archetypes</h2>
          </center>
      </div>
    <ul class="blog">
      <li>
        <div>
          <img alt='did not load' src={require('./pancho.gif')} />
          <h2>PANCHO</h2>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img alt='did not load' src={require('./mono.gif')} /></a>
        <h2>ERICK</h2>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img alt='did not load' src={require('./pete.gif')} /></a>
        <h2>ERIK</h2>
        </div>
      </li>
      <li>
        <div>
          <a href="blog.html"><img alt='did not load' src={require('./chimp.gif')} /></a>
        <h2>SIL</h2>
        </div>
      </li>
    </ul>
  </div>
    <div class="footer">
    </div>
</div>
  );
}


export default Home;
