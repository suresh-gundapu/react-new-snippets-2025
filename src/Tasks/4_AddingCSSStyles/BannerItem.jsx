
import './banner.css';
let BannerItem = ()=>{
  var style = {
    firstCss :{
      color:"green",
      fontSize:"30px",
    },
    secondCss:{
      color:"red",
    }
  }
  return (
    <>
        <div className="content">
          <div className="box box1">
              <h2 style={ style.firstCss }>This is box 1</h2>
          </div>
          <div className="box box2">
              <h2>This is box 2</h2>
          </div>
        </div>
    </>
  )
}
export default BannerItem;
