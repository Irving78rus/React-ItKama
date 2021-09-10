// import React from "react";
// import { NavLink } from "react-router-dom";
// import Preloader from "../Preloader/Preloader";

// class ProfileStatus extends React.Component {
//   CheckForDownload=()=>{
//     if (!this.props.profile) {
//       return <Preloader />;
//     }
//     else {
//       return (this.ProductItem = this.props.ProductItem.map((item) => (
//       <div className="product-item" key={item.id}>
//         <div className="product-img"  >
//         <NavLink to=''><img src={this.props.profile.photos.large} alt='foto'/></NavLink>
         
//         </div>
//         <div className="product-list">
//           <h3>{this.props.profile.aboutMe}</h3>
    
//           <span className="price">{this.props.profile.lookingForAJob}</span>
//           <div className="actions">
//             <div className="add-to-cart">
//             <NavLink to='' className="cart-button"><img src={this.props.profile.lookingForAJobDescription} alt='foto'/></NavLink>
               
    
//               <div className="cart-name">Дмитрий</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))  )}
//   }
//   state = {
//     editMode: false,
//   };
// activateEditMode =() => {
//   debugger
//   console.log(this);
//     this.setState({
//         editMode:true 
//     })
//     // this.state.editMode = true   
// }
// deactivateEditMode()  {
//     this.setState({
//         editMode:false 
//     })
//     // this.state.editMode = true   
// }
//   render() {
//      this.CheckForDownload()
//     return (
//       <>
//         {!this.state.editMode &&
//         <div>
//           <span onDoubleClick = {this.activateEditMode}> {this.props.status}</span>
//         </div>
//         }
//         { this.state.editMode&&
//         <div>
//           <input autoFocus={true} onBlur = {this.deactivateEditMode.bind(this)} value={this.props.status} />
//         </div>}
//         <div className="main_content">{this.ProductItem}</div>;
//       </>
//     );
//   }
// }
// export default ProfileStatus;
