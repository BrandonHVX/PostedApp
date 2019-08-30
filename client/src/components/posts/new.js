import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { addLike, removeLike, deletePost } from '../../actions/post'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import { width } from '@material-ui/system'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import InsertCommentIcon from '@material-ui/icons/InsertComment'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '26.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500],
      margin: 10,
      width: 10,
      height: 10
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100
    }
  })
)

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className="post ">
    <Card className={useStyles.card}>
      {' '}
      <div card-bg />
      <CardHeader
        className="post-header"
        avatar={<img src={avatar} aria-label="recipe" className="round-img" />}
        title={<Link to={`/profile/${user}`}>{name}</Link>}
        action={
          !auth.loading &&
          user === auth.user._id && (
            <a onClick={() => deletePost(_id)}>
              <i className="fas fa-times" />
            </a>
          )
        }
      />
      <CardContent className="post-card">
        <p>
          <h6>{text}</h6>
        </p>
      </CardContent>
      <CardActions className="actions">
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {showActions && (
          <Fragment>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge
                badgeContent={likes.length > 0 && <span>{likes.length}</span>}
                color="secondary"
              >
                {' '}
                <FavoriteIcon onClick={() => addLike(_id)} />{' '}
              </Badge>
            </IconButton>
            <a onClick={() => removeLike(_id)}>unlike</a>
            <Link to={`/posts/${_id}`}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge
                  badgeContent={
                    comments.length > 0 && <span>{comments.length}</span>
                  }
                  color="secondary"
                >
                  <InsertCommentIcon />
                </Badge>
              </IconButton>
            </Link>{' '}
            <IconButton aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </Fragment>
        )}{' '}
      </CardActions>
    </Card>
  </div>
)

PostItem.defaultProps = {
  showActions: true
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem)
