import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';
import consultancyImage from '../assets/images/image copy 20.png';

const Consultancy = () => {
    return (
        <ServicePageLayout title="Consultancy">
            <div className="space-y-8 text-gray-700 dark:text-gray-300">

                <div className="flex flex-col items-center mb-8">
                    <div className="w-full max-w-lg bg-gray-200 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
                        <img 
                            src={consultancyImage} 
                            alt="Box Girder Structure" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Consultancy</h2>
                    <p className="mb-4">
                        <strong className="font-bold">Consultancy:</strong> ASCOM gives a unique approach to every individual project. The diagnosed problem is discussed between the team of auditing, design, execution and associates from well-known Organization to come up with suitable solution. The proposed design will be approved by associates in well – known organizations like IITs, NITs, Research sectors etc.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rehabilitation/Retrofitting and Repairing of bridges</h2>
                    <p className="mb-4">
                        Pre-damage rehabilitation/strengthening are known as retrofitting while post-damage is called repairing. External pre-stressing of concrete girders in longitudinal and vertical directions can be successfully adopted as a strengthening measure. Vertical pre-stressing may be adopted to prevent separation of deck slabs which are generally cast-in-situ over pre-cast girders.
                    </p>
                    <p className="mb-4">
                        Longitudinal pre-stressing may be adopted to strengthen the girder and to increase its flexural strength. Longitudinal pre-stressing may be resorted to in cases where girders are required to carry increased loads or the existing reinforcement/pre-stressed cables have deteriorated.
                    </p>
                    <p className="mb-4">
                        External pre-stressing using techniques such as external bonding of steel plates and fibre wrap is very popular to increase the shear and flexural capacity of girder. Strengthening scheme should achieve 'Compatibility' and 'Continuity' in the structural behavior between original and repaired structure which can be crystal clear by software.
                    </p>

                    <ul className="list-disc pl-5 space-y-2 mt-4 text-sm">
                        <li>Strengthening effect can participate primarily only for live loads and subsequently imposed loads</li>
                        <li>Replacing poor quality or defective material</li>
                        <li>Replacement of Concrete/ Reinforcement</li>
                        <li>Replacement of girder</li>
                        <li>Attaching additional load bearing member</li>
                        <li>Additional supplementary member</li>
                        <li>Adding external RCC</li>
                        <li>Epoxy bonded steel plates</li>
                        <li>Fiber Wrap</li>
                        <li>Adding external pre-stress</li>
                        <li>Adding additional supplementary pre-stress</li>
                        <li>Various combination of above</li>
                        <li>High skill operation</li>
                        <li>Cut through slab, diaphragms and lift the girder</li>
                        <li>Girder can be cut in middle and can be removed from below</li>
                        <li>New girder to be nearly of same type as original, cambers should match</li>
                        <li>Cast in slab and diaphragms</li>
                    </ul>
                </section>

            </div>
        </ServicePageLayout>
    );
};

export default Consultancy;
