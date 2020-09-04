import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  // token contains {username, isAdmin}
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on all companies. */

  static async getAllCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /** Get details on companies that match filter. */

  static async getFilteredCompanies(query) {
      let res = await this.request(`companies?name=${query}`);
    // console.log("query", query, "company", res.companies)
      return res.companies;
  }

  /** Get details for a given company by handle. */
  static async getDetailsForCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all jobs by all companies. */
  static async getAllJobs(){
    let res = await this.request(`jobs`)
    return res.jobs
  }

  /** Get all jobs with titles filtered by a given search string */
  static async getFilteredJobs(title) {
    let res = await this.request(`jobs?title=${title}`);
    return res.jobs;
  }

  /** Login an existing user */
  static async loginUser(userInfo) {
    let res = await this.request('auth/token', userInfo, 'post')
    return res.token;
    // this.token = res.token;
  }

  /** Register a new user */
  static async registerUser(userInfo) {
    let res = await this.request('auth/register', userInfo, 'post')
    return res.token;
    // this.token = res.token;
  }//TODO: not couple the token with the class directly, just return the token
  //TODO: less responsibility here in api.js (only API calls), more in App.js

  // /** Logout user */
  // static logoutUser() {
  //   this.token = undefined;
  // }//TODO: logging out is not being done here, should not be concerned it; it should be done in React

  /** Get user data */
  static async getUserData(username){
    let res = await this.request(`users/${username}`)
    return res.user
  }

  /** Edit user data */
  static async editUserData(username, data){
    let res = await this.request(`users/${username}`, data, 'patch')
    return res.user
  }

  /** Edit job application status */
  static async editJobApplication(username, data){
    let res = await this.request(`users/${username}/jobs`, data, 'patch')
    return res.user
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi