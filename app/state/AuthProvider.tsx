import React, { useEffect } from "react"; // Add this import
import PrefsService from "../services/prefs_service"; // Import SharedPrefsService

export const AppContext = React.createContext({
  login: false,
  isLoading: true,
  loginUser: async (_email: string, _password: string) => { },
  logoutUser: async () => { },
  signupUser: async (_email: string, _password: string) => { },
  getLoggedUser: async () => "nouser"
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [login, setLogin] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  // Load the initial value from shared preferences
  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const storedLoginState = await PrefsService.isLoggedIn();
        console.log("AuthProvider: Loaded login state:", storedLoginState);
        setLogin(storedLoginState ?? false); // Default to false if null
      } catch (error) {
        console.error("AuthProvider: Error loading login state:", error);
        setLogin(false);
      } finally {
        setIsLoading(false);
      }
    };

    loadLoginState();
  }, []);

  const loginUser = async (email: string, password: string) => {
    console.log("provider loginUser called with:", email, password);
    try {
      await PrefsService.login(email, password);
      console.log("AuthProvider: Login successful, setting login state to true");
      setLogin(true);
    } catch (error) {
      throw error;
    }
  };
  const logoutUser = async () => {
    await PrefsService.logout();
    setLogin(false);
  };
  const signupUser = async (email: string, password: string) => {
    console.log("provider signupUser called with:", email, password);
    try {
      await PrefsService.signUp(email, password);
    } catch (error) {
      console.error("Signup failed:", error);
      throw error; // Propagate the error
    }
  };
  const getLoggedUser = async () => {
    try {
      const user = await PrefsService.getLoggedUser();
      // If user is an object, return its email property, otherwise return "nouser"
      if (user && typeof user === "object" && "email" in user) {
        return user.email as string;
      }
      return "nouser";
    } catch (error) {
      console.error("Error retrieving logged user:", error);
      return "nouser"; // Default value if error occurs
    }
  };

  return (
    <AppContext.Provider
      value={{ login, isLoading, loginUser, logoutUser, signupUser, getLoggedUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AuthProvider;
