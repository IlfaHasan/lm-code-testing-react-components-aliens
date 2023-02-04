import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './speciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIsTheAnswer from './WhatIsTheAnswer';
import ReasonForSparing from './ReasonForSparing';




const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('Humans');
	const[planetName,setPlanetname]=useState<string>('Earth');
	const[numberOfBeings,setNumberOfBeings]=useState<number>(100);
	const[selectedAnswer,setSelectedAnswer]=useState<string>('4');
	const[reasonForSparing,setReasonForSparing]=useState<string>('We love you aliens');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e : any) => setPlanetname(e.target.value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e : any) => setNumberOfBeings(e.target.value)} />
			<WhatIsTheAnswer onChangeAnswer={(e : any) => setSelectedAnswer(e.target.value)} />
			<ReasonForSparing onChangeReasonForSparing={(e : any) => setReasonForSparing(e.target.value)} />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
