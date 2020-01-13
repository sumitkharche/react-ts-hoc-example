import React from 'react';

export default function wrapWithBackground(InputComponent){
  class BackgroundWrappedComponent extends React.Component {
    render(){
      return(
        <div style={{backgroundColor : 'pink', padding:'20px'}}>
          <InputComponent {...this.props}/>
        </div>
      );
    }
  }
  return BackgroundWrappedComponent;
}


// HOC with functional component

// export default function wrapWithBackground(InputComponent){
//   function BackgroundWrappedComponent(props) {
//       return(
//         <div style={{backgroundColor : 'pink', padding:'20px'}}>
//           <InputComponent {...props}/>
//         </div>
//       );
//   }
//   return BackgroundWrappedComponent;
// }