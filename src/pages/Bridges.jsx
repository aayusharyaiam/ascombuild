import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import bridgeImage from '../assets/images/image copy 12.png';

const Bridges = () => {
    return (
        <ServicePageLayout title="Bridges">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">

                <section className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/2">
                        <div className="bg-red-50 dark:bg-gray-800 p-6 rounded-lg border border-red-100 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">Why do we need ANSYS or any analysis software to assess the structure</h3>
                            <div className="mt-4 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                                <img 
                                    src={bridgeImage} 
                                    alt="Bridge Structure Analysis" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Bridges</h2>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, sunt perspiciatis error id ipsa atque unde quis dolore nobis eum aperiam enim blanditiis pariatur inventore eius commodi consectetur ut. Totam, assumenda! Laboriosam possimus, corporis dicta!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aliquid quad, officiis unde nostrum itaque! Adipisci dolorum, ab dolor, exercitationem praesentium dolorem quo voluptatum itaque dignissimos, sit esse cupiditate. Doloremque rerum similique a nobis placeat in illum, qua quaerat, ut repellat, fuga itaque? Nihil mollitia nisi, nam, accusantium nemo consequuntur reiciendis autem dicta consequatur earum beatae dolor distinctio, debitis repudiandae?
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Analysis</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Costing</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Planning</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project Strategy</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, animi? Vel quas in minima qui totam, aliquid dolores quaerat voluptatum?
                        </p>
                    </section>
                </div>

            </div>
        </ServicePageLayout>
    );
};

export default Bridges;
