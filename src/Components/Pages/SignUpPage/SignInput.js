const SignInputs = ({title,inputType,refInput,inputValue,headerStyle}) => {
  return ( 
    <label htmlFor={title} className="FormLabel ">

      <h3 className="form__NameCont-name" style={headerStyle}>{title}</h3>

      <input value={inputValue} ref={refInput} className="form__NameCont-input FormInput" 
        type={inputType} name={title} />

    </label>
   );
}
 
export default SignInputs;