import theimage from "./movies.jpeg";
import theimag from "./movie1.webp";
function About1(){
    return (
       <>
       
         <div className="heading">
           <h1>About Us</h1>
           <p>
             Welcome to our company! We are dedicated to provide the best service
             to our customers. Our team is made of experienced professionals who
             are passionate about what they do.
           </p>
           
           </div>
           <div>
           <img src={theimage}/>
           </div>
   <div className="content">
           <p>
           MovieChat is the largest online community for discussing Movies,
            TV Shows, Actors and Celebrities.Have a question about a movie
             you recently saw, or just want to see what other people have to say?
          Keep tabs on your favorite actors and celebs by following 
          the latest rumors and gossip.Check movie reviews, ratings,
           cast, quotes, news and more on MovieChat, the best movie forum and message board.
</p>
</div>
<div className="readmore">
        <button><a href="/readmoree">Read more</a></button>
         </div>
       
       </>
     )
   }
   
   export default About1;