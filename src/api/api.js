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
    console.log("query", query, "company", res.companies)
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
  }

  /** Register a new user */
  static async registerUser(userInfo) {
    let res = await this.request('auth/register', userInfo, 'post')
    return res.token;
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi