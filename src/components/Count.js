import { connect } from "react-redux";

const Count = (props) => {
  return(
    <p>{props.count}</p>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return state
}

export default connect(mapStateToProps)(Count)

