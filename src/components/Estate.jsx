import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({estate}) => {
    const {id, image, estate_title, segment_name, facilities} = estate;
    return (
        <div className="card shadow-xl border-2 p-2">
        <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={image} alt="Property Image" /></figure>
            <div className="card-body">

                    {/* facilities */}
                    <div className='flex gap-2'>
                            {
                                facilities.map((facilitie, inx) => <span key={inx} className="text-success py-1 px-4 rounded-xl text-xl bg-lime-100">{facilitie}</span> )
                            }
                    </div>

                    {/* estate_title */}
                     <h2 className="card-title">{estate_title}</h2>
                    {/*<h2>By: {publisher}</h2>

                    <hr/>
                    <div className='flex justify-between'>
                            <div>{category}</div>
                            <div className="flex items-center gap-2"><span>{rating}</span><FaRegStar/></div>
                    </div> */}

                <Link to={`/EstateDetails/${id}`} className="btn btn-success">View Property</Link>
            </div>
    </div>
    );
};

Estate.propTypes ={
    estate: PropTypes.object.isRequired
}
export default Estate;