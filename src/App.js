import './App.css';

function App() {
   
  return (
    <div className="App">
          <>
  {/* <div id="arrow">
    <i className="fa fa-arrow-up" aria-hidden="true" />
  </div>
  <header id="home">
    <div className="container">
      <div className="top-bar">
        <div className="nav-col">
          <div className="logo">
            <img src="images/logo.png" className="img-responsive" alt="logo" />
          </div>
          
          <div className="menu">
            <a className="active" href="#home">
              Home
            </a>
            <a href="#why-choose-us">About US</a>
            <a href="#expand">Services</a>
            <a href="#project">Project</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="clear" />
         
        </div>
        
        <div className="cnt-info-col">
          <a href="tel:7652000000">
            <span>Call US:</span>7652000000
          </a>
        </div>
        <div className="clear" />
        
      </div>
      
    </div>
  </header>
  <section id="mobile-menu">
    <div className="container-mobile">
      <div className="mobile-logo">
        <img src="images/logo.png" className="img-responsive" alt="logo" />
        <div className="clear" />
       
      </div>
     
      <div className="cnt-info-col">
        <button type="button" id="toggle-bar">
          <i className="fa fa-bars" />
        </button>
      </div>
      <div className="clear" />
      
    </div>
  </section>
  <div className="menu">
    <a className="active" href="#home">
      Home
    </a>
    <a href="#why-choose-us">About US</a>
    <a href="#expand">Services</a>
    <a href="#project">Project</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact Us</a>
    <a href="tel:7652000000">7652000000</a>
  </div> */}
  <section className="header-bg-parent">
    <div className="header-col1">
      <h5>WELCOME</h5>
      <h2>Digital Products</h2>
      <h2
        className="typewrite"
        data-period={1000}
        data-type='[ "for Business", "to sell online", "for your ideas"]'>
      for your Business
        </h2>
      
      <p>
      EMPOWERING BUSINESS
THROUGH TECHNOLOGY
AND DIGITAL
PLATFORMS

      </p>
      <button className="common-btn" type="button">
      <a href="https://varshservices.com/contact" style={{"color":"white", "textDecoration":"none","fontWeight":"bold","fontSize":"15px"}}>
      CONTACT TODAY
      </a>

      </button>
    </div>
    {/*header-col1*/}
    <div className="header-col2"></div>
    {/*header-col2*/}
    <div className="clear" />
    {/*clear*/}
    <img
      className="hedaer-bg-par-img"
      src="images/corner-img.png"
      alt="corner"
    />
  </section>
  {/*header-bg-parent*/}
  <section id="feature-sec">
    <div className="text-center">
      <h5 className="common-h5">CARE FEATURES</h5>
      <h2 className="common-h2">Provide Awesome Service With Our Tools</h2>
    </div>
    {/*text-center*/}
    <section className="faeture-col-par">
      <div className="container">
        <div className="feature-col">
          <h3>Ad Campaigns</h3>
          <img
            src="images/home-faeture-img/service_img1.png"
            className="img-responsive"
            alt="service"
          />
          <h4>Running ad campaigns &nbsp;&nbsp;&nbsp; Analysing the market.</h4>
          {/*                </div>feature-col*/}
        </div>
        {/*feature-col*/}
        <div className="feature-col">
          <h3>Advanced SEO</h3>
          <img
            src="images/home-faeture-img/service_img2.png"
            className="img-responsive"
            alt="service"
          />
          <h4>Ranking your website on search results organically</h4>
          {/*                </div>feature-col*/}
        </div>
        {/*feature-col*/}
        <div className="feature-col">
          <h3>Social media management</h3>
          <img
            src="images/home-faeture-img/service_img3.png"
            className="img-responsive"
            alt="service"
          />
          <h4>Creating or handling all your social media accounts</h4>
          {/*                </div>feature-col*/}
        </div>
        {/*feature-col*/}
        <div className="feature-col">
          <h3>Website Maintenance</h3>
          <img
            src="images/home-faeture-img/service_img4.png"
            className="img-responsive"
            alt="service"
          />
          <h4>Uploading content or removing Regular maintanance</h4>
          {/*                </div>feature-col*/}
        </div>
        {/*feature-col*/}
        <div className="clear" />
      </div>
    </section>
    <section id="why-choose-us">
      <div className="container">
        <div className="why-choose-col">
          <h5 className="common-h5">WHY CHOOSE US</h5>
          <h2 className="common-h2">Boosts Your Website Traffic!</h2>
          <p>
            We are passionate about our work. Our designers stay ahead of the
            curve to provide engaging and user-friendly website designs to make
            your business stand out. Our developers are committed to maintaining
            the highest web standards so that your site will withstand the test
            of time. We care about your business, which is why we work with you.
          </p>
          {/* <button className="common-btn" type="button">
            DISCOVER MORE
          </button> */}
        </div>
        <div className="count-col">
          <div className="stat">
            <div className="count-sub-col">
              <div className="milestone-counter">
                <span className="stat-count highlight">500</span>
                <div className="milestone-details">Happy Customers</div>
              </div>
              {/*milestone-counter*/}
            </div>
            {/*count-sub-col*/}
            <div className="count-sub-col">
              <div className="milestone-counter">
                <span className="stat-count highlight">100</span>
                <div className="milestone-details">Team Members</div>
              </div>
              {/*milestone-counter*/}
            </div>
            {/*count-sub-col*/}
            <div className="count-sub-col">
              <div className="milestone-counter">
                <span className="stat-count highlight">30</span>
                <div className="milestone-details">Awards Win</div>
              </div>
              {/*milestone-counter*/}
            </div>
            {/*count-sub-col*/}
          </div>
          {/*stat*/}
          <div className="stat-info-par">
            <div className="stat-info-sub-par">
              <div className="stat-info-div">
                <p>
                “In the world of Internet Customer Service, it’s important to remember your competitor is only one mouse click away.” – <b> Doug Warner</b>
                </p>
              </div>
              {/*stat-info-div*/}
            </div>
            {/*stat-info-sub-par*/}
            <div className="stat-info-sub-par">
              <div className="stat-info-div">
                <p>
                “Google only loves you when everyone else loves you first.” – <b> Wendy Piersall</b>
                </p>
              </div>
              {/*stat-info-div*/}
            </div>
            {/*stat-info-sub-par*/}
            <div className="stat-info-sub-par">
              <div className="stat-info-div">
                <p>
                “In 2004, good SEO made you remarkable on the web. In 2014, good SEO is a result of being remarkable on the web.” – <b> Rand Fishkin</b>
                </p>
              </div>
              {/*stat-info-div*/}
            </div>
            {/*stat-info-sub-par*/}
          </div>
          {/*stat-info-par*/}
        </div>
        {/*count-col*/}
        <div className="clear" />
      </div>
      {/*container*/}
    </section>
    <section id="expand">
      <div className="text-center">
        <h5 className="common-h5">EXPERINCE</h5>
        <h2 className="common-h2">Pay for Qualified Traffic</h2>
      </div>
      {/*text-center*/}
      <div className="expand-img-col">
        <div className="expand-img">
          <img
            src="images/expand-home-img.png"
            alt="expand"
            className="img-responsive"
          />
          <div className="expand-img-info">
            <i className="fa fa-mobile-phone" />
            <h2>
              Expand Your <br />
              Digital Presence
            </h2>
            <p>
              Your app is your tool for better communication with your followers.
            </p>
            {/* <a href="#\">
              Get In Touch <i className="fa fa-long-arrow-right" />
            </a> */}
          </div>
        </div>
      </div>
      {/*expand-img-col*/}
      <div className="expand-img-info-col">
        <div className="progress-bar-col">
          <div className="col-sm-4">
            <div className="progressbar">
              <div className="second circle" data-percent={77}>
                <strong />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="progressbar">
              <div className="second circle" data-percent={55}>
                <strong />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="progressbar">
              <div className="second circle" data-percent={90}>
                <strong />
              </div>
            </div>
          </div>
        </div>
        {/*progress-bar-col*/}
        <div className="progress-info-col">
          <div className="progress-info">
            <h3> Website Performance</h3>
            <p>
             We provide the best performing  site in today's era.
              Whole UI  we provide are fully functional and responsive.

            </p>
          </div>
          {/*progress-info*/}
          <div className="progress-info">
            <h3>Online Business</h3>
            <p>
            Push your business online and reachout to your targited audience.
              Cover your whole area and increase sales.
              We will help you get your dreams come true.

            </p>
          </div>
          {/*progress-info*/}
          <div className="progress-info">
            <h3>Creative Approach</h3>
            <p>
             We are changing, learning and trying out new technologies so that you can get best services and your site stay up to date.
              We Try our best to provide you the Creative Approach so that you can get to approach your targeted audience.
            </p>
          </div>
          {/*progress-info*/}
        </div>
        {/*progress-info-col*/}
      </div>
      {/*expand-img-info-col*/}
      <div className="clear" />
      {/*clear*/}
    </section>
    <section id="faq-par">
      <div className="container">
        <div className="faq-que-col">
          {/* <h5 className="common-h5">EXPERINCE</h5> */}
          <h2 className="common-h2">WHAT ARE YOU <br/> STRUGGLING WITH?</h2>
          <div id="faq-accordion">
            <h3>Google search results are not ranked</h3>
            <p>
            Businesses must rank on Google in 2021. Your business must rank on Google as it holds 87% of the search market share.
            </p>
            <h3>Organic traffic is very low.</h3>
            <p>
            Nothing is better than targeted, cost-effective traffic that will give you an edge as a leading brand in your industry.
            </p>
            <h3>You won't get any leads or sales.</h3>
            <p>
            It doesn't matter if your product or service is great, but it won't sell if nobody knows about it or if you don't diversify your marketing.
            </p>
            <h3>The current agency is not delivering.</h3>
            <p>
            Poor communication, coordination, and transparency will always lead to bad outcomes. Let's show how we manage Expectations.
            </p>
          </div>
        </div>
        {/*faq-que-col*/}
        <div className="faq-bg-col">
          <div className="faq-img-par">
            <img
              src="images/home-faq.png"
              alt="faq"
              className="img-responsive"
            />
            <div className="faq-img-info">
              <i className="fa fa-lightbulb-o" />
              <h2>
                Have a project in mind? <br />
                Let's get to work.
              </h2>
              <p>
                Find out how it works and ask any <br /> questions you may have.
              </p>
              {/* <a href="#\">
                Get In Touch <i className="fa fa-long-arrow-right" />
              </a> */}
            </div>
            {/*faq-img-info*/}
          </div>
          {/*faq-img-par*/}
        </div>
        {/*faq-bg-col*/}
        <div className="clear" />
      </div>
      {/*container*/}
    </section>
    <section id="price-table">
      <div className="text-center">
        <h5 className="common-h5">PRICING PLAN</h5>
        <h2 className="common-h2">The Best Solutions for Our Clients</h2>
      </div>
      <div className="basic-price-col">
        <div className="basic-price-info">
          <h4>Website Package</h4>
          <div className="price">
            <p>1000-2000 Rs./Month</p>
          </div>
          {/*price*/}
          <div className="price-list">
            <ul>
              <li>a. Website Development</li>
              <li>b.Search Engine Optimization</li>
              <li>c.Search Engine Marketing(if wanted)</li>
              <li>d. Website Maintenance</li>
            </ul>
          </div>
          {/*price-list*/}
          <button type="button" className="price-btn">
          <a href="https://mellow-druid-356e3e.netlify.app/" style={{"color":"white","textDecoration":"none"}}>
          Get Started
          </a>
          </button>
        </div>
        {/*basic-price-info*/}
      </div>
      {/*basic-price-col*/}
      <div className="basic-price-col rec-price">
        <div className="basic-price-info">
          <h4>Social Media Pack</h4>
          <div className="price">
            <p>4500-6000 Rs./Month</p>
          </div>
          {/*price*/}
          <div className="price-list">
            <ul>
              <li>a. Social media accounts</li>
              <li>b.Organic Reach</li>
              <li>c.Ad Campaigns</li>
              <li>d.Competitor analysis</li>
            </ul>
          </div>
          {/*price-list*/}
          <button type="button" className="price-btn">
          <a href="https://mellow-druid-356e3e.netlify.app/" style={{"color":"white","textDecoration":"none"}}>
          Get Started
          </a>
          </button>
        </div>
        {/*basic-price-info*/}
      </div>
      {/*basic-price-col*/}
      <div className="basic-price-col">
        <div className="basic-price-info">
          <h4>Online presence full pack</h4>
          <div className="price">
            <p>10000 Rs./Month</p>
          </div>
          {/*price*/}
          <div className="price-list">
            <ul>
              <li>a.Web Development or Maintenance</li>
              <li>b.Content Creation</li>
              <li>c.Search Engine Optimization</li>
              <li>d.Social Media Management</li>
              <li>e.Competitor analysis</li>
            </ul>
          </div>
          {/*price-list*/}
          <button type="button" className="price-btn">
          <a href="https://mellow-druid-356e3e.netlify.app/" style={{"color":"white","textDecoration":"none"}}>
            Get Started
            </a>
          </button>
        </div>
        {/*basic-price-info*/}
      </div>
      {/*basic-price-col*/}
      <div className="clear" />
    </section>
    <section id="blog">
      <div className="text-center">
        <h5 className="common-h5">BLOG</h5>
        <h2 className="common-h2">Read Our Latest News</h2>
      </div>
      <div className="container">
        <div className="blog-col">
          <img
            src="images/blog/blog-1.jpg"
            alt="blog1"
            className="img-responsive"
          />
          <span>July 5 2022</span>
          <h3>How to Increase Your ROI Through scientific SEO?</h3>
          <a href="https://varshblogs.netlify.app/">Read More</a>
        </div>
        {/*blog-col*/}
        <div className="blog-col">
          <img
            src="images/blog/blog-2.jpg"
            alt="blog1"
            className="img-responsive"
          />
          <span>July 8 2022</span>
          <h3>How to do an effective SWOT analysis for your Marketing Compaigns?</h3>
          <a href="https://varshblogs.netlify.app/">Read More</a>
        </div>
        {/*blog-col*/}
        <div className="blog-col">
          <img
            src="images/blog/blog-3.jpg"
            alt="blog1"
            className="img-responsive"
          />
          <span>July 10 2022</span>
          <h3>Create an Integrated Marketing  Communications Plan that Highlights the Best of your Brand</h3>
          <a href="https://varshblogs.netlify.app/">Read More</a>
        </div>
        {/*blog-col*/}
        <div className="clear" />
      </div>
      {/*container*/}
    </section>

    {/*contact*/}
    <footer>
      <div className="container">
        <div className="footer-col">
          <h3>About Us</h3>
          <p>
            We focus on the needs of small to middle market businesses to
            improve and grow their return.so that your site will withstand the
            test of time. We care about your business, which is why we work with
            you.
          </p>
          <div className="social-icons-footer">
          <a href="https://www.facebook.com/Varshservices/">
          <i className="fa fa-facebook-square" />
          </a>
          <a href="https://twitter.com/VarshServices?t=Tz-Us3n7HYpV1SA_peMfQg&s=08">
          <i className="fa fa-twitter-square" />
          </a>
          <a href="https://www.instagram.com/varsh_services/">
          <i className="fa fa-instagram" />
          </a>
          </div>
        </div>
        {/*footer-col*/}
        <div className="footer-col footer-2-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="https://varshservices.com/">
                Home
              </a>
            </li>
            <li><a href="https://varshservices.com/about">
                About Us
              </a></li>
            <li><a href="https://mellow-druid-356e3e.netlify.app/">
                Services
              </a></li>
            <li><a href="https://varshblogs.netlify.app/">
                Blog
              </a></li>
            <li><a href="https://varshservices.com/contact">
                Contact Us
              </a></li>
          </ul>
        </div>
        {/*footer-col*/}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            <i className="fa fa-envelope-o" />{" "}
            <a href="mailto:support@varsh.org">connect@agbiztech.in</a>
          </p>
          <p>
            <i className="fa fa-mobile-phone" />{" "}
            <a href="tel:+919625523285">+918533873389</a>
          </p>
          <p>
            <i className="fa fa-map-o" />{" "}
            <span>Ghaziabad, UP</span>
          </p>
        </div>
        {/*footer-col*/}
        <div className="clear" />
        <hr className="footer-hr" />
        
      </div>
    </footer>
  </section>
</>

    </div>
  );
}

export default App;
