interface ReasonForSparingProps { 
	
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const ReasonForSparing : React.FC <ReasonForSparingProps>= ({onChangeReasonForSparing }) => (
    <>
        <label htmlFor='reasonForSparing'>Reason for Sparing</label>
        <textarea  id='reasonForSparing' onChange={onChangeReasonForSparing}>We love you Aliens!</textarea>
    </> );

export default ReasonForSparing;