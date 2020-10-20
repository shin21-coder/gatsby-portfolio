import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from "../components/layout";
import Button from '@material-ui/core/Button';
import SEO from '../components/SEO'
import { Link } from 'gatsby';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
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
  button: {
    display: 'block',
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <SEO />

      <div className={classes.skilltheme}>
        <div className={classes.circle}>Home</div>
      </div>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            variant="scrollable"
          >

            <Tab label="採用担当の皆様" {...a11yProps(0)} />
            <Tab label="なぜプレイヤーか？"{...a11yProps(1)} />
            <Tab label="何がしたいか？" {...a11yProps(2)} />
            <Tab label="何ができるのか？" {...a11yProps(3)} />
            <Tab label="将来の目標" {...a11yProps(4)} />
            <Tab label="なぜエンジニアか" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <p>いつまでもプレイヤーとして居続ける。</p>
          <p>それが自分のモットーです。</p>
          <Button variant="contained" color="secondary">
            <Link to="/contact" className={classes.button}>お問い合わせはコチラ</Link>
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>人を操るだけ操って自分は何もしない、という生き方が自分には合わないと思いました。</p>
          <p>自分が直接手を加えたプロジェクトで社会貢献が出来たら嬉しいです。</p>



        </TabPanel>
        <TabPanel value={value} index={2}>
          <p>脳を使って工夫できる仕事がしたいです。</p>
          <p>仕事の中でも特にコードを書き続ける仕事が一番好きです。希望職種としてはフロントエンドエンジニアですが、頭を使ってコードを書ける仕事であれば、言語は特に問いません。</p>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <p>HTML,CSS,JavaScript,Gatsby.js,WordPress</p>
          <p>デザインカンプからのコーディング、WordPressのテーマカスタマイズ、Gatsby.jsを使用したWeb制作ができます。</p>
          
        </TabPanel>
        <TabPanel value={value} index={4}>
          <p>自分は理学療法士として医療・介護業界に3年間従事しておりました。</p>
          <p>そのため、フロントエンドエンジニアとして医療・介護業界に携われたら本望です。</p>
          <p>しかし、今後の就職先によってはその目標も変更される可能性が高いため、今は何でも勉強したいと思っております。</p>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <p>理学療法士の職業は好きですが、どれだけ勉学に励んでも得られるのは知識だけでそれを実際の仕事で活かすことが出来ませんでした。セミナーにたくさん参加したり、論文を100本読んだところで、実際に患者様に提供できるのは「運動しましょう」の一言で完結してしまいます。そんなもやもやした気持ちを抱えながら、偶然にもプログラミングに出会いました。プログラミングは、勉強して得た知識が形となって現れるので、勉強していてとても楽しいです。プログラミングの中でも、フロントエンドは、自分の書いたコードがすぐに形になって現れるところが好きなポイントです。理学療法に関しては、一度距離を置いて、これまでとは違う形で関われたらと思います。</p>
        </TabPanel>
      </div>
    </Layout>

  );
  
}
