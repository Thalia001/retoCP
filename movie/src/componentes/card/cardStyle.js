import { makeStyles } from "@material-ui/core";

export const cardStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width:'200px',
        padding:"20px"
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 151,
      },
      

}))

