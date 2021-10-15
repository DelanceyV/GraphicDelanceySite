import { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import { PAGES } from '../shared/pages';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: PAGES
    };
  }

  render() {

    const Pages = (this.state.pages.map(page =>
      (page.title !== 'Home') ?
        <Button key={page.id} href={page.linkTo} size="xxl" className="home-btn">{page.title}</Button>
      : 
        <span></span>
    ))
    return (
      <div className="center">
        <style type="text/css">
          {`
          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 2rem;
          }
          `}
        </style>
        <ButtonGroup vertical >
          {Pages}
        </ButtonGroup>
      </div>
    );
  }
}

//       OLD
//       <div className='container'>
//         <div className='row'>
//           <div className='card btn'>
//             <a href='/gallery'>
//                 View Gallery
//             </a>
//           </div>
//           <div className='card btn'>
//             <a href='/game'>
//               Play Game
//             </a>
//           </div>
//           <div className='card btn'>
//             <a href='/contact'>
//               Reach Out
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Home;
