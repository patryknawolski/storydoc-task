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
  const [title, setTitle] = useState('Insert a title here');
  const [items, setItems] = useState<Array<{
    id: number;
    icon: string;
    text: string;
    additionalText: string;
  }>>([{
    id: 1,
    icon: 'add_circle',
    text: "Insert text here",
    additionalText: "Add here your additional text"
  }, {
    id: 2,
    icon: 'add_circle',
    text: "Insert text here",
    additionalText: "Add here your additional text"
  }, {
    id: 3,
    icon: 'add_circle',
    text: "Insert text here",
    additionalText: "Add here your additional text"
  }])

  const handleTitleEdit = (text: string) => {
    setTitle(text)
  }

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

  const handleTextEdit = ({text, id}: {text: string; id: number}) => {
    setItems(prevItems => {
      const newItems = [...prevItems];

      const itemToBeChanged = newItems.find(item => item.id === id)

      if (!itemToBeChanged) return newItems

      const indexOfItemToBeChanged = newItems.indexOf(itemToBeChanged)
      newItems[indexOfItemToBeChanged] = { ...itemToBeChanged, text }
      
      return newItems
    })
  }

  const handleAdditionalTextEdit = ({text, id}: {text: string; id: number}) => {
    setItems(prevItems => {
      const newItems = [...prevItems];

      const itemToBeChanged = newItems.find(item => item.id === id)

      if (!itemToBeChanged) return newItems

      const indexOfItemToBeChanged = newItems.indexOf(itemToBeChanged)
      newItems[indexOfItemToBeChanged] = { ...itemToBeChanged, additionalText: text }
      
      return newItems
    })
  }

  return (
    <Page>
      <Layout p={4}>
        <Box display="flex" justifyContent={"center"} mb={2}>
          <EditableText text={title} component="h1" variant="h4" align="center" fontWeight={700} onEdit={handleTitleEdit}/>
        </Box>

        <Grid container justifyContent="center" columnSpacing={8}>
          {items.map((item, index) => (
            <Grid key={item.id} item xs={4}>
              <Item id={item.id} icon={item.icon} onIconChange={({icon, id }) => handleIconChange({icon, id})} text={item.text} additionalText={item.additionalText} onTextEdit={({text, id }) => handleTextEdit({text, id})} onAdditionalTextEdit={({text, id }) => handleAdditionalTextEdit({text, id})}/>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </Page>
  );
}

export default App;
