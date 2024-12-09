// Configuração do Firebase
const firebaseConfig = {
	apiKey: "preencher com seu acesso",
	authDomain: "preencher com seu acesso",
	projectId: "preencher com seu acesso",
	storageBucket: "preencher com seu acesso",
	messagingSenderId: "preencher com seu acesso",
	appId: "preencher com seu acesso"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();