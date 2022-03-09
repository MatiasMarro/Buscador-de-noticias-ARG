import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../Hooks/useSelect'

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value:'general',label: 'General'},
        {value:'buisness',label: 'Negocios'},
        {value:'entretainment',label: 'Entretenimiento'},
        {value:'health',label: 'Salud'},
        {value:'science',label: 'Ciencia'},
        {value:'sports',label: 'Deportes'},
        {value:'technoloy',label: 'Tecnologia'}
    ]

    //utklizando custon hooks
    const [ categoria, SelectNoticas] = useSelect('general',OPCIONES);
    //submit al form, pñasando categoria app.jsx
    const buscarNoticias = e =>{
        e.preventDefault();

        setCategoria(categoria)
    }


  return (
    <div className={`${styles.buscador} row`}>
        <div className='col s12 m8 offset-m2'>
            <form
                 onSubmit={buscarNoticias}
            >
                <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                
                <SelectNoticas />

                <div className='input-field col s12'>
                    <input
                        type="submit"
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value="Buscar"
                    />
                </div>
            </form>
        </div>
    </div>
  )
};

export default Formulario