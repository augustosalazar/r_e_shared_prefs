import LocalPreferences from "../utils/local_preferences";

const PrefsService = {
  async login(email, password) {
    console.log("PrefsService.login called with:", email, password);
    const storedEmail =
      (await LocalPreferences.retrieveData("email", "string")) || "noemail";
    const storedPassword =
      (await LocalPreferences.retrieveData("password", "string")) ||
      "nopassowrd";

    console.log(
      "PrefsService.login - stored credentials:",
      storedEmail,
      storedPassword
    );

    if (email === storedEmail && password === storedPassword) {
      console.log(
        "PrefsService.login - credentials match, setting isLoggedIn to true"
      );
      await LocalPreferences.storeData("isLoggedIn", true);
      return true;
    } else {
      console.log("PrefsService.login - credentials don't match");
      throw new Error("Invalid credentials");
    }
  },

  async signUp(email, password) {
    console.log("PrefsService.signUp function started");
    console.log("prefs signupUser called with:", email, password);
    await LocalPreferences.storeData("email", email);
    await LocalPreferences.storeData("password", password);

    return;
  },

  async logout() {
    LocalPreferences.storeData("isLoggedIn", false);
    return;
  },

  async isLoggedIn() {
    const isLoggedIn = await LocalPreferences.retrieveData(
      "isLoggedIn",
      "bool"
    );
    if (isLoggedIn === null) {
      return false; // Default to false if not found
    }
    return isLoggedIn;
  },

  async getLoggedUser() {
    const email = await LocalPreferences.retrieveData("email", "string");
    const password = await LocalPreferences.retrieveData("password", "string");
    return { email, password };
  },
};

export default PrefsService;
