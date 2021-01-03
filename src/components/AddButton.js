import { connect } from "react-redux";

const AddButton = (props) => {

  const handleClick = () => {
    props.sendAction()
  }

  return (
    <button onClick={handleClick}> + </button>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    sendAction: () => {
      dispatch({
        type: 'add_action'
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(AddButton)
