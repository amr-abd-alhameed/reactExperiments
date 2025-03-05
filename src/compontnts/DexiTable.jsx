import React from "react";
import TitleWithDesc from "./TitleWithDesc";

const DexiTable = () => {
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
          <tr>
            <td>
              <div>
                <div className="imageHolder">
                  <image />
                </div>
                <TitleWithDesc title={"amr"} desc={"frontend"} />
              </div>
            </td>
            <td>
              <TitleWithDesc title={"Egypt"} desc={"EG"} />
            </td>
            <td>
              <span className="capitalize font-bold p-1 px-2 text-[#47816a] bg-[#d2fed5] rounded-full">
                female
              </span>
            </td>
            <td>01112517548</td>
            <td>
              <button className="capitalize text-[#5f5ae7] font-bold">
                edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DexiTable;
