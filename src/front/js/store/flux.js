console.log(process.env.BACKEND_URL);
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			isLogged: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: (email,password) => {
				const raw = {
					"email": email,
					"password": password
				}
				fetch('https://3001-joaquinalzugara-proyecto-ikm201skgvk.ws-us38.gitpod.io/api/login',{
						method: 'POST',
						headers:{
							'Content-Type':'application/json'
						},
						body: JSON.stringify(raw)
					})
					.then((response)=> {
						if(response.status === 401){
							alert('Bad user or password')
						}
						return response.json()})
					.then(data => {
						localStorage.setItem("token",data.access_token)
						setStore({isLogged:true})
					})
					
			},
			auth: ()=>{
				let token = localStorage.getItem('token');
				token === '' || token === null || token === 'undefined' ? setStore({isLogged:false}):setStore({isLogged:true})
			},
			// obtenemos datos una vez autenticados
			getProfile: ()=>{
				let token = localStorage.getItem('token');

				fetch(process.env.BACKEND_URL + '/api/user/profile',{
					method: 'GET',
					headers:{
						'Content-Type':'application/json',
						'Authorization': 'Bearer ' + token,
					},
				})
				.then((response)=> response.json())
				.then(data => {
				console.log(data)
				})
			},
			logout: ()=>{
				localStorage.removeItem('token');
				setStore({isLogged:false})
			},
			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
