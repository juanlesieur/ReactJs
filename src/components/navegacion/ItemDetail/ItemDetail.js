import './ItemDetail.css';
import { useState, useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ItemCount from "../ItemCount/ItemCount";



export default function ItemDetail({data}) {
    const [quantityItem, setQuantityItem] = useState(0)
    const {addProducts, products} = useContext(CartContext)
    console.log("data item : ", data)
    const [itemCart, setItemCart] = useState(
        {
            name: data.name,
            id: data.id,
            price: data.price,
            image: data.img,
            quantity: 0,
        }
    )

    const theme = createTheme({
        palette:{
            base: {
                main: '#070802'
            },
            background: {
                main: '#e9ff41',
            },
        },
    });

    const onAdd = (value, name) => {
        itemCart.quantity = value
    } 

    const sendItem = () => {
        addProducts(itemCart)
    }

    return (
        <>
            <Container className="product-item-container">
                <ThemeProvider theme={theme}>
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={4} className="container-img-detalle">
                                <img src={data.img}/>
                            </Grid>
                            <Grid item xs={4}>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ea ex earum ut, vitae neque fugit nemo consectetur repellat vel. Obcaecati dignissimos quis iusto hic molestiae vero cumque quod libero.</p>
                            </Grid>
                            <Grid item xs={4}>
                                <h2>{data.name}</h2>
                                <p>$ {data.price}</p>
                                <ItemCount stock={data.stock} onAdd={onAdd}/>
                                <Button variant="contained" color="background" onClick={sendItem}>
                                    Comprar
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            </Container>
        </>
    )

}



