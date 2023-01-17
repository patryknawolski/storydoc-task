import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Item } from "./Item";
import { EditableText } from "./EditableText";

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
  return (
    <Page>
      <Layout p={4}>
        <Box display="flex" justifyContent={"center"} mb={2}>
          <EditableText text="Insert a title here" component="h1" variant="h4" align="center" fontWeight={700} />
        </Box>

        <Grid container justifyContent="center" columnSpacing={8}>
          <Grid item xs={4}>
            <Item Icon={AddCircleIcon} text="Insert text here" additionalText="Add here your additional text"/>
          </Grid>
          <Grid item xs={4}>
            <Item Icon={AddCircleIcon} text="Insert text here" additionalText="Add here your additional text"/>
          </Grid>
          <Grid item xs={4}>
            <Item Icon={AddCircleIcon} text="Insert text here" additionalText="Add here your additional text"/>
          </Grid>
        </Grid>
      </Layout>
    </Page>
  );
}

export default App;
