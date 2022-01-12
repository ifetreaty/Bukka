import axios from "axios";

//I don't really understand line 4../api/auth/ why?
const API_URL = "http://localhost:8080/api/auth/";
// const API_ADMIN_URL = "http://localhost:8080/api/admin/";

class AuthService {
	login(username, password) {
		return axios
			.post(API_URL + "login", {
				username,
				password
			})
			.then(response => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}

				return response.data;
			});
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(username, email, password) {
		return axios.post(API_URL + "register", {
			username,
			email,
			password
		});
	}

	getCurrentUser() {
		return JSON.parse(localStorage.getItem('user'));;
	}
}

export default new AuthService();