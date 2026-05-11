import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const StructuralDesign = () => {
    return (
        <ServicePageLayout title="Structural Design">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">

                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="h-64 sm:h-96 bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 overflow-hidden">
                        <img 
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            alt="Structural Design Analysis" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Structural Design</h2>
                    <div className="text-lg leading-relaxed space-y-4">
                        <p>
                            ASCOM provides structural design services for a wide range of mega structures, including bridges, dams, chimneys, high-rise buildings, water tanks, river-crossing structures, transmission line tower foundations, STPs, and other infrastructure projects.
                        </p>
                        <p>
                            We have a highly qualified and competent team of structural designers and consultants from premier institutes such as the Indian Institutes of Technology (IITs) and National Institutes of Technology (NITs), delivering safe, economical, and innovative engineering solutions.
                        </p>
                    </div>
                </section>

            </div>
        </ServicePageLayout>
    );
};

export default StructuralDesign;
