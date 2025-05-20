/**
 * Props.Children :
================

We can pass two types information parent child 

1)props

2)Content (html tags)

How it possible we can figure tha any content in between Product tags in parent tag and access in child component like

this.props.children

Here i am passing one button parent to child component see once 


 */
import PropTypes from "prop-types";

const PropsChildren = (props) => {
  console.dir("asdasd" + props);
  return (
    <>
      <p>Name</p> :{props.name}
      {props.mobile}
      {props.children}
    </>
  );
};
PropsChildren.propTypes = {
  name: PropTypes.string.isRequired,
  mobile: PropTypes.number,
};

export default PropsChildren;
