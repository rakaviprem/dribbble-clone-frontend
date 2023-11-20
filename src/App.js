import './App.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { home } from './home';

function App() {
  return (
    <div >
    <div class="navbar">
            <div class="nav-comp">
                <div><a href="">Find Talent</a></div>
                <div><a href="">Inspiration</a></div>
                <div><a href="">Learn design<RiArrowDropDownLine /> </a></div>
                
                <div><a href="">Jobs</a></div>
                <div><a href="">Go Pro</a></div>
                <div><a href="">Dribble</a></div>
                <div > <form class="search"><HiMiniMagnifyingGlass /><input class="search" type='text' placeholder='Search...' ></input></form></div>
                <div><a href="">Log in</a></div>
                <div>
                <button class='signup'>Sign up</button>
                </div>
            </div>
    </div>
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="content-center text-center font-semibold bg-gray-300 rounded-full py-2 px-2 sm:text-2xl">
           Over 3 million ready-to-work creatives!
        
          </blockquote><br/><br/>
          <blockquote className="text-center font-serif-semibold leading-8 text-gray-900 sm:text-6xl">
          <p>
            Work with the world's top creative talent.</p>
          </blockquote><br/><br/>
          <blockquote className="text-center font-serif leading-8 text-gray-900 sm:text-2xl">
          <p>
          Connect with millions of top-rated designers & agencies around the world.</p>
          </blockquote><br/><br/>
          <blockquote className="text-center font-serif leading-8 text-gray-900 sm:text-2l">
          <button class="start">Start hiring today</button>
          </blockquote>
          
          
        </figure>
      </div>
    </section>
  
    <div>

      </div>
    
    </div>
  );
}

export default App;
