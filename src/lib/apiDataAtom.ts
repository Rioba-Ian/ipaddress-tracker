import {atom} from "jotai";
import {ApiResponse} from "../utils/apiResponse";

export const userLocationOnLoad = atom<[lat: number, lng: number] | null>(null);

const apiDataAtom = atom<ApiResponse | null>(null);

export default apiDataAtom;
