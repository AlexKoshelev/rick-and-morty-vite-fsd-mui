import React from "react";
interface ButtonsParams {
  val: "ASC" | "DESC" | null;
  setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
}
const SortedButtons: React.FC<ButtonsParams> = ({ val, setSearchParams }) => {
  return (
    <div>
      <h2>Сортировать</h2>
      <div>
        <button
          style={{ backgroundColor: val === "DESC" ? "#e77fd7" : "gray" }}
          onClick={() => setSearchParams(new URLSearchParams("s=DESC"))}
        >
          Сперва новые
        </button>
        <button
          style={{ backgroundColor: val === "ASC" ? "#e77fd7" : "gray" }}
          onClick={() => setSearchParams(new URLSearchParams("s=ASC"))}
        >
          Сперва старые
        </button>
      </div>
    </div>
  );
};
export default SortedButtons;
