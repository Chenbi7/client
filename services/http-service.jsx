import React from "react";
import axios from "axios";
import LocalStorageService from "../services/local-storage-service";

// ngRock path
const babySitterUrl = "https://8535-176-231-22-145.ngrok-free.app";

class HttpService {
  static LOGGED_IN = "loggedIn";
  static LOGGED_OUT = "loggedOut";
  static LOADING = "loading";

  static async getAllAvailableBabysitters() {
    return await axios.get(
      babySitterUrl + "/allAvailableBabysitters",
      await this.getHeader()
    );
  }

  static async getAllMeetingsByParent(parentId) {
    const headers = await this.getHeader();
    return await axios.post(
      babySitterUrl + "/meetingsByParent",
      { parentId },
      { headers }
    );
  }

  static async getFeedbackByBaybysitter(babysitterId) {
    const headers = await this.getHeader();
    return await axios.post(
      babySitterUrl + "/feedbacksByBabysitter",
      { babysitterId },
      { headers }
    );
  }

  static async getFeedbackByParent(parentId) {
    const headers = await this.getHeader();
    return await axios.post(
      babySitterUrl + "/feedbacksByParent",
      { parentId },
      { headers }
    );
  }

  static async sendCode(user) {
    return await axios.post(babySitterUrl + "/sendCodeToMail", user);
  }

  static async getAllUnAuthorizedUsers() {
    console.log(babySitterUrl + "/unAuthorizedUsers");
    return await axios.get(
      babySitterUrl + "/unAuthorizedUsers",
      await this.getHeader()
    );
  }

  static async login(user) {
    // does not all fields in user

    let data;
    data = await axios
      .post(babySitterUrl + "/login", user)
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        throw new Error("בעיית תקשורת עם השרת");
      });

    if (data) {
      const user = JSON.parse(JSON.stringify(data)).user;
      LocalStorageService.setUserStatusAsLoggedIn().then();
      LocalStorageService.storeUser(data).then();
      return user;
    } else {
      throw new Error("מייל או סיסמה אינם נכונים");
    }
  }

  static async logInWithToken() {
    return await axios
      .post(babySitterUrl + "/loginWithToken", {}, await this.getHeader())
      .then((res) => {
        LocalStorageService.storeUser(res.data).then();
        LocalStorageService.setUserStatusAsLoggedIn().then();
        return res.data;
      });
  }

  static async registration(user) {
    return await axios
      .post(
        babySitterUrl + "/newUser",
        user,
        await this.getHeaderForLoggedOutUser()
      )
      .then((user) => {});
  }

  static async updateUserPassword(user) {
    return await axios.put(
      babySitterUrl + "/updateUser",
      user,
      await this.getHeaderForLoggedOutUser()
    );
  }

  static async deleteUser(user) {
    return await axios.post(
      babySitterUrl + "/deleteUser",
      user,
      await this.getHeader()
    );
  }

  static async getHeader() {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer ",
    };
    let currUser = {};
    await LocalStorageService.getUser().then((user) => (currUser = user));
    headers.Authorization += currUser.token;
    return {
      headers: headers,
    };
  }

  static async getHeaderForLoggedOutUser() {
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer ",
    };
    let token = {};
    await LocalStorageService.getNonUserToken().then((t) => (token = t));
    headers.Authorization += token;
    return {
      headers: headers,
    };
  }

  static async doesUserExist(email) {
    let res = await axios.post(babySitterUrl + "/doesUserExist", email);

    return res.data;
  }

  static async checkCodeOfVerifyMail(user) {
    let data = null;
    await axios
      .post(babySitterUrl + "/checkCode", user)
      .then(async (res) => {
        await LocalStorageService.storeNonUserToken(res.data.token);
        data = res.data;
      })
      .catch(() => {
        throw new Error("בעיית תקשורת עם השרת");
      });

    if (data.errorMessage) {
      throw new Error(data.errorMessage);
    } else {
      return data;
    }
    return {};
  }
}

export default HttpService;
