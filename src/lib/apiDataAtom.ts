import {atom} from "jotai";
import {ApiResponse} from "../utils/apiResponse";

const apiDataAtom = atom<ApiResponse | null>(null);

export default apiDataAtom;
