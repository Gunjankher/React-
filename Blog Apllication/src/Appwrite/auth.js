import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      useraccount = await this.account.create(ID.unique(), email, password);

      if (useraccount) {
        return this.login({email, password});
      } else {
        return useraccount;
      }
    } catch (error) {
      console.log("Appwrite error :: create Account ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite error :: Login ", error);
    }
  }

  async getcurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite error :: current user error ", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite error :: logout error ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
