import { ReactComponent as ProfileIcon } from '@/assets/images/profile-avatar.svg';
import { ReactComponent as FilledStar } from '@/assets/images/filled-star.svg';
import { ReactComponent as Star } from '@/assets/images/no-fill-star.svg';
import { User } from '@/types/user'

interface UserProps {
    user: User
}

const CardTab: React.FC<UserProps> = ({user}) => {

    return (
    <div className="card-tabs">
      <div className="container">
        <div className='profile-info'>
          {user.profile?.avatar ? (
            <img className='profile-photo' src={user.profile.avatar} />
          ) : (
            <ProfileIcon />
          )}
          <div className='info-name'>
            <p>
              {`${user.profile?.firstName} ${user.profile?.lastName}`}
            </p>
            <span>{user.profile.bvn}</span>
          </div>
          <div className='line'>
            <hr />
          </div>
          <div className='tier'>
            <p>User's Tier</p>
            <div className='rating'>
                <FilledStar />
                <Star />
                <Star />
            </div>
          </div>
          <div className='line'>
            <hr />
          </div>
          <div className='account'>
            <p className='acct-bal'>₦{user.accountBalance}</p>
            <p className='acct-number'>{`${user.accountNumber}/Providus Bank`}</p>
          </div>
        </div>
        <div className='tabs'>
          <p className='active'>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
    </div>
  );
}

export default CardTab;
