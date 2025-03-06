// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import TitleWithDesc from "./TitleWithDesc";

// const DexiTable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://randomuser.me/api/?seed=dexi-interview&page=1&results=5"
//         );
//         if (!response.ok) {
//           throw new Error("HTML error happened code is : " + response.status);
//         }
//         const json = response.json();
//         setData(json.results);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <table className="userTable w-full overflow-hidden mb-[20px] rounded-[20px] border-collapse">
//         <thead>
//           <tr className="bg-[#f9fafb] text-[#8895a0]">
//             <th>Name</th>
//             <th>Country</th>
//             <th>Gender</th>
//             <th>Phone</th>
//             <th>Edit</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div>
//                 <div className="imageHolder">
//                   <image />
//                 </div>
//                 <TitleWithDesc title={"amr"} desc={"frontend"} />
//               </div>
//             </td>
//             <td>
//               <TitleWithDesc title={"Egypt"} desc={"EG"} />
//             </td>
//             <td>
//               <span className="capitalize font-bold p-1 px-2 text-[#47816a] bg-[#d2fed5] rounded-full">
//                 female
//               </span>
//             </td>
//             <td>01112517548</td>
//             <td>
//               <button className="capitalize text-[#5f5ae7] font-bold">
//                 edit
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DexiTable;

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import TitleWithDesc from "./TitleWithDesc";

const DexiTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?seed=dexi-interview&page=1&results=5"
        );
        if (!response.ok) {
          throw new Error("HTTP Error Status " + response.status);
        }
        const json = await response.json();
        setData(json.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <table className="userTable w-full overflow-hidden mb-[20px] rounded-[20px] border-collapse">
        <thead>
          <tr className="bg-[#f9fafb] text-[#8895a0]">
            <th>Name</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="mb-4" key={item.login.uuid}>
              {" "}
              {/* Added key prop */}
              <td>
                <div className="flex items-center gap-2">
                  <div className="imageHolder">
                    <img
                      className="rounded-full"
                      src={item.picture.thumbnail}
                      alt={`${item.name.first} ${item.name.last}`}
                    />
                  </div>
                  <TitleWithDesc
                    title={item.name.first}
                    desc={item.name.last}
                  />
                </div>
              </td>
              <td>
                <TitleWithDesc title={item.location.country} desc={item.nat} />
              </td>
              <td>
                <span className="capitalize font-bold p-1 px-2 text-[#47816a] bg-[#d2fed5] rounded-full">
                  {item.gender}
                </span>
              </td>
              <td>{item.cell}</td>
              <td>
                <button className="capitalize text-[#5f5ae7] font-bold">
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DexiTable;
