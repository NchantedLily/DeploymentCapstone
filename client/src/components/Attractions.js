import React, { Component } from 'react';
import axios from 'axios';
import "../attractions.css";
import Avatar from "../img/Riverboat.jpg";
import PBS from "../img/PBS.jpg";
import Reds from "../img/reds.jpg";
import TQL from "../img/tql.jpg";
import Hockey from "../img/hockey.jpeg";
import Ault from "../img/aultpark.jpg";
import Eden from "../img/edenpark.jpg";
import Smale from "../img/smale.jpg";
import Mtair from "../img/mtairy.jpg";
import PHill from "../img/phill.jpg";
import Wash from "../img/washington2.jpg";
import Ut from "../img/ut.jpg";
import Artm from "../img/artmuseum.jpg";
import Boga from "../img/bogarts.jpg";
import Arono from "../img/Aronoff.jpg";
import Ic from "../img/Icon.jpg";
import Findlay from "../img/findlaymarket.jpg";
import Music from "../img/Musichall.jpg";
import Square from "/img/fountainsquare.jpg";
import Blink from "/img/blink1.jpg";
import Sign from "/img/signmuseum.jpg";
import Train from "/img/train.jpg";
import Rail from "/img/Railroad.jpg";
import Jim from "/img/junglejim2.jpg";






const Attractions = () => {

{/*var NewComponent = React.createClass({*/}
    {/*render() {*/}
      return (
        <div>
         {/*  <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>/}
          {/*<link rel="stylesheet" href="attractions.css"*/}
          {/*NAV BAR*/}
          <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">
                Home
              </div>
            </div>
            <div className="nav-btn">
              <label htmlFor="nav-check">
                <span />
                <span />
                <span />
              </label>
            </div>
            <div className="nav-links">
              <a href="index.html" target>Home</a>
              <a href="about.html" target="_blank">About</a>
              <a href="contact.html" target="_blank">Contact</a>
              <a href="#" target="_blank">GiftCards</a>
              <a href="#" target="_blank">(513) 931-6139</a>
            </div>
            <section> 
              <div className="cards">
                {/*SPORTS*/}
                {/*BENGOS*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={PBS} alt="PBS" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <div className="text-block">
                        <h1>Cincinnati Bengals</h1>
                        <p>Founded in 1967, by Paul Brown! <br /> Games are usually from September to January!</p>
                        <a href={"https://www.facebook.com/bengals/"} className="fa fa-facebook" />
                        <a href="https://www.bengals.com/" className="fa fa-house" /> 
                        <a href="https://twitter.com/Bengals?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="fa fa-twitter" /><a />
                      </div>
                    </div>
                  </div>
                </div>
                {/*Reds*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Reds} alt="Reds" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Cincinnati Reds</h1>
                      <p>The Cincinnati Reds are an American professional baseball team based in Cincinnati. The Reds compete in Major League Baseball (MLB) as a member club of the National League (NL) Central division, and were a charter member of the American Association in 1881 before joining the NL in 1890.</p>
                      <a href="https://www.facebook.com/Reds/" className="fa fa-facebook" />
                      <a href="https://www.Reds.com/" className="fa fa-house" /> 
                      <a href="https://twitter.com/Reds?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*FC CINCY*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={TQL} alt="TQL" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>FC Cincinnati</h1>
                      <p>Football Club Cincinnati, commonly known as FC Cincinnati, is an American professional soccer club based in Cincinnati. The club plays in the Eastern Conference of Major League Soccer (MLS). The team succeeded the lower-division team of the same name and was announced on May 29, 2018, when MLS awarded an expansion franchise to Cincinnati.</p>
                      <a href="https://www.facebook.com/fccincinnati/" className="fa fa-facebook" />
                      <a href="https://www.fccincinnati.com/" className="fa fa-house" /> 
                      <a href="https://twitter.com/fccincinnati?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*Cyclones*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Hockey} alt="Hockey" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Cincinnati Cyclones</h1>
                      <p>The Cincinnati Cyclones are a professional ice hockey team based in Cincinnati, Ohio. The team is a member of the ECHL. Originally established in 1990, the team first played their games in the Cincinnati Gardens and now play at Heritage Bank Center.</p>
                      <a href="https://www.facebook.com/cincinnaticyclones/" className="fa fa-facebook" />
                      <a href=" https://cycloneshockey.com/" className="fa fa-house" /> 
                      <a href="https://twitter.com/CincyCyclones?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*PARKS*/}
                {/*AULT PARK*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Ault} alt="Ault" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Ault Park</h1>
                      <p>Located in the neighborhood of Mt. Lookout, Ault Park is one of Southwest Ohio’s premier regional parks. The park provides picnic facilities, nature trails, children’s play areas, and lookout points to view the majestic Ohio River. Ault Park adds to its attractions with a splendid pavilion that provides a picturesque backdrop that makes it a popular venue for weddings and private parties.</p>
                      <a href="https://www.facebook.com/AultParkCincinnati/" className="fa fa-facebook" />
                      <a href="https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/ault-park/" className="fa fa-house" /> 
                    </div>
                  </div>
                </div>
                {/*EDEN PARK*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Eden} alt="Eden" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Eden Park</h1>
                      <p>Home to the Cincinnati Art Museum, Cincinnati Playhouse in the Park and the Krohn Conservatory, Eden Park is one of the most popular parks in Cincinnati Parks. Landmarks within the park include Hinkle Magnolia Garden, which features a picturesque gazebo, memorial tree groves and paths, Mirror Lake and the Bettman Fountain.</p>lkkklllllllll,
                      <a href=" https://cincyparks3.wfcstaging.com/central/eden-park/" className="fa fa-house" /> 
                    </div>
                  </div>
                </div>
                {/*SMALE*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Smale} alt="Smale" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Smale Park</h1>
                      <p>John G. and Phyllis W. Smale Riverfront Park connects downtown Cincinnati to the Ohio River and the existing riverfront parks. A wonderful location to view the bustling activity along The Ohio River Trail, and a place to gather and celebrate as a community</p>
                      <a href="https://www.facebook.com/SmaleRiverfrontPark/" className="fa fa-facebook" />
                      <a href=" https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/smale-riverfront-park/" className="fa fa-house" /> 
                    </div>
                  </div>
                </div>
                {/*MT AIRY*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Mtair} alt="Mtair" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Mt Airy</h1>
                      <p>Famous for its Treehouse, Located between Mt. Airy and Westwood, Mt. Airy Forest is the largest Cincinnati Park. With 1,459 acres that include miles of hiking trailsbn and a multi-use mountain biking trail. Mt. Airy also has Ohio’s only wheelchair accessible public treehouse, a beautiful arboretum, an enclosed dog park, and disc golf. Need somewhere to take the family? Come enjoy a scenic picnic at our numerous picnic tables, charcoal grills, and play areas for the kids. </p>
                      <a href="https://m.facebook.com/profile.php?id=244111932760170&__tn__=C-R" className="fa fa-facebook" />
                      <a href=" https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/mt-airy-forest/" className="fa fa-house" /> 
                      <a href="https://twitter.com/cincyparks" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*P HILL*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={PHill} alt="PHill" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="bigtext">Washington Park</h1>
                      <p>Washington Park is at the center of many of OTR's best restaurants, bars and entertainment. Aside from the never-ending activity and events at the park itself, you’ll find plenty to do nearby.</p>
                      <a href="https://www.facebook.com/pyramidhillsculpturepark/" className="fa fa-facebook" />
                      <a href=" https://www.pyramidhill.org/" className="fa fa-house" /> 
                      <a href="https://mobile.twitter.com/pyramid_hill" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*Washington P*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Wash} alt="Wash" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Washington Park</h1>
                      <p>Washington Park is at the center of many of OTR's best restaurants, bars and entertainment. Aside from the never-ending activity and events at the park itself, you’ll find plenty to do nearby.</p>
                      <a href="https://www.facebook.com/WashingtonParkOTR/" className="fa fa-facebook" />
                      <a href="https://washingtonpark.org/" className="fa fa-house" /> 
                      <a href="https://twitter.com/washingtonpark" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*Terminal*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Ut} alt="Ut" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Union Terminal</h1>
                      <p>One of the last great American train stations built, Union Terminal is a Cincinnati icon and one of the most widely regarded examples of the art deco style. Since its opening in 1933, Union Terminal has had a long and storied history, from welcoming soldiers home from World War II to becoming the home of three museums, an OMNIMAX® Theater and the Cincinnati History Library and Archives.</p>
                      <a href="https://m.facebook.com/profile.php?id=106361936066388" className="fa fa-facebook" />
                      <a href="https://www.cincymuseum.org/union-terminal/" className="fa fa-house" /> 
                    </div>
                  </div>
                </div>
                {/*Art Museum*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Artm} alt="Artm" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Art Museum</h1>
                      <p>Located in scenic Eden Park, the Cincinnati Art Museum features a diverse, encyclopedic art collection of more than 67,000 works spanning 6,000 years. In addition to displaying its own broad collection, the museum also hosts several national and international traveling exhibitions each year.</p>
                      <a href="https://www.facebook.com/cincinnatiartmuseum" className="fa fa-facebook" />
                      <a href="https://www.cincinnatiartmuseum.org/" className="fa fa-house" /> 
                      <a href="https://mobile.twitter.com/cincyartmuseum" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*Bogarts*/}
            <section> 
              <div className="cards2">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Boga} alt="Boga" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <div className="text-block">
                        <h1>Bogarts</h1>
                        <p>A music venue located on Short Vine. It opened as a theater originally but later expanded into concert operations in 1999.</p>
                        <a href="https://www.facebook.com/bogartsshows/" className="fa fa-facebook" />
                        <a href=" https://www.livenation.com/venue/KovZpZAEk6IA/bogart-s-events" className="fa fa-house" /> 
                        <a href="https://mobile.twitter.com/bogartsshows" className="fa fa-twitter" />
                      </div>
                    </div>
                  </div>
                </div>
                {/*Music Hall*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Music} alt="Music" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Music Hall</h1>
                      <p>Built in 1878 and designated a National Historic Landmark in 1975, Cincinnati’s Music Hall is among the City’s most recognizable buildings. Impressive from the outside for its Victorian-gothic architecture, it’s arguably more remarkable on the inside as the home to the Cincinnati Opera (the nation’s second-oldest opera company), Cincinnati Symphony Orchestra (the nation’s sixth-oldest symphony orchestra), May Festival (the longest-running choral festival in the Western hemisphere), and Cincinnati Ballet.</p>
                      <a href="https://www.facebook.com/musichallcincy/" className="fa fa-facebook" />
                      <a href=" https://www.cincinnatiarts.org/music-hall" className="fa fa-house" /> 
                      <a href="https://mobile.twitter.com/musichallcincy" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*Aronoff*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Arono} alt="Arono" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Aronoff Center</h1>
                      <p> The Aronoff is home to numerous resident companies including Fifth Third Bank Broadway in Cincinnati presented by TriHealth, Cincinnati Ballet, Cincinnati Music Theatre, Cincinnati Playwrights Initiative, Contemporary Dance Theater, Exhale Dance Tribe, Mutual Dance Theatre, and Revolution Dance Theatre. </p>
                      <a href="https://www.facebook.com/aronoffcenter/" className="fa fa-facebook" />
                      <a href=" https://www.cincinnatiarts.org/aronoff-center-home" className="fa fa-house" /> 
                      <a href="https://mobile.twitter.com/aronoffcenter" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                {/*Icon*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Ic} alt="Ic" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Icon Music Center</h1>
                      <p>The Andrew J. Brady Music Center is a music venue in Cincinnati, Ohio, located in The Banks neighborhood on the Ohio River. The venue opened in July 2021. The year-round facility includes an outdoor stage for concerts and festivals in the park adjacent to the venue.</p>
                      <a href="https://www.facebook.com/IconMusicCenter/" className="fa fa-facebook" />
                      <a href=" https://bradymusiccenter.com/" className="fa fa-house" /> 
                      <a href="https://www.instagram.com/accounts/login/?next=/bradymusiccenter/" className="fa fa-instagram" />
                    </div>
                  </div>
                </div>
                {/*Findlay Market*/}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Findlay} alt="Findlay" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Findlay Market</h1>
                      <p> Findlay Market is Ohio's oldest continuously operated public market and one of Cincinnati's most cherished institutions, welcoming more than one million visitors each year.  Located just blocks from downtown in Over-the-Rhine, a dense historic neighborhood rich in 19th century architecture, Findlay Market remains the bustling center of farm fresh, locally sourced, artisanal and specialty foods.</p>
                      <a href="https://www.facebook.com/FindlayMarket" className="fa fa-facebook" />
                      <a href=" https://www.findlaymarket.org/" className="fa fa-house" /> 
                      <a href="https://mobile.twitter.com/findlaymarket" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Square} alt="Avatar" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Fountain Square</h1>
                      <p>Fountain Square has been the symbolic center of Cincinnati since 1871. It was renovated in 1971 and 2005 and currently features many shops, restaurants, hotels, and offices.</p>
                      <a href="https://www.facebook.com/MyFountainSquare/" className="fa fa-facebook" />
                      <a href=" https://myfountainsquare.com/" className="fa fa-house" /> 
                      <a href="https://twitter.com/myfountainsqr" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Blink} alt="Avatar" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Blink Festival</h1>
                      <p>The BLINK Parade is the community’s spotlight during BLINK; it creates a ceremony and ritual of beginning that many different groups of communities and community members can be involved in. The Parade is also an opportunity to celebrate our unique identities outwardly with pride (real or fantasy!), and create a magical shared experience, together.</p>
                      <a href="https://www.facebook.com/blinkcincinnati/" className="fa fa-facebook" />
                      <a href=" https://blinkcincinnati.com/" className="fa fa-house" /> 
                      <a href="https://twitter.com/blinkcincy?lang=en" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Sign} alt="Avatar" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>American Sign Museum</h1>
                      <p>The American Sign Museum in Cincinnati, Ohio, preserves, archives, and displays a collection of signs. The museum also displays the equipment utilized in the design and manufacture of signs. Tod Swormstedt began working on the museum in 1999. It opened to the public in 2005.</p>
                      <a href="https://www.facebook.com/americansignmuseum/" className="fa fa-facebook" />
                      <a href=" https://www.americansignmuseum.org/" className="fa fa-house" /> 
                      <a href="https://twitter.com/signmuseum" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Train} alt="Avatar" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="bigtext">Washington Park</h1>
                      <p>Washington Park is an important civic space in the heart of Cincinnati that has evolved over the last 150 years to accommodate the needs and aspirations of the community. The latest improvements came as a result of a unique partnership between the Cincinnati Park Board and the Cincinnati Center City Development Corporation</p>
                      <a href="https://www.facebook.com/WashingtonParkOTR/" className="fa fa-facebook" />
                      <a href=" https://washingtonpark.org/" className="fa fa-house" /> 
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Rail} alt="Avatar" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>National Underground Railroad Freedom Center</h1>
                      <p>The National Underground Railroad Freedom Center is a museum of conscience, an education center, a convener of dialogue, and a bea­con of light for inclusive freedom around the globe.</p>
                      <a href=" https://www.cincinnati-oh.gov/streetcar/" className="fa fa-house" /> 
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Jim} alt="Avatar" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>Jungle Jim's</h1>
                      <p>Jungle Jim’s International Market was born. A mere cubicle at 4,200 square feet, but it was a start. Before long, more and more products were added, and expansion continues to this day. Jungle Jim’s International Market is a place where the first rule is to treat customers like gold. The second is to have fun doing it. People come from several states away for the unique shopping experience Jungle Jim’s International Market offers</p>
                      <a href="https://www.facebook.com/JungleJimsInternationalMarket/" className="fa fa-facebook" />
                      <a href="https://junglejims.com/" className="fa fa-house" /> 
                      <a href="https://mobile.twitter.com/junglejimsmrkt" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={Avatar} alt="Avatar" style={{width: '500px', height: '300px'}} />
                    </div>
                    <div className="flip-card-back">
                      <h1>BB Riverboats</h1>
                      <p>BB Riverboats is one of Cincinnati's top attractions and has served the Greater Cincinnati area for over 4 decades. We specialize in lunch, sightseeing, and dinner cruises on the beautiful Ohio River.</p>
                      <a href="https://www.facebook.com/bbriverboats/" className="fa fa-facebook" />
                      <a href=" https://bbriverboats.com/" className="fa fa-house" /> 
                      <a href="https://twitter.com/bbriverboats?lang=en" className="fa fa-twitter" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              {/* MAP */}
              <div className="Map">
                <iframe src="https://my.atlistmaps.com/map/b026416f-080d-4b84-8317-c40e8cb416f1?share=true" allow="geolocation" width="100%" height="400px" frameBorder={0} scrolling="no" allowFullScreen />
              </div>
            </section>
            <footer></footer>
          </div>
          </div>
      );
    }
  

  export default Attractions;