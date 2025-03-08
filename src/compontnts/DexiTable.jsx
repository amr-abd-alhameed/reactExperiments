/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import TitleWithDesc from "./TitleWithDesc";

const DexiTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [editUserDetails, setEditUserDetails] = useState({
    name: { first: "", last: "" },
    email: "",
    location: { country: "" },
    nat: "",
    gender: "",
    phone: "",
  });

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  console.log(page);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUserDetails(data[index]);
  };
  const handleSave = () => {
    const updatedUsers = [...data];
    updatedUsers[editIndex] = editUserDetails;
    setData(updatedUsers);
    setEditIndex(null);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserDetails((prevData) => {
      switch (name) {
        case "firstName":
          return {
            ...prevData,
            name: {
              ...prevData.name,
              first: value,
            },
          };
        case "lastName":
          return {
            ...prevData,
            name: {
              ...prevData.name,
              last: value,
            },
          };
        case "email":
          return {
            ...prevData,
            email: value,
          };
        case "country":
          return {
            ...prevData,
            location: {
              ...prevData.location,
              country: value,
            },
          };
        case "nat":
          return {
            ...prevData,
            nat: value,
          };
        case "gender":
          return {
            ...prevData,
            gender: value,
          };
        case "phone":
          return {
            ...prevData,
            phone: value,
          };
        default:
          return {
            ...prevData,
            [name]: value,
          };
      }
    });
  };

  console.log(editUserDetails);

  const firstRef = useRef(true);

  useEffect(() => {
    if (firstRef.current) {
      firstRef.current = false;
      return;
    }

    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://randomuser.me/api/?seed=dexi-interview&page=${page}&results=5`
      );
      if (!response.ok) {
        throw new Error("HTTP Error Status " + response.status);
      }
      const json = await response.json();
      setData([...data, ...json.results]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

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
          {data.map((item, index) => (
            <tr className="mb-4" key={item.login.uuid}>
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
                {editIndex === index ? (
                  <div className="pop-wrapper">
                    <div className="pop">
                      <input
                        type="text"
                        name="firstName"
                        value={editUserDetails.name.first}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={editUserDetails.name.last}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="email"
                        value={editUserDetails.email}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="country"
                        value={editUserDetails.location.country}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="nat"
                        value={editUserDetails.nat}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="gender"
                        value={editUserDetails.gender}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="phone"
                        value={editUserDetails.phone}
                        onChange={handleInputChange}
                      />

                      <button onClick={handleSave}>Save</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="capitalize text-center cursor-pointer bg-amber-300 text-gray-600 w-full"
        onClick={handleLoadMore}
      >
        load more
      </button>
    </div>
  );
};

export default DexiTable;
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState, useRef } from "react";
// import TitleWithDesc from "./TitleWithDesc";

// const DexiTable = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editUserDetails, setEditUserDetails] = useState({});

//   const handleLoadMore = () => {
//     setPage((prev) => prev + 1);
//   };
//   console.log(page);

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditUserDetails(data[index]);
//   };
//   const handleSave = () => {
//     const updatedUsers = [...data];
//     updatedUsers[editIndex] = editUserDetails;
//     setData(updatedUsers);
//     setEditIndex(null);
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "firstName":
//         setEditUserDetails((prevData) => ({
//           ...prevData,
//           name: {
//             ...prevData.name,
//             first: value,
//           },
//         }));
//         break;
//       case "lastName":
//         setEditUserDetails((prevData) => ({
//           ...prevData,
//           name: {
//             ...prevData.name,
//             last: value,
//           },
//         }));
//         break;
//       case "email":
//         setEditUserDetails((prevData) => ({
//           ...prevData,
//           email: value,
//         }));
//         break;
//       case "country":
//         setEditUserDetails((...prevData) => ({
//           ...prevData,
//           location: {
//             ...prevData.location,
//             country: value,
//           },
//         }));
//         break;
//       case "nat":
//         setEditUserDetails((prevData) => ({
//           ...prevData,
//           nat: value,
//         }));
//         break;
//       case "gender":
//         setEditUserDetails((prevData) => ({
//           ...prevData,
//           gender: value,
//         }));
//         break;
//       case "phone":
//         setEditUserDetails((prevData) => ({
//           ...prevData,
//           phone: value,
//         }));
//         break;
//       default:
//         setEditUserDetails((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//     }
//   };

//   console.log(editUserDetails);

//   const firstRef = useRef(true);

//   useEffect(() => {
//     if (firstRef.current) {
//       firstRef.current = false;
//       return;
//     }

//     fetchData();
//   }, [page]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `https://randomuser.me/api/?seed=dexi-interview&page=${page}&results=5`
//       );
//       if (!response.ok) {
//         throw new Error("HTTP Error Status " + response.status);
//       }
//       const json = await response.json();
//       setData([...data, ...json.results]);
//     } catch (err) {
//       setError(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log(data);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

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
//           {data.map((item, index) => (
//             <tr className="mb-4" key={item.login.uuid}>
//               {/* Added key prop */}
//               <td>
//                 <div className="flex items-center gap-2">
//                   <div className="imageHolder">
//                     <img
//                       className="rounded-full"
//                       src={item.picture.thumbnail}
//                       alt={`${item.name.first} ${item.name.last}`}
//                     />
//                   </div>
//                   <TitleWithDesc
//                     title={item.name.first}
//                     desc={item.name.last}
//                   />
//                 </div>
//               </td>
//               <td>
//                 <TitleWithDesc title={item.location.country} desc={item.nat} />
//               </td>
//               <td>
//                 <span className="capitalize font-bold p-1 px-2 text-[#47816a] bg-[#d2fed5] rounded-full">
//                   {item.gender}
//                 </span>
//               </td>
//               <td>{item.cell}</td>
//               <td>
//                 {editIndex === index ? (
//                   <div className="pop-wrapper">
//                     <div className="pop">
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={editUserDetails.name.first}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={editUserDetails.name.last}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         name="email"
//                         value={editUserDetails.email}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         name="country"
//                         value={editUserDetails.location.country}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         name="nat"
//                         value={editUserDetails.nat}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         name="gender"
//                         value={editUserDetails.gender}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         name="phone"
//                         value={editUserDetails.phone}
//                         onChange={handleInputChange}
//                       />

//                       <button onClick={handleSave}>Save</button>
//                     </div>
//                   </div>
//                 ) : (
//                   <button onClick={() => handleEdit(index)}>Edit</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button
//         className="capitalize text-center cursor-pointer bg-amber-300 text-gray-600 w-full"
//         onClick={handleLoadMore}
//       >
//         load more
//       </button>
//     </div>
//   );
// };

// export default DexiTable;
