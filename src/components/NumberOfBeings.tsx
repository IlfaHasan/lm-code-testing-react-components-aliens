interface NumberOfBeingsProps { 
	numberOfBeings: number;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NumberOfBeings : React.FC <NumberOfBeingsProps>= ({ numberOfBeings, onChangeNumberOfBeings }) => (
    <>
       <p> <label htmlFor='numberOfBeings'>Number of Beings</label>
        <input id='numberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings} /></p>
    </> );

export default NumberOfBeings;