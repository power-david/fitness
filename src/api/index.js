export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export async function getActivities() {
    try {
      const response = await fetch(`${BASE_URL}/activities`);
      const data = response.json();
  
      return data;
    } catch (error) {
      throw error;
    }
  }

export async function postActivity(name, description) {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        return;
      }
  
      const res = await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, description }),
      });
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      throw error;
    }
}

export async function getRoutines() {
    try {
      const response = await fetch(`${BASE_URL}/routines`);
      const data = response.json();
  
      return data;
    } catch (error) {
      throw error;
    }
}

export const createRoutine = async(name, goal, isPublic) => {
    try{
        const token = localStorage.getItem("token");
        if(!token) return
        const response = await fetch(`${BASE_URL}/routines`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    goal: goal,
                    isPublic: isPublic
                })
            });
            const data = await response.json();
            return data
    }catch(error){
        throw error
    }
}

export async function registerUser(username, password) {
    try {
      const res = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      const { token, user } = await res.json();
  
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      throw error;
    }
  }

export async function loginUser(username, password) {
    try {
      const res = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      const { token, user } = await res.json();
  
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      throw error;
    }
}

export function logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}

export async function getMe() {
    const token = localStorage.getItem("token");
  
    if (!token) {
      return;
    }
  
    try {
      const res = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      throw error;
    }
}

export async function getRoutinesByUsername(username) {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : "";
  
      const res = await fetch(`${BASE_URL}/users/${username}/routines`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
  
      return data;
    } catch (error) {
      throw error;
    }
}