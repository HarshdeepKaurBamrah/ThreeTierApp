import axios from "axios";

// Correct base URL (should include /api/tasks)
const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/api/tasks`;

console.log("Backend API URL:", apiUrl);

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(`${apiUrl}/${id}`, task);
}

export function deleteTask(id) {
    return axios.delete(`${apiUrl}/${id}`);
}
