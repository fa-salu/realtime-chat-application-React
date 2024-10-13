// import React from "react";

// function ChatInput( {Message, setMessage}) {
//   return (
//     <div>
//       <div className="mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block">
//         <div className="input-group flex-fill">
//           <input
//             type="text"
//             className="form-control"
//             name="message"
//             value={Message}
//             placeholder="Type your message..."
//             onChange={({ currentTarget: input }) => setMessage(input.value)}
//           />
//           <button className="btn btn-info">send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatInput;

import React from "react";

function ChatInput({ Message, setMessage }) {
  return (
    <div className="mt-auto align-items-end border-info py-3 px-4 border-top">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="message"
          value={Message}
          placeholder="Type your message..."
          onChange={({ currentTarget: input }) => setMessage(input.value)}
        />
        <button className="btn btn-info">Send</button>
      </div>
    </div>
  );
}

export default ChatInput;
