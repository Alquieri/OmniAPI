async function buscarAlien(id) {
    try {
      const response = await fetch(`http://localhost:5154/api/Alien/${id} `);
      const data = await response.json();
  
      console.log("Id:", data.id);
      console.log("Nome:", data.nome);
      console.log("Especie:", data.especie);
      console.log("Planeta:", data.planeta);
      console.log("Imagem:", data.imagem);
  
  
    } catch (error) {
      console.error("Erro:", error);
    }
  }
  
  buscarAlien("3");