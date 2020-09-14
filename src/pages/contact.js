import React from 'react'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    textAlign: 'center'
    
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

  form: {
    display: 'block',
    margin: '0 auto',
    height:30,
  },
  button: {
    color: 'white',
    marginTop: 30,
    backgroundColor:'#333'
  },
  text: {
    height: 140,
    display: 'block',
    margin: '0 auto',
  }

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
          <div className="form-group">
        <label>お名前<abbr title="required"></abbr>
        <input type="text" className={classes.form} id="name" name="name" placeholder="名前" maxLength="30" minLength="2" required autoComplete="name" />
        </label>
      </div>
      <div className="form-group">
        <label>メールアドレス<abbr title="required"></abbr>
              <input type="email" className={classes.form} id="email" name="email" placeholder="shin-bbb@gmail.com" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autoComplete="email" />
  
        </label>
      </div>
      <div className="form-group">
        <label>お問い合わせ内容<abbr title="required"></abbr>
        <textarea className={classes.text} id="contact" name="content" rows="8" required placeholder="ご自由にお書きください"></textarea>
        </label>
      </div>

      <div className="form-group">
      <button type="submit" className={classes.button}>送信</button>
          </div>
          
        </form>
      </div>
    </section>
  </Layout>
}
