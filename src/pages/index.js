import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from "../components/Layout";
import Button from '@material-ui/core/Button';
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
  skilltheme:{
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
    color:'black'
  },
  button: {
    display: 'block',
    color: 'white',
    textDecoration:'none'
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

            <Tab label="はじめに" {...a11yProps(0)} />
            <Tab label="なんで爆速？"{...a11yProps(1)}  />
            <Tab label="Gatsby.jsとは" {...a11yProps(2)} />
            <Tab label="他のメリットは？" {...a11yProps(3)} />
            <Tab label="このサイトについて" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div>爆速のページ遷移を、あなたのホームページに採用しませんか？</div>
          
          <Button variant="contained" color="secondary">
            <Link to="/contact" className={classes.button}>お問い合わせはコチラ</Link>
      </Button>
      </TabPanel>
        <TabPanel value={value} index={1}>
          <p>Gatsby.jsという技術を使用しています。</p>
          <p>これを利用すると、WordPressやContentfulなどのCMSで得た情報を爆速で表示することが可能です。</p>
          
          
          
      </TabPanel>
        <TabPanel value={value} index={2}>
          <h3>Gatsby.jsとは</h3>
          <p>React.jsをベースにした静的サイトジェネレーターです。</p>
          <h4>静的サイトジェネレーターって？</h4>
          <p>静的サイトジェネレーターとは、Webページを効率よく高速にクライアントへ提供できることを目的としたフレームワークで、名前の通り静的なサイトをビルドによって生成することでサイトを構築します。</p>
          <h4>ビルドとは</h4>
          <p>構築したプログラムの元ネタから、実際に動くプログラムを作り出すことです</p>

          <h4>WordPressの場合</h4>
          <ol>
            <li>ユーザーがWebサイトにアクセスする</li>
            <li>URLに応じてデータベースにデータを取得する</li>
            <li>取得したデータをもとにHTMLファイルを生成</li>
            <li>ユーザーにWebページを表示</li>
            <li>ここにボックスタイトルを入力</li>
          </ol>
            
          <h4>静的サイトジェネレーターの場合</h4>
          <ol>
            <li>ユーザーがWebサイトにアクセスする</li>
            <li>ユーザーにWebページを表示</li>
          </ol>
      </TabPanel>
        <TabPanel value={value} index={3}>
        <h4>セキュリティが安全、サーバーレスのため、コストが抑えられる</h4>
          <p>Gatsby.jsでWebページを表示する際は、データベースにアクセスする必要がありません。動的な処理が必要ないので、悪意のあるプログラムがデータベースに流し込まれる心配がないです。</p>
          <p>静的サイトジェネレーターで生成されたファイルはブラウザですべて解釈可能なため、ファイルの実行はブラウザにより行われるため、 効率がよく、高速にレスポンスを返すことができるというものです。これは、サーバーレスという仕組みですが、セキュリティリスクやサーバー管理コストが抑えられます。</p>
      </TabPanel>
        <TabPanel value={value} index={4}>
        <p>こちらのサイトはGatsby.js,Contentful,Netlifyを用いて構成されています。また、レイアウトやボタン、ヘッダーやフッターなどにmaterial-uiを使用しています。</p>
      </TabPanel>
      </div>
    </Layout>

  );
}
