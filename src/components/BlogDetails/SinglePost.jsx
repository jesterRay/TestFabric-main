import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { FaRegComments } from 'react-icons/fa';
import thumb1 from '../../assets/img/blog/p1.jpg';
import thumb2 from '../../assets/img/blog/p2.jpg';

function SinglePost() {
    return (
        <div className="single-blog-post post-details">
            <div className="post-content">
                <div className="post-cat">
                    <a href="news.html">Business</a>
                </div>
                <h2>Dharma Home Suites at Novia offers fully plain furnished apartments to fit</h2>
                <div className="post-meta">
                    <span>
                        <BsEye
                            style={{
                                marginRight: '5px',
                                fontSize: '18px',
                                marginTop: '-2px',
                            }}
                        />
                        232 Views
                    </span>
                    <span>
                        <FaRegComments
                            style={{
                                marginRight: '5px',
                                fontSize: '18px',
                                marginTop: '-2px',
                            }}
                        />
                        35 Comments
                    </span>
                    <span>
                        <BiCalendar
                            style={{
                                marginRight: '5px',
                                fontSize: '18px',
                                marginTop: '-2px',
                            }}
                        />
                        24th March 2019
                    </span>
                </div>
                <p>
                    Flyingfish Kafue pike cow shark California smoothtongue golden loach temperate
                    ocean-bass gulper eel. Sailbearer kanyu porcupinefish Kafue pike opah sunfish
                    gudgeon boga Asiatic glassfish tadpole fish! Alewife, poacher airbreathing
                    catfish; zebra tilapia northern pearleye naked-back knifefish pupfish dojo
                    loach,
                </p>
                <p>
                    Asian carps sailback scorpionfish; dragon goby lemon sole triplefin blenny hog
                    sucker. Smelt sleeper shovelnose sturgeon merluccid hake cow shark herring smelt
                    trout-perch barbeled houndshark. Shell-ear Asian carps blackfish Port Jackson
                    shark Atlantic saury. Sacramento blackfish pricklefish, Atlantic cod
                </p>
                <p>
                    Northern anchovy–bass yellowtail barracuda zander yellowfin grouper gurnard
                    skipjack tuna shark burrowing goby eulachon wobbegong. Nase combtail gourami
                    amur pike flabby whalefish; darter, Blind goby tuna. Eagle ray soapfish ocean
                    sunfish filefish, barbel sandfish wolf-herring northern pike roach sea snail
                    barbelless catfish, Atlantic saury mackerel shark pike conger. Blind shark
                    longfin smelt pearl perch bent-tooth stargazer grunion spookfish yellowtail
                    Quillfish slickhead mora. snake worm mackerel sockeye salmon banjo catfish
                    toadfish sauger four-eyed fish
                </p>
                <img src={thumb1} alt="" />
                <h2>A cleansing hot shower or bath</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur.
                </p>
                <blockquote>
                    Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid
                    pug pitchfork post-ironic.
                </blockquote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute.
                </p>

                <ul>
                    <li>We track every dollar</li>
                    <li>We’re an open book</li>
                    <li>100% goes to the field</li>
                    <li>Received the highest grades</li>
                </ul>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus
                </p>
                <img className="alignleft" src={thumb2} alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
                    omnis iste natus.
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
