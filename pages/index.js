import { Fragment } from "react/cjs/react.production.min";
import * as imgs from "../public"
import Image from "next/image";
import React from "react";
import Hero from "../components/hero";
import data from "../data/alumni_team_data";
import rename from "../helper_functions/babel_img_rename";
console.log(imgs["Raghava"]);
export default function Index() {
  return <Fragment>
  <Hero/>

          <section>
            <div className="container flex flex-col items-center px-5 py-8 mx-auto">
              <div className="flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-4xl">
                <div className="w-full mx-auto">
                  <h1 className="text-5xl font-bold py-5">About Us</h1>
                  {/* <h2>A small headline to switch your visitors into users.</h2> */}
                  <p className="text-lg font-light"> It is a matter of great pride and honour for an Educational Institute when the grandaunts spread their wings and take flight into the infinite sky of career opportunities. CVRCE displays a conviction that old students are priceless possessions and valued emissaries as they have added sheen and lustre to the glory of the institute and raised the banner of our college higher. In order to foster and strengthen the bond between the alma mater and the alumni, the college has registered Alumni Association during the year 2007 with the Regd # 486. The department level Alumni groups are invoked and the Alumni that are spread across the Globe are allured to join the alumni network. To coordinate all the alumni activities the college has constituted this Alumni Affairs division involving faculty members from each department.</p>
                </div>
              </div>
            </div>
            <div className=" items-center w-full px-5">
              <div className="
            flex flex-wrap
            justify-center
            items-center
            w-full
            mx-auto
            prose
            max-w-max
            lg:max-w-3xl
          ">
                <div className="relative justify-center lg:px-4">
                  <div className="lg:grid lg:grid-cols-2">
                    <div className="p-8">
                      <h1 className="text-3xl font-bold">Classroom “The Cave”</h1>
                      <p className="font-light text-lg"> While you struggled to keep your head above water with the stupendous lectures on physics, chemistry, maths and all your core subjects as tension soared up writing exams with hysterical tears and overcoming distractions during those desperate times, the campus was always filled with your laughter, jokes, lighter moments and a sense of togetherness. The dungeon of exam fear lost its sinister gloom as you moved from first year to next years progressively taking on a cozy air of new learnings and more confidence by the day. </p>
                    
                    </div>
                    <div className="p-8">
                      <h1 className="text-3xl font-bold">Campus “The Memories”</h1>
                      <p className="font-light text-lg">
The buildings with your classrooms, the trees, the basketball fields, the cricket ground, the corridors filled with aroma of snacks during breaks, the physical directors chasing you back to your classes, your sneaking through the readings in the labs, the canteen’s lunch seemingly exotic over you sharing it with your best friends..how can we capture the myriad experiences of everyone of you on just this page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <div className="container flex flex-col items-center px-5 py-8 mx-auto">
              <div className="flex flex-col w-full mb-8 prose text-left max-w-max lg:max-w-4xl">
                <div className="w-full mx-auto">
                  <h1 className="text-5xl font-bold py-5">Under the Neem Trees...</h1>
                  {/* <h2>A small headline to switch your visitors into users.</h2> */}
                  <p className="text-lg font-light"> In retrospect of the 20 years of journey of CVR College of Engineering, here we stand proudly looking at what we gave back to the society. Yes..! Our beloved students are now the torch bearers of this proud legacy in the society and we love to shout on the roof top about you and your accomplishments. And this is the soulful sole purpose behind the registration of the Alumni Association a while ago. The Alumni team is determined to strengthen the Alumni network and spread its wings far and wide. Not just nostalgia, you shall have a lot of events to participate in, your stories to be added to our wall of fame, your knowledge sharing sessions which can inspire your super juniors in the campus, and of course if you want to volunteer for anything more..! CVR College of Engineering has been a place where the boundaries between teachers and students eventually blurred so beautifully that your teachers became your mentors and friends for a lifetime thereafter. It has been a place which instilled a silent confidence and understanding within a person so when you walked out of the gates you were ready to deal with any challenges you faced.
<br/>
<br/>
<br/>
And this is the soulful sole purpose behind the registration of the Alumni Association a while ago. The Alumni team is determined to strengthen the Alumni network and spread its wings far and wide. Not just nostalgia, you shall have a lot of events to participate in, your stories to be posted to our wall of fame, your knowledge sharing sessions which can inspire your super juniors in the campus, and of course if you want to volunteer for anything more..!
<br/>
<br/>
<br/>
CVR College of Engineering has been a place where the boundaries between teachers and students eventually blurred so beautifully that your teachers became your mentors and friends for a lifetime thereafter. It has been a place which instilled a silent confidence and understanding within a person so when you walked out of the gates you were ready to deal with any challenges you faced.

</p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-5xl font-extrabold flex items-center justify-center py-5">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ">
          Our Team &rarr;
        </span>
      </div>
<div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            {data.map((data) => {
              console.log(data.imageUrl);
              return (
                <div
                  role="listitem"
                  key={data.imageUrl}
                  className="xl:w-1/3 w-full mx-0 my-24 sm:w-3/4 md:w-2/5 relative sm:mt-16 sm:mb-32 sm:mx-5  max-w-sm lg:w-2/5 "
                >
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <Image

                          src={imgs[rename(data.imageUrl)]}
                          alt="Display Picture of Andres Berlin"
                          role="img"
                          className="rounded-full object-cover h-full w-full shadow-md transition-all"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16 pb-6">
                      <h1 className="font-bold text-3xl text-center mb-1">
                        {data.name}
                      </h1>
                      <p className="text-gray-800 text-sm text-center">
                        {data.primary}
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        {data.secondary}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


        
  </Fragment>
}