import React from 'react'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),

    },
  },
  skilltheme: {
    color: 'white',
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100px',
    textAlign: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'white',
    textAlign: 'center',
    lineHeight: '80px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'black'
  },
  block: {
    display: 'block'
  },
  mail: {
    width: 500,
    height: 500,
  },
  subtitle: {
    fontSize: '2rem',
    borderBottom: 'dashed 1px #87CEFA ',
    textAlign: 'center',
    margin: '10px auto',
    width:200
  },
}));

export default function Contact() {

  const classes = useStyles();

  return <Layout>

    <div className={classes.skilltheme}>
      <div className={classes.circle}>contact</div>
    </div>
    <section className="newsletter-page">
      <div className="page-center">
        <h3 className={classes.subtitle}>Contact Form</h3>


        {/* //ここから */}
        <form className={classes.root} name="testing-contact" method="post" netlify-honeypot="bot-field" data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="testing-contact" />
          {/* ここまで */}
          {/* Netlifyでフォームの登録をするための記述 */}
          <TextField id="standard-basic" label="名前" className={classes.block} />
          <TextField id="filled-basic" label="メールアドレス" variant="filled" className={classes.block} />
          <TextField id="standard-full-width" label="お問い合わせ内容" variant="outlined" className={classes.block} fullWidth margin="normal" multiline rows={4} />
          
          <Button variant="contained" color="primary" type="submit">
            submit
      </Button>
        </form>
      </div>
    </section>
  </Layout>
}
