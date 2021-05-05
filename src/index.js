import React from 'react'
import faker from 'faker'
import ReactDOM from 'react-dom'
import CommentDetail from './ComentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          text={faker.lorem.words(5)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Juan"
          timeAgo="Today at 2:45AM"
          text={faker.lorem.words(5)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="KKK"
          timeAgo="Yestarday at 4:45PM"
          text={faker.lorem.words(5)}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
)
