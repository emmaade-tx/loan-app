import { User } from '@/types/user';

interface DetailsProp {
    user: User;
}
const CardDetails: React.FC<DetailsProp>  = ({user}) => {

  return (
    <div className='card-details'>
        <div className='container'>
          <div className="card-info">
            <h2 id="titlePi">Personal Information</h2>
            <div className="card-info-details">
                <div className="info">
                    <p>FULL NAME</p>
                    <p>{`${user.profile.firstName} ${user.profile.lastName}`}</p>
                </div>
                <div className="info">
                    <p>Phone Number</p>
                    <p id="phoneNumber">{user.profile.phoneNumber}</p>
                </div>
                <div className="info">
                    <p>Email Address</p>
                    <p>{user.email}</p>
                </div>
                <div className="info">
                    <p>Bvn</p>
                    <p>{user.profile.bvn}</p>
                </div>
                <div className="info">
                    <p>Gender</p>
                    <p>{user.profile.gender}</p>
                </div>
                <div className="info">
                    <p>Marital status</p>
                    <p>Single</p>
                </div>
                <div className="info">
                    <p>Children</p>
                    <p>None</p>
                </div>
                <div className="info">
                    <p>Type of residence</p>
                    <p>Parent’s Apartment</p>
                </div>
            </div>
          </div>
          <div className='card-divider'>
			<hr />
		  </div>
          <div className="card-info">
            <h2>Education and Employment</h2>
            <div className="card-info-details education-info">
                <div className="info">
                    <p>level of education</p>
                    <p>{user.education.level}</p>
                </div>
                <div className="info">
                    <p>employment status</p>
                    <p>{user.education.employmentStatus}</p>
                </div>
                <div className="info">
                    <p>sector of employment</p>
                    <p>{user.education.sector}</p>
                </div>
                <div className="info">
                    <p>Duration of employment</p>
                    <p>{user.education.duration}</p>
                </div>
                <div className="info">
                    <p>office email</p>
                    <p>{user.education.officeEmail}</p>
                </div>
                <div className="info">
                    <p>Monthly income</p>
                    <p>{`₦${user.education.monthlyIncome[0]} to ₦${user.education.monthlyIncome[1]}`}</p>
                </div>
                <div className="info">
                    <p>loan repayment</p>
                    <p>{user.education.loanRepayment}</p>
                </div>
            </div>
          </div>
          <div className='card-divider'>
			<hr />
		  </div>
          <div className="card-info">
            <h2>Socials</h2>
            <div className="card-info-details">
                <div className="info">
                    <p>Twitter</p>
                    <p>{user.socials.twitter}</p>
                </div>
                <div className="info">
                    <p>Facebook</p>
                    <p>{user.socials.facebook}</p>
                </div>
                <div className="info">
                    <p>Instagram</p>
                    <p>{user.socials.instagram}</p>
                </div>
            </div>
          </div>
          <div className='card-divider'>
			<hr />
		  </div>
          <div className="card-info">
            <h2>Guarantor</h2>
            <div className="card-info-details">
                <div className="info">
                    <p>full Name</p>
                    <p>{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</p>
                </div>
                <div className="info">
                    <p>Phone Number</p>
                    <p>{user.guarantor.phoneNumber}</p>
                </div>
                <div className="info">
                    <p>Address</p>
                    <p>{user.guarantor.address}</p>
                </div>
                <div className="info">
                    <p>Relationship</p>
                    <p>{user.guarantor.relationship}</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CardDetails;