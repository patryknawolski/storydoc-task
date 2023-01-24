import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Item } from "./Item";
import { EditableText } from "./EditableText";
import { useState } from "react";

const Page = styled('main')({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%',
})

const Layout = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  width: 1200
})

function App() {
  const [items, setItems] = useState<Array<{
    id: number;
    icon: string;
  }>>([{
    id: 1,
    icon: 'add_circle'
  }, {
    id: 2,
    icon: 'add_circle'
  }, {
    id: 3,
    icon: 'add_circle'
  }])

  const handleIconChange = ({icon, id}: {icon: string; id: number}) => {
    setItems(prevItems => {
      const newItems = [...prevItems];

      const itemToBeChanged = newItems.find(item => item.id === id)

      if (!itemToBeChanged) return newItems

      const indexOfItemToBeChanged = newItems.indexOf(itemToBeChanged)
      newItems[indexOfItemToBeChanged] = { ...itemToBeChanged, icon }
      
      return newItems
    })
  }

  return (
    <Page>
      <Layout p={4}>
        <Box display="flex" justifyContent={"center"} mb={2}>
          <EditableText text="Insert a title here" component="h1" variant="h4" align="center" fontWeight={700} />
        </Box>

        <Grid container justifyContent="center" columnSpacing={8}>
          {items.map((item, index) => (
            <Grid item xs={4}>
              <Item id={item.id} icon={item.icon} onIconChange={({icon, id }) => handleIconChange({icon, id})} text="Insert text here" additionalText="Add here your additional text"/>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </Page>
  );
}

export default App;
