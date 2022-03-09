import { Fragment } from "react/cjs/react.production.min";
import data from '../data/wallOfFame';
export default function WallOfFame() {
    return <Fragment>
        <div class="container flex justify-center mx-auto pt-16">
            <div>
                <p class="text-gray-500 text-lg text-center font-normal pb-3">WALL OF FAME</p>
                <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 mx-auto">Achievements of the Alumni</h1>
            </div>
        </div>
        <div class="w-full bg-gray-100 px-10 pt-10">
            <div class="container mx-auto">
                <div role="list" aria-label="Behind the scenes People " class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    {data.map((data) => {
                        return <div role="listitem" class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 max-w-sm lg:w-2/5 mx-16">
                            <div class="rounded overflow-hidden shadow-md bg-white">
                                <div class="absolute -mt-20 w-full flex justify-center">
                                    <div class="h-32 w-32">
                                        <img src={data.imageUrl} alt="Display Picture of Andres Berlin" role="img" class="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div class="px-6 mt-16 pb-6">
                                    <h1 class="font-bold text-3xl text-center mb-1">{data.name}</h1>
                                    <p class="text-gray-800 text-sm text-center">{data.primary}</p>
                                    <p class="text-center text-gray-600 text-base pt-3 font-normal">{data.secondary}</p>

                                </div>

                            </div>
                        </div>

                    })}


                </div>
            </div>
        </div>

    </Fragment>
}