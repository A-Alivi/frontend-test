import { data } from "autoprefixer";
import { create } from "zustand";
import jsonData from "../../../public/data.json"

const useStore = create((set) => ({
  data: jsonData
}));

export default useStore;
