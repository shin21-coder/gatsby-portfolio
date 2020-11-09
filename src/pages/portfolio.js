import React from 'react'
import Layout from "../components/layout";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import ccccz from "../../static/ccccz.png"
import tunagu from "../../static/tunagu.png"
import isara from "../../static/isara-min.png"
import norikoe from "../../static/norikoe-min.png"
import semipure from "../../static/semipure-min.png"
import lpccccz from "../../static/lpccccz.png"
import scrums from "../../static/scrums.png"
import wordpress from "../../static/wordpress.png"

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    display: 'flex',
    flexWrap:'wrap',
    padding:0,
  },
  media: {
    height: 200,
  },
  center: {
    textAlign: 'center',
    fontSize: '2rem',
    borderBottom: 'dashed 1px #87CEFA',
    width: 200,
    margin:'20px auto'
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
});


const Portfolio = ({ data }) => {
  const { allContentfulImage: { edges } } = data


  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.skilltheme}>
        <div className={classes.circle}>Portfolio</div>
      </div>
        <h3 className={classes.center}>Portfolio Lists</h3>
      <Card className={classes.root}>
      <CardActionArea>
      <a href="https://cccc-z.net/"><CardMedia
          className={classes.media}
          image={ccccz}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        /></a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            株式会社４C'z様
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          ※実案件　既存のWordPressテーマの編集を行っています。10時間程度で作成

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <a href="https://wanchan21.xsrv.jp/"><CardMedia
          className={classes.media}
          image={tunagu}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        /></a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              つなぐつむぐ様
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
          ※実案件　こちらはWordPressのテーマカスタマイズをしました。ファーストビューにスライドショーを配置したり、サイドメニューをウィジェットで管理できるようにしました。また、初期は予約システムを導入したいとの依頼をいただいたので、AmeliaやBooking Systemなどのプラグインの実装などを行いました。（最終的には使用しないことになりました。）現在制作して4ヶ月程度経過していますが、クライアントからの返信が遅く、製作途中です。
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <a href="https://pt-programmer.com/isaracording/index.html"><CardMedia
          className={classes.media}
          image={isara}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        /></a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              isara模写
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
          こちらは模写サイトの例としてよく用いられるisaraの模写コーディングになります。作成したのは4ヶ月前ほどです。30時間程度で作成。Basic認証あり（ID,Passwordともに「wa」です。）
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <a href="https://pt-programmer.com/semipre_legal_1/"><CardMedia
          className={classes.media}
          image={semipure}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        /></a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              セミプレ様
            
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
              「セミプレ」という場所で配布されたデザインカンプをコーディングしたものです。10時間程度で作成（Design by JohnyWorks）　Basic認証あり（ID,Passwordともに「wa」です。）
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <a href="https://pt-programmer.com/salon_lp/index.html"><CardMedia
          className={classes.media}
          image={norikoe}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        /></a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              挫折乗り越えサロン様
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
          こちらは現在所属している「挫折乗り越えサロン」というオンラインサロンの紹介LPです。PhotoShopからのコーディングを行いました。（こちらの本物を作成したのは他者になります。自分のはあくまで練習です）30時間程度で作成
              Basic認証あり（ID,Passwordともに「wa」です。）
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <a href="http://pt-programmer.com/salon/index.html"><CardMedia
          className={classes.media}
          image={scrums}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        /></a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              SCRUMS様
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
          ※実案件　これが一番最近コーディングしたLPです。スライダーやスクロールイベント、ハンバーガーメニューなどJavaScriptを多く使用しました。また、こちらもXDデザインよりコーディング致しました。20時間程度で作成

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <a href="http://lp.cccc-z.net/"><CardMedia
          className={classes.media}
          image={lpccccz}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        /></a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              株式会社4C'z様
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
          ※実案件　株式会社４C'zというところのLPです。既存のWordPressのテーマを簡単にカスタマイズしました。ほぼブロックエディタのみで完成させました。こちらは完成済みです。20時間程度で作成
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
      <a href="http://portfolio.pt-programmer.com/"><CardMedia
          className={classes.media}
          image={wordpress}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        />  </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              XDデザインからのWordPress化
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
          WordPressを用いた企業サイトの構築例です。XDデザインよりコーディングからWordPress化までおこなっています。Topの実例部分と料金部分はカスタムフィールドでクライアント様からも変更しやすくしており、お知らせ部分はカスタム投稿タイプで対応しました。30時間程度で作成。
また、記事ページでは関連記事やおすすめ記事を実装しており、記事をSNSでも共有できるようにしております。お問合せフォームからの自動返信メールの設定も行っております。Basic認証あり（ID,Passwordともに「wa」です。）
      
          </Typography>
            </CardContent>
          
      </CardActionArea>
      <CardActions>

      </CardActions>
      </Card>
      
  
      
    </Layout>
  )
}



export const query = graphql`
  {
    allContentfulImage {
      edges {
        node {
          portfolio {
            fixed {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
export default Portfolio