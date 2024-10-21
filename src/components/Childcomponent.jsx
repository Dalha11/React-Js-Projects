import PropTypes from "prop-types"
export const Childcomponent = (props) => {
  return (
    <div>
        {props.children}
    </div>
  )
}

Childcomponent.prototype={
    children:PropTypes.array,
}