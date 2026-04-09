import { Check, CirclePlay, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section  className="relative md:h-[88.8vh] flex items-center justify-center overflow-hidden text-white md:p-0 p-4 ">


            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>


            <div className="absolute w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
            <div className="absolute w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>


            <div className="relative  max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


                <div className="animate__animated animate__lightSpeedInLeft">
                    <div className="flex  items-center gap-2 mb-4 text-sm bg-white/10 px-3 py-1 rounded-full w-fit">
                        <Sparkles size={16} />
                        AI Powered Notes Analysis
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Turn Your Notes into <br />
                        <span className="text-yellow-300">Smart Insights</span>
                    </h1>

                    <p className="text-gray-200 mb-6 md:w-[487px]">
                        An AI-powered tool that turns PDFs or text into clear, well-structured notes, summaries, and key insights in seconds.
                    </p>

                    <div className="flex gap-4">
                        <Link to={'/create'} className="px-6 py-3  bg-white text-black rounded-lg font-medium hover:scale-105 transition-all duration-300 text-nowrap active:scale-75">
                            Get Started
                        </Link>

                        <Link to={'/demo'} className="px-6 py-3 border border-white/50 rounded-lg hover:bg-white/10 transition-all duration-300  active:scale-75 flex items-center gap-2 text-nowrap">
                            <CirclePlay />
                            Watch Demo
                        </Link>
                    </div>
                </div>


                <div className="bg-white/50 text-black animate__animated animate__flipInX rounded-2xl shadow-2xl p-6 hover:scale-105 transition-all duration-300">

                    <div className=" flex justify-end gap-2">
                        <div className="p-2 rounded-full bg-gray-300"></div>
                        <div className="p-2 rounded-full bg-green-500"></div>
                        <div className="p-2 rounded-full bg-yellow-500"></div>
                        <div className="p-2 rounded-full bg-red-500"></div>
                    </div>
                    <h2 className="text-lg font-semibold mb-4">
                        Your Notes Analyzed!
                    </h2>


                    <div className="mb-4">
                        <h3 className="font-medium text-sm">Summary</h3>
                        <div className="h-2 bg-gray-200/50 rounded mt-2"></div>
                        <div className="h-2 bg-gray-200/50 rounded mt-2 w-3/4"></div>
                    </div>


                    <div className="mb-4">
                        <h3 className="font-medium text-sm">Key Points</h3>
                        <div className="flex items-center gap-2">
                            <Check size={15} color="green" />
                            <div className="h-2 bg-gray-200/50 rounded mt-2 w-5/6"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check size={15} color="yellow" />
                            <div className="h-2 bg-gray-200/50 rounded mt-2 w-5/6"></div>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-3 bg-gray-100/50 rounded-xl">
                            <h4 className="text-sm font-medium mb-2">Analysis</h4>
                            <div className="flex items-center gap-2">
                                <Check size={15} color="green" />
                                <div className="h-2 bg-gray-400/50 rounded w-5/6"></div>
                            </div>
                        </div>

                        <div className="p-3 bg-gray-100/50 rounded-xl">
                            <h4 className="text-sm font-medium mb-2">Sentiment</h4>
                            <div className="flex items-center gap-2">
                                <Check size={15} color="green" />
                                <div className="h-2 bg-gray-400/50 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    );
};

export default Hero;