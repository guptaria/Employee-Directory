import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=10&nat=30";

export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
