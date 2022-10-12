/*
 * Imports.
 */
import { Button, Card } from "react-daisyui";

const ListItem = (props) => {
    const { itemId, itemTitle, itemShortDescription, itemLongDescription, itemPrice, itemPictureUrl } = props;

    return (
        <Card imageFull>
            <Card.Image src={ itemPictureUrl } alt={ itemShortDescription } />
            <Card.Body>
                <Card.Title tag="h2">{ itemTitle }</Card.Title>
                <p className="ListItem-itemLongDescription">{ itemLongDescription }</p>
                <p className="ListItem-itemPrice">{ itemPrice }</p>
                <Card.Actions className="justify-end">
                    <Button color="primary">Agregar al Carrito</Button>
                </Card.Actions>
            </Card.Body>
        </Card>
    )
}

export default ListItem;