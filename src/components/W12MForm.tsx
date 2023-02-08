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
	const [isSubmitClicked, setIsSubmitClicked] = useState<boolean>(false);
	

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e : any) => setPlanetname(e.target.value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(e : any) => setNumberOfBeings(e.target.value)} />
			<WhatIsTheAnswer selectedAnswer={selectedAnswer} onChangeAnswer={(e : any) => setSelectedAnswer(e.target.value)} />
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(e : any) => setReasonForSparing(e.target.value)} />
			<p><button type="submit" onClick={()=>{setIsSubmitClicked(true); 
				console.log('Species Name', {speciesName})
				console.log('Panet Name', {planetName})
				console.log('Number of Beings', {numberOfBeings})
				console.log('What is 2+2', {selectedAnswer})
				console.log('Reason for Sparing', {reasonForSparing})
				}}>Submit form</button></p>
		</section>
	);
};

export default W12MForm;
