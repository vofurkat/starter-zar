import {deleteAsync} from "del";

export default () => {
    return deleteAsync("./dist");
}
