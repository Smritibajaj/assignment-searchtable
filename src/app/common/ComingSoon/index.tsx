import React from 'react';
import ComingSoonImage from 'assignment-typescript-fe/assets/img/coming-soon.svg';
import PageTitle from '../Typography/PageTitle';
import Button from '../Button';
import { Link } from 'react-router-dom';
import AuthHelpers from '../../helpers/AuthHelpers';
import { APP_USER_ROUTES } from '../../utils/constants/appRoutes';

interface Props{
  routeKey ?: string;
}

const ComingSoon: React.FC<Props> = (props) => {
  return (
    <div className='flex flex-col justify-center items-center bg-brand-primary-white py-16 px-6 w-full'>
      <div className='max-w-xs'>
        <img src={ComingSoonImage} alt="coming soon" className='w-72'/>
      </div>
      <div className='flex flex-col justify-center items-center mt-6'>
        <PageTitle className="text-brand-text-tableHead mb-4 text-3xl">
          Coming Soon !
        </PageTitle>
        <p className='text-brand-text-title mb-4'>We are currently working on this. Stay tuned!</p>
        <div className=''>
          <Button tag={Link} to={AuthHelpers.getUserTypeFromLocalStorage()
      ? `/${AuthHelpers.getUserTypeFromLocalStorage()}/${
          APP_USER_ROUTES.dashboard
        }`
      : ""} text="Visit Home"/>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon