interface WhatIsTheAnswerProps { 
	onChangeAnswer: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const WhatIsTheAnswer : React.FC <WhatIsTheAnswerProps>= ({ onChangeAnswer }) => (
    <>
        <label htmlFor='whatIsTheAnswer'>What is 2+2</label>
        <select id="mySelect" onSelect={onChangeAnswer}>
  <option value="Not 4">Not 4</option>
  <option value="4">4</option></select>
    </> );

export default WhatIsTheAnswer;