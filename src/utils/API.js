import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=30&nat=us";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
