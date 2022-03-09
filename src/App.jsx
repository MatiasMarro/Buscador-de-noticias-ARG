import { useState , useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definir la categoria y noticias
  const  [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () =>{
      const url =`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=4cc599c6b035413cb82afc7798c50418`

      const respuesta = await fetch(url)
      const noticias = await respuesta.json()

      setNoticias(noticias.articles)
      
    }
    consultarAPI()
  }, [categoria])



  return (
    <>
      <Header 
        titulo="Buscador de noticas"
      />

      <div className='container white'>
        <Formulario 
          setCategoria={setCategoria}
        />
      </div>
      <ListadoNoticias 
        noticias={noticias}
      />
    </>
  )
}

export default App
