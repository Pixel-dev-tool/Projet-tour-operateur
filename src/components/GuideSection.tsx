import ProfilCard from "./GuideProfileCard";

import { guideProfiles } from "../features/circuit/data/guideProfile";

export default function GuideSection() {
    return (<section className="bg-[#f5f2ef] py-16 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-serif mb-4"> Suiver les Guides !</h1>
                <h3 className="text-base mb:text-lg text-gray-600 mb-6">
                    Nos conseillers experts conçoivent votre voyage sur-mesure et vous accompagnent à chaque étape de votre aventure.
                </h3>
                <p className="text-gray-600 mb-4">
                    Nos conseillers experts ont tous vécu ou voyagé de nombreuses fois
                    vers nos destinations.
                </p>
                <p className="text-gray-600">
                    Profitez de leurs conseils et petits secrets pour faire de votre séjour
                    une expérience unique et inoubliable.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[300px]">
                {guideProfiles.map((guide, idx) => (
                <ProfilCard key={guide.id || idx} guide={guide} />
            ))}
            </div>
            {/* Profil Guide */}
            
        </div>


    </section>)
}