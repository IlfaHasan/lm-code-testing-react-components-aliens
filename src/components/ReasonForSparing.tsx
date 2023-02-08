interface ReasonForSparingProps { 
    reasonForSparing:string;	
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const ReasonForSparing : React.FC <ReasonForSparingProps>= ({reasonForSparing,onChangeReasonForSparing }) => (
    <>
        <label htmlFor='reasonForSparing'>Reason for Sparing  </label>
        <textarea  id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing}>We love you Aliens!</textarea>
    </> );

export default ReasonForSparing;