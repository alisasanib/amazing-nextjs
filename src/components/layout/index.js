import Header from '../header'
const layoutStyle = {
  height:"100%",
  width: "100%",
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header/>
    {props.children}
  </div>
)

export default Layout
