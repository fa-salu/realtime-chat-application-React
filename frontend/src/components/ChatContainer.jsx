// import React from "react";

// function ChatContainer(props) {
//   return (
//     <div>
//       <div>
//         <div className="card border-2 border-info w-100">
//           <div className="row vh-95">
//             <div className="d-flex flex-column col-12 col-lg-12 col-xl-12">
//                 {props.children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatContainer;
import React from "react";

function ChatContainer(props) {
  return (
    <div className="card border-2 border-info w-100 vh-95 d-flex flex-column chat-window ">
      {props.children}
    </div>
  );
}

export default ChatContainer;

