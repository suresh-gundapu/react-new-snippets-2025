import PropsChildren from "./PropsChildren";

const PropsParent = ()=>{
  var data = {
    title:"Hi",
    mobile:'9603212151'
  }
return<>
  <PropsChildren name = {data.title} mobile = "9603212151" >This is title </PropsChildren>
  </>
}

export default PropsParent;