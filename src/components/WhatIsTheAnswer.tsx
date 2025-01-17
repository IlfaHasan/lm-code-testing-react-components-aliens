interface WhatIsTheAnswerProps { 
    selectedAnswer:string;
	onChangeAnswer: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const WhatIsTheAnswer : React.FC <WhatIsTheAnswerProps>= ({selectedAnswer,onChangeAnswer }) => (
    <>
        <p><label htmlFor='whatIsTheAnswer'>What is 2+2 </label>
        <select id="mySelect" value={selectedAnswer} onSelect={onChangeAnswer}>
  <option value="Not 4">Not 4</option>
  <option value="4">4</option></select></p>
    </> );

export default WhatIsTheAnswer;