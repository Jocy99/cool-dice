import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import HighScores from '../components/HighScores.jsx';
// import SkillForm from '../components/SkillForm';

import { QUERY_USER } from '../utils/queries';




const User = () => {
  const { userId } = useParams();

  const { loading } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  // const profile = data?.profile || {};

  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {/* <h2 className="card-header">
        {profile.name}'s friends have endorsed these skills...
      </h2> */}

      {<h1>
        High Scores  
      </h1>}

 
      {<HighScores/>}
      {/* {profile.skills?.length > 0 && <HighScores skills={profile.skills} />} */}
{/* 
      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm profileId={profile._id} />
      </div> */}
    </div>
  );
};

export default User;































// // Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';

// import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

// const SingleThought = () => {
//   // Use `useParams()` to retrieve value of the route parameter `:profileId`
//   const { thoughtId } = useParams();

//   const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
//     // pass URL parameter
//     variables: { thoughtId: thoughtId },
//   });

//   const thought = data?.thought || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="my-3">
//       <h3 className="card-header bg-dark text-light p-2 m-0">
//         {thought.thoughtAuthor} <br />
//         <span style={{ fontSize: '1rem' }}>
//           had this thought on {thought.createdAt}
//         </span>
//       </h3>
//       <div className="bg-light py-4">
//         <blockquote
//           className="p-4"
//           style={{
//             fontSize: '1.5rem',
//             fontStyle: 'italic',
//             border: '2px dotted #1a1a1a',
//             lineHeight: '1.5',
//           }}
//         >
//           {thought.thoughtText}
//         </blockquote>
//       </div>

//       <div className="my-5">
//         <CommentList comments={thought.comments} />
//       </div>
//       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <CommentForm thoughtId={thought._id} />
//       </div>
//     </div>
//   );
// };

// export default SingleThought;
