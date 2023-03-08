import Select from "react-select";
import { useState } from "react";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function Multiselect(props) {
  const [selectedOption, setSelectedOption] = useState([]);

  const handleChange = (selectedOptions) => {
    console.log(selectedOptions);
    setSelectedOption([...selectedOption, selectedOptions]);
  };

  return (
    <Select
      components={animatedComponents}
      onChange={handleChange}
      closeMenuOnSelect={false}
      isMulti
      name="select"
      options={props.options}
      className="p-2"
    />
  );
}

export default Multiselect;
