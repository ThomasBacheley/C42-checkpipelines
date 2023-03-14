import Select from "react-select";
import makeAnimated from "react-select/animated";

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#EBECF0"
};

const groupBadgeStyles = {
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.17em 0.5em',
    textAlign: 'center',
  };
  
  const formatGroupLabel = (GroupedOption) => (
    <div style={groupStyles} className="p-2">
      <span>{GroupedOption.label}</span>
      <span style={groupBadgeStyles}>{GroupedOption.options.length}</span>
    </div>
  );

const animatedComponents = makeAnimated();

function Multiselect(props) {

  const handleChange = (selectedOptions) => {
    props.setOptions(selectedOptions);
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
      formatGroupLabel={formatGroupLabel}
    />
  );
}

export default Multiselect;
