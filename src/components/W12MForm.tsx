import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './speciesName';
import PlanetName from './PlanetName';




const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('humans');
	const[planetName,setPlanetname]=useState<string>('Earth');
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(e : any) => setPlanetname(e.target.value)} />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
